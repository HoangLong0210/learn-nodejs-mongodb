const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
const app = require("./app");

const db = process.env.DATABASE.replace(
  "<password>",
  process.env.DATABASE_PASSWORD
);

mongoose.connect(db).then(() => {
  console.log("DB connection successful!");
});

//connection db local
// mongoose.connect(process.env.DATABASE_LOCAL).then(() => {
//   console.log("DB connection successful!");
// });

const port = process.env.PORT || 8888;

app.listen(port, () => {
  console.log(`Server running on port ${port}...`);
});
