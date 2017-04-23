export const PI = 3.14; //ES6 constant

let areaOfCircle //block-scoped variable
        = (radius) => PI * radius * radius; //ES6 arrow function with expression body
/*
areaOfCircle = function(radius) {
    return PI * radius * radius;
}
*/

export class Shape { //ES6 class and export functionality
    
    constructor(name = 'Shape') { //ES6 default parameter value
        this.name = name;
    }
    
    area() { 
        return 0.0;
    }
    
    toString() {
        return `${this.name} with area ${area()}`; //ES6 string interpolation
    }
}

export class Circle extends Shape { //ES6 inheritance 
    
    constructor(radius) {
        super('Circle'); //ES6 call to super
        this.radius = radius;
    }
    
    area() {
        return areaOfCircle(this.radius);
    }
}

export class Square extends Shape {
    constructor(side) {
        super('Square');
        this.side = side;
    }
    
    area() {
        return this.side * this.side; 
    }
}

