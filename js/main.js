/*
A local nightclub is having a Battle of the Bands night in a few months. They expect many bands to sign up because the grand prize is $20,000. To make things easier on the nightclub management, they want each band to be assigned a number so that they can easily keep track of the order in which the bands will perform.

Your job is to write a function that accepts any band name as an argument. The function will increment a global variable by one each time it is invoked, and return that number, and the band name concatenated together.
*/

/*
let bandNumber = 1

const takeNumber = function ( bandTitle) {

    //    Write your awesome code here. See comments below for what should be returned.


    return ( bandNumber++ + ". " + bandTitle );
}

const scum = takeNumber("Galactic Scum")
console.log(scum)  // This should print "1. Galactic Scum" in the console

const under = takeNumber("Underdogs")
console.log(under)  // This should print "2. Underdogs" in the console

//console.log( "Practice is done!");
*/

/*
// Some extra code
*/

let bandNumber = 1
const bandTitles = [];

const takeNumber = function ( bandTitle ) {
    /*
        Write your awesome code here. See comments below for what should be returned.
    */

    bandTitles.push( bandTitle );
    return( bandTitles.length + ". " + bandTitles[ bandTitles.length - 1 ] );

}

const scum = takeNumber("Galactic Scum")
console.log(scum)  // This should print "1. Galactic Scum" in the console

const under = takeNumber("Underdogs")
console.log(under)  // This should print "2. Underdogs" in the console
