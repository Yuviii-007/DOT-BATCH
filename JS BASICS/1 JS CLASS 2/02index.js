//Dynamic Nature Of Object


function Rectangle(len, bre){
    this.lenght = len,
    this.breath = bre,
    this.draw = function(){
        console.log('Hello')
    }
}

let rectangleObject = new Rectangle(8,6);


rectangleObject.color = 'green ';
console.log(rectangleObject)