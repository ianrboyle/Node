import express from "express";

const app = express();

app.use((req, res, next) => {
  console.log("In First middleware")
  next()
})

app.use("/users", (req, res, next) => {
  console.log("In user middleware")
  res.send("Username: Ian")
})

app.use("/", (req, res, next) => {
  console.log("In home middleware")
  res.send("Helloo from Gome")
})



app.listen(3000);