function makeLine(size) {
    let line = "";
    for (let index = 0; index < size; index++){
        line += "#";
    }
    return line;
} 
//console.log(makeLine(5));

function makeSquare(size){{
    let square = "";
    for (let indexj = 0; indexj < size; indexj++){
    square += "\n" + (makeLine(size)) 
            }
        return square;
    }
}
//console.log(makeSquare(5));

function makeRectangle(width, height){
    let rectangle = "";
    for (index = 0; index < height; index++){
        rectangle += (makeLine(width)) + "\n"
    }
    return rectangle
}
//console.log(makeRectangle(5,4));

function makeDownwardStairs(height){
    let triangle = "";
    for (index = 0; index < height; index++){
        triangle +=(makeLine(index + 1)) + "\n"
    }
    return triangle.slice(0,-1)
}
//console.log(makeDownwardStairs(5));


//really struggling with this one T_T
function makeSpaceLine(numSpaces, numChars){
    let spaces = "";
    for (index = 0; index < numChars ; index++){
        spaces += (makeDownwardStairs( numSpaces + index + numSpaces))
    }
    return spaces.slice(0,-1);
}
//console.log(makeSpaceLine(3,6));


//why is my output upside down???
function makeIsoscelesTriangle(height){
    let triangle = "";
    for (index = 0; index < height; index++){
        triangle += ((makeDownwardStairs(height - index - 1, 2 * index + 1)) + "\n");
    }
    return triangle.slice(0,-1);
}
console.log(makeIsoscelesTriangle(5));

function makeDiamond(height) {
    let diamond = "";
    for (index = 0; index < height; index++){
        diamond += (makeLine)
    }
}