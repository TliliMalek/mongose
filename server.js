const express = require("express");
const database = require("./config/database");
const User = require("./model/user");
require("dotenv").config({ path: "./config/.env" });
Port = process.env.port;
const app = express();
database();

//create user//
async function createUser() {
  const user = new User({
    name: "Maram",
    age: 18,
    favoriteFoods: ["ma9arouna bel 7out", "lasaniya"],
  });
  await user.save();
}
//createUser();//
async function MultiUser() {
  await User.insertMany([
    {
      name: "Manar",
      age: 14,
      favoriteFoods: ["ma9arouna bidha", "lasaniya"],
    },
    {
      name: "Malek",
      age: 24,
      favoriteFoods: ["9ahwa", "jwajem"],
    },
    {
      name: "Borhene",
      age: 28,
      favoriteFoods: ["besbousa", "lasaniya"],
    },
  ]);
}
//MultiUser();
async function find() {
  const find = await User.find({ name: "Malek" });
  console.log(find);
}
//find();
async function findOne() {
  const find = await User.findOne({ favoriteFoods: "besbousa" });
  console.log(find);
}
//findOne();
async function findById() {
  const find = await User.findById("640a14167aa6de111dd4c759");
  console.log(find);
}
//findById();
//Classic Updates Find, Edit, then Save
User.findOne({ name: "Malek" }).then((user) => {
  user.favoriteFoods.push("Hamburger");
  user.markModified("favoriteFoods");
  user.save();
});
async function Updates() {
  const find = await User.findOneAndUpdate(
    { name: "Manar" },
    { name: "Tlili" }
  );
  console.log(find);
}
//Updates();
async function Delete() {
  const find = await User.findByIdAndRemove("640a179c677746ff4944b472");
  console.log(find);
}
//Delete();
async function Remove() {
  const find = await User.remove({ name: "Malek" });
  console.log(find);
}
//Remove();
async function filter() {
  const filters = await User.find({ favoriteFoods: "lasaniya" })
    .sort({ name: "asc" })
    .limit(2)
    .select("-age")
    .exec();

  console.log(filters);
}
filter();
app.listen(Port, (e) => {
  e ? console.log(e) : console.log(`server is running on port ${Port}`);
});
