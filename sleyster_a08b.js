/*Heather Sleyster
sleyster_a08b.js
INFO 2124
Thoendell
2/4/2020
*/


/* WRITE YOUR SOLUTION BETWEEN THIS LINE */
//This is the Math Utility Object Declaration that contains 3 Methods.
const MathUtility = {

    //This is the getAreaOfCircle Method that calculates the area of a circle given the radius.
     getAreaOfCircle(r) {
    return A = Math.PI*(Math.pow(r,2));
    },

    //This is the getAreaOfSquare Method that calculates the area of a square given the length of one side.
    getAreaOfSquare(s) {
    return A = Math.pow(s,2);
    },

    /*This is the getAreaOfTriangle Method that calculates the area of a triangle given the 
    length of the base and the height.*/
    getAreaOfTriangle(b,h) {
    return A = (b * h)/2;
    }
}; //This is the end of the MathUtility Object Declaration


/* AND THIS LINE */

//Test code
const outMsg = 
`
The area of a circle that is has a radius of 5 units is ${MathUtility.getAreaOfCircle(5)} units.
The area of a square whose side measures 13 units is ${MathUtility.getAreaOfSquare(13)} units.
The area of a triangle with a base of 3 units and height of 2 units is ${MathUtility.getAreaOfTriangle(3, 2)} units.

`
console.log(outMsg);