const express = require("express");
const app = express();

app.get("/api/users", (req, res) => {
  res.send("<h1>Hello, Express.js Server!</h1>");
});

let port = 2000;

app.listen(port, () => {
  console.log(`listening start at ${port}`);
});
app.get('/about', (req, res) => {
    res.send("This is about page")
    console.log("about start")
})
app.get('/contact', (req, res) => {
    res.send("This is contact page")
    console.log("contact start")
})

const event = new Promise((resolve, reject) => {
  const name = "John"
  if (name == "Ashe") {
    resolve(name);
  } else {
    reject("Name is not correct: it's "+name)
  }
})

event.then((name) => {
  console.log(name)
}).catch((err) => {
  console.log(err)
})