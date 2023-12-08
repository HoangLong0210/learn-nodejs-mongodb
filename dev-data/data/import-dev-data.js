const fs = require("fs");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Tour = require("../../models/tourModel");

dotenv.config({ path: "./config.env" });

const db = process.env.DATABASE.replace(
  "<password>",
  process.env.DATABASE_PASSWORD
);

mongoose.connect(db).then(() => {
  console.log("DB connection successful!");
});

const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/tours-simple.json`, "utf-8")
);
//import data into db
const importData = async () => {
  try {
    await Tour.create(tours);
    console.log("Data successfully imported!");
    process.exit();
  } catch (err) {}
};

//delete all data from db
const deleteData = async () => {
  try {
    await Tour.deleteMany();
    console.log("Data successfully deleted!");
    process.exit();
  } catch (err) {}
};

if (process.argv[2] === "--import") {
  importData();
} else if (process.argv[2] === "--delete") {
  deleteData();
}