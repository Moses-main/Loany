const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.get("/register", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "register.html"));
});

app.post("/register", (req, res) => {
  // Handle user registration logic here
  const username = req.body.username;
  const password = req.body.password;
  // Perform registration process and save to the database
  res.send(`User ${username} registered successfully!`);
});

app.get("/apply-loan", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "apply-loan.html"));
});

app.post("/apply-loan", (req, res) => {
  // Handle loan application logic here
  const loanAmount = req.body.amount;
  const loanTerm = req.body.term;
  // Perform credit scoring API call (hypothetical example)
  // You would replace the following with a real API call to a credit scoring service
  const creditScore = getCreditScore(); // Assume this is a function that gets the credit score
  res.send(`Loan application submitted! Credit Score: ${creditScore}`);
});

function getCreditScore() {
  // Hypothetical function to get credit score from an API
  // Replace this with a real API call
  return Math.floor(Math.random() * (850 - 300 + 1)) + 300; // Generates a random credit score between 300 and 850
}

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
