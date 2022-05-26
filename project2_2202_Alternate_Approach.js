/**during the tutorial zoom session on Thursday I was advised by the TA to submit 
* another file with the class notation implemented in it;
* (there is another js file submitted with no class notation).
*/
// Here is the alternate approach using class notation instead:
class ThreeD {
// constructor function with three parameters 
 constructor (x, y, z){
    this.x = x;
    this.y = y;
    this.z = z;
 }
 calcDistance(point)
 {
    console.log( Math.sqrt( Math.pow((this.x - point.x),2) + Math.pow((this.y - point.y),2) + Math.pow((this.z - point.z),2)) );
 }
}



//creating two point objects
let  point1 = new ThreeD(2, 4, 16);
let point2 = new ThreeD(5,10,20);

//printing the coordinates of the two newly created point objects 
console.log("The first point object is created and its coordinates are: " + "x= " + point1.x + " y= " + point1.y + " z= " + point1.z);
console.log("The second point object is created and its coordinates are: " + "x= " + point2.x + " y= " + point2.y + " z= " + point2.z);

//finding the distance between the two point objects created above:
console.log("The distance between the two point objects is: ");
point1.calcDistance(point2);