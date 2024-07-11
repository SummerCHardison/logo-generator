const inquirer = require('inquirer');
const fs = require('fs');
const {circle, square, triangle} = require("./lib/shapes");
const MaxLengthInputPrompt = require('inquirer-maxlength-input-prompt')
inquirer.registerPrompt('maxlength-input', MaxLengthInputPrompt)

inquirer
    .prompt([
        {
            type: 'maxlength-input',
            name: "text",
            message: "Enter 3 characters.",
            maxLength: 3
        },
        {
            type: "list",
            name: "shape",
            message: "Select a shape.",
            choices: ["circle", "triangle", "square"]
        },
        {
            type: "input",
            name: "shapeColor",
            message: "What color would you like your shape to be? (color keyword or hexadecimal number)"
        },
        {
            type: "input",
            name: "textColor",
            message: "What color would you like your text to be? (color keyword or hexadecimal number)"
        }
    ])
// yes please. I'll look into it as well and let you know if I figure it out
.then((res) => {
    let shape;
    if (res.shape === "circle") {
        shape = new circle(res.text, res.textColor, res.shapeColor);
    } else if (res.shape === "square") {
        shape = new square(res.text, res.textColor, res.shapeColor);
    } else if (res.shape === "triangle") {
        shape = new triangle(res.text, res.textColor, res.shapeColor);
    }

    fs.writeFile("logo.svg", `${shape.render()}`, (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log('Success!')
        }
    })
});