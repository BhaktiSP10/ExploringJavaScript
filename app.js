const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

//Create an instance of express
const app = express();

// We use the 'body-parser' middleware to parse the incoming request bodies 
app.use(bodyParser.urlencoded({ extended: false }));

// Set the view engine to ejs
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'view'));
console.log('views', path.join(__dirname, 'view'));

//Create a route for the home page
// The GET route for the form
app.get('/', (req, res) => {
    // Render the form and pass in the current student data 
    res.render('index');
});

//Creating a route for user to enter the numbers
// The POST route for form submissions
app.post("/calculate", (req, res) => {
    const { num1, num2 } = req.body;
    const sum = Number(num1) + Number(num2);
    const difference = Number(num1) - Number(num2);
    const product = Number(num1) * Number(num2);
    const qoutient = Number(num1) / Number(num2);
    res.render("result", { sum, difference, product, qoutient});
});

// The POST route for optionalresults form submissions
/*app.post("/calculate", (req, res) => {
    const { num1, num2 } = req.body;
    const sum = Number(num1) + Number(num2);
    const difference = Number(num1) - Number(num2);
    const product = Number(num1) * Number(num2);
    const qoutient = Number(num1) / Number(num2);

    const optionalresult = [
        { operation: 'Sum', value: sum },
        { operation: 'Difference', value: difference },
        { operation: 'Product', value: product },
        { operation: 'Quotient', value: qoutient }
      ];

    res.render('optionalresult',{optionalresult});
});*/

// Start the server on port 4000 
//Note we are advertising the service on port number 4000 and not 3000 this time
var port = 4000
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});