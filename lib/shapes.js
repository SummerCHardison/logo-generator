class circle {
    constructor(text, textColor, shapeColor) {
        this.text = text
        this.textColor = textColor
        this.shapeColor = shapeColor
    }
    // creates a class named circle with inputs for shape color, text, and text color

    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    
    <circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />

    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>

</svg>`
// generate an SVG file with spots for input

// repeat for other shapes
    }
}

class square {
    constructor(text, textColor, shapeColor) {
        this.text = text
        this.textColor = textColor
        this.shapeColor = shapeColor
    }

    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    
    <rect width="100" height="100" x="10" y="10" rx="20" ry="20" fill="${this.shapeColor}" />

    <text x="60" y="75" font-size="40" text-anchor="middle" fill="${this.textColor}">${this.text}</text>

</svg>`
    }
}

class triangle {
    constructor(text, textColor, shapeColor) {
        this.text = text
        this.textColor = textColor
        this.shapeColor = shapeColor
    }

    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    
    <polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}" />

    <text x="150" y="125" font-size="40" text-anchor="middle" fill="${this.textColor}">${this.text}</text>

</svg>`
    }
}
module.exports = {circle, square, triangle};

// export so other files has access to this one