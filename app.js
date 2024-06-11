const express = require("express");
const app = express();
const morgan = require("morgan");
const logger = morgan("dev");
const data = require("./db.json");
const PORT = 8080;

app.use(logger);

app.get("/", (req, res) => {
  res.json({ message: "Welcome to the first Express lab" });
});

app.get("/people", (req, res) => {
  res.json(data);
});

app.get("/people/country/:country", (req, res) => {
  const { country } = req.params;
  console.log(country);
  const peopleFromCountry = data.filter(
    (person) => person.country.toLowerCase() === country.toLowerCase()
  );

  res.json(peopleFromCountry);
});

app.get("/people/age/:age", (req, res) => {
  const { age } = req.params;
  const peopleOfAge = data.filter((person) => person.age >= age);

  res.json(peopleOfAge);
});

app.get("/people/profession/:profession", (req, res) => {
  const { profession } = req.params;
  const peopleOfSameProfession = data.filter((person) =>
    person.profession.toLowerCase().includes(profession.toLowerCase())
  );

  res.json(peopleOfSameProfession);
});

app.listen(PORT, () => {
  console.clear();
  console.log("Server up and running on PORT: " + PORT);
});
