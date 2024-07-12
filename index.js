const inquirer = require('inquirer');
const fs = require('fs');
const {circle, square, triangle} = require("./lib/shapes");
const MaxLengthInputPrompt = require('inquirer-maxlength-input-prompt')
//imports our packages
inquirer.registerPrompt('maxlength-input', MaxLengthInputPrompt)
// edits inquirer prompts to have a max length input for character control

inquirer
    .prompt([
        {
            type: 'maxlength-input',
            name: "text",
            message: "Enter 3 characters.",
            maxLength: 3
        },
        // asks user to put in 3 characters, sets a character limit that stops the program if they try to input more than 3
        {
            type: "list",
            name: "shape",
            message: "Select a shape.",
            choices: ["circle", "triangle", "square"]
        },
        // asks user to select a shape and gives them options to pick from
        {
            type: "input",
            name: "shapeColor",
            message: "What color would you like your shape to be? (color keyword or hexadecimal number)"
        },
        // asks user to select a color for their shape
        {
            type: "input",
            name: "textColor",
            message: "What color would you like your text to be? (color keyword or hexadecimal number)"
        }
        // sks user to select a color for their text
    ])

.then((res) => {
    let shape;
    if (res.shape === "circle") {
        shape = new circle(res.text, res.textColor, res.shapeColor);
    } else if (res.shape === "square") {
        shape = new square(res.text, res.textColor, res.shapeColor);
    } else if (res.shape === "triangle") {
        shape = new triangle(res.text, res.textColor, res.shapeColor);
    }
    // checks to see which shape the user picked, makes a new shape with their inputs.

    fs.writeFile("logo.svg", `${shape.render()}`, (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log('Success!')
        }
    })
});
// writes the SVG file with the text generated when running the render function. If there's an error it logs the error, if not it says success so the user knows their program worked