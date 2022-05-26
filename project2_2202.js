// constructor function with three parameters 
function ThreeD(x, y, z){
    this.x = x;
    this.y = y;
    this.z = z;

    this.calcDistance = function(point){ //the paramter of the calcDistance function is an object of the ThreeD constructor function

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

//Please note: there is another js file submitted with an alternate approach using class notation instead.
//We were advised by the TA to submit both files- one with and one without class notation.