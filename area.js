const message = 'The area of a triangle is:';

function sFunction(side1, side2, side3) {
  return ((side1 + side2 + side3)/2);
} 

let s = sFunction(5,6,7);

function aFunction(s,side1,side2,side3){
    return Math.sqrt(s* (s-side1)*(s-side2)*(s-side3));
}

let area = aFunction(9,5,6,7);

console.log(message + " "+ area);