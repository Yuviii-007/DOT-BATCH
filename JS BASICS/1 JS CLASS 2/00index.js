console.log('chaliye shuru krte hai')

let rectangle ={
    length: 1,
    breadth: 2,


    //now behaviour draw is a behaviour
    draw: function(){
        console.log('drawing rectangle');
    }

}

function createRectangle(len , bre){
    return rectangle ={
        length: len, 
        breadth: bre,


        draw() {
            console.log('hello') ;
        }
    };
}

let rectangleObj = createRectangle(5, 4) ;
let rectangle2 =createRectangle(7, 8) ;