const {circle, square, triangle} = require("./shapes");

describe('triangle', () => {
    test('should return true if a triangle generates with the correct color, text, and text color', () => {
        const newTriangle = new triangle();
        newTriangle.shapeColor = "blue";
        newTriangle.textColor = "white";
        newTriangle.text = "SVG";
        expect(newTriangle.render()).toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    
    <polygon points="150, 18 244, 182 56, 182" fill="blue" />

    <text x="150" y="125" font-size="40" text-anchor="middle" fill="white">SVG</text>

</svg>`);
    });
});

describe('circle', () => {
    test('should return true if a circle generates with the correct color, text, and text color', () => {
        const newCircle = new circle();
        newCircle.shapeColor = "red";
        newCircle.textColor = "black";
        newCircle.text = "SVG";
        expect(newCircle.render()).toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    
    <circle cx="150" cy="100" r="80" fill="red" />

    <text x="150" y="125" font-size="60" text-anchor="middle" fill="black">SVG</text>

</svg>`);
    });
});

describe('square', () => {
    test('should return true if a square generates with the correct color, text, and text color', () => {
        const newSquare = new square();
        newSquare.shapeColor = "yellow";
        newSquare.textColor = "blue";
        newSquare.text = "SVG";
        expect(newSquare.render()).toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    
    <rect width="100" height="100" x="10" y="10" rx="20" ry="20" fill="yellow" />

    <text x="60" y="75" font-size="40" text-anchor="middle" fill="blue">SVG</text>

</svg>`);
    });
});