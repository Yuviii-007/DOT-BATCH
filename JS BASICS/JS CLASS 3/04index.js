let courses = [
    
    { no: 1, naam: 'yuvraj' },
    { no: 2, naam: 'vaishnav'}

];

console.log(courses);

course = courses.find(function (course) {
    return course.naam === 'yuvraj';
})

console.log(course)
;