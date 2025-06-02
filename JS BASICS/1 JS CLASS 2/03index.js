function Rectangle(len, bre){
    this.lenght = len,
    this.breath = bre,
    this.draw = function(){
        console.log('Hello')
    }
}

let rectangleObject = Rectangle(8,1)


//constructor property


let Rectangle1 = new Function(`length`, `breath` `Rectangle(len, bre){
    this.lenght = length,
    this.breath = breath,
    this.draw = function(){
        console.log('Hello')
    }
}
`);
//object creation using Rectangle1 
let rect = new Rectangle1(2,3);
console.log(rect);