const userTab = document.querySelector("[data-yourWeather]");
const searchTab = document.querySelector("[data-searchWeather]");

const userContainer = document.querySelector(".weather-container");

const grantAccessContainer = document.querySelector(".grant-location-container");
const searchForm = document.querySelector("[data-searchForm]");
const loadingScreen = document.querySelector(".loading-container");

const userInfoContainer = document.querySelector(".user-info-container");
const errorContainer = document.querySelector(".error-container");

let oldTab = userTab;

const API_KEY = "c40b2ed5a4609fa8df7694643f1ca4c0";

oldTab.classList.add("current-tab");
getfromSessionStorage();            //ye isliye call kiya hai kyoki shayd phle se storage me lat lon present ho skte hai ..ye use chefck krehga


function switchedTab(clickedTab) {
    if (clickedTab != oldTab) {
        oldTab.classList.remove("current-tab");
        oldTab = clickedTab;
        oldTab.classList.add("current-tab");

        if (!searchForm.classList.contains("active")) {
            userInfoContainer.classList.remove("active");
            grantAccessContainer.classList.remove("active");
            searchForm.classList.add("active");
        }
        else {
            searchForm.classList.remove("active");
            userInfoContainer.classList.remove("active");
            //ab me weathe tab me aa gya hu to weather bhi display krna pdega , so let's check
            //locala storage first for cordinates , if we haved saved them their.
            
            grantAccessContainer.classList.remove("active");

            getfromSessionStorage();

        }
    }
}

userTab.addEventListener('click', () => {
    //pass clicked tab as input parameter
    switchedTab(userTab);
})

searchTab.addEventListener('click', () => {
    //pass clicked tab as input parameter
    switchedTab(searchTab);
})

//check if coordinates aare already present in sesion storage 
function getfromSessionStorage() {
    const localCoordinates = sessionStorage.getItem("user-coordinates");
    if (!localCoordinates) {
        //agr local cordiaanates nahi mile hai to 
        grantAccessContainer.classList.add("active");
    }
    else {
        grantAccessContainer.classList.remove("active");
        const coordinates = JSON.parse(localCoordinates);
        fetchUserWeatherInfo(coordinates);
    }
}


async function fetchUserWeatherInfo(coordinates) {
    const { lat, lon } = coordinates;
    // remove grant cntainer 
    grantAccessContainer.classList.remove("active");
    //loading visible 

    loadingScreen.classList.add("active");
    //api call
    try {
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`);
        const data = await response.json();

        loadingScreen.classList.remove("active");
        userInfoContainer.classList.add("active");
        renderWeatherInfo(data);

    }
    catch (err) {
        console.error("Error fetching weather:", err);
        alert("Failed to fetch weather. Please try again.");
        loadingScreen.classList.remove('active');
        userInfoContainer.classList.remove("active");
        grantAccessContainer.classList.add("active");;
    }

}

function renderWeatherInfo(weatherInfo) {
    //firstly fetch the elements 

    const cityName = document.querySelector("[data-cityName]");
    const countryIcon = document.querySelector("[data-countryIcon]");
    const desc = document.querySelector("[data-weatherDesc]");
    const weatherIcon = document.querySelector("[data-weatherIcon]");
    const temp = document.querySelector("[data-temp]");
    const windSpeed = document.querySelector("[data-windSpeed]");
    const humidity = document.querySelector("[data-humidity]");
    const cloudiness = document.querySelector("[data-cloudiness]");

    cityName.innerText = weatherInfo?.name;
    countryIcon.src = `https://flagcdn.com/144x108/${weatherInfo?.sys?.country.toLowerCase()}.png`;

    desc.innerText = weatherInfo?.weather?.[0]?.description;
    weatherIcon.src = `http://openweathermap.org/img/w/${weatherInfo?.weather?.[0]?.icon}.png`;
    temp.innerText = weatherInfo?.main?.temp+ `°C`  ;
     windSpeed.innerText = weatherInfo?.wind?.speed + `m/s`;
    humidity.innerText = weatherInfo?.main?.humidity;
    cloudiness.innerText = weatherInfo?.clouds?.all;

}

const grantAccessButton = document.querySelector("[data-grantAccess]");

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    }
    else {
        grantAccessButton.style.display = 'none';
    }
}

function showPosition(position) {
    const userCoordinates = {
        lat: position.coords.latitude,
        lon: position.coords.longitude,
    }
    sessionStorage.setItem("user-coordinates", JSON.stringify(userCoordinates));
    grantAccessContainer.classList.remove("active");
    fetchUserWeatherInfo(userCoordinates);
}


grantAccessButton.addEventListener("click", getLocation);

const searchInput = document.querySelector("[data-searchInput]");
searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let cityName = searchInput.value;

    if (cityName === "")
        return;
    else {
        fetchSearchWeatherInfo(cityName);
        // searchInput.value = "";
    }
});


async function fetchSearchWeatherInfo(city) {

    loadingScreen.classList.add("active");
    userInfoContainer.classList.remove("active");
    grantAccessContainer.classList.remove("active");

    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
        const data = await response.json();
        console.log(data); // API response ko check karne ke liye

        if (data.cod === "404") {
            alert("❌ शहर नहीं मिला! कृपया सही नाम डालें।");
            loadingScreen.classList.remove("active");
            return;
        }

        loadingScreen.classList.remove("active");
        userInfoContainer.classList.add("active");
        renderWeatherInfo(data);
    }
    catch (err) {
        console.error("Error fetching weather:", err);
        alert("Failed to fetch weather. Please try again later.");
        loadingScreen.classList.remove("active");
        

        if (error.message.includes("404")) {
            errorContainer.innerText = "❌ शहर नहीं मिला! कृपया सही नाम डालें।";
        } else if (error.message.includes("401")) {
            errorContainer.innerText = "🔑 API Key गलत है! कृपया सही API Key इस्तेमाल करें।";
        } else {
            errorContainer.innerText = "⚠️ कुछ गड़बड़ हो गई! कृपया फिर से कोशिश करें।";
        }
    }
}