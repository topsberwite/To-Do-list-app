import express from "express";

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

var todoList = [];
var tomorrowList = [];

app.get("/", (req, res) => {
  res.render("index.ejs", {
    getDynamicDayAndDate,
    todoList
  });
});

app.get("/tomorrow", (req, res) => {
  res.render("tomorrow.ejs", {
    getDynamicDayAndDate,
    tomorrowList
  });
});

app.post("/", (req, res) => {
  const getTask = req.body["toDo"];
  todoList.push(getTask);
  res.redirect("/");
});

app.post("/tomorrow", (req, res) => {
  const getTask = req.body["toDo"];
  tomorrowList.push(getTask);
  res.redirect("/tomorrow");
});


app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});


function getDynamicDayAndDate() {
  const now = new Date();
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  const day = now.getDay();
  const month = now.getMonth();
  
  const currentDay = days[day];
  const currentMonth = months[month];
  const currentDate = now.getDate();
  const currentYear = now.getFullYear();

  const dynamicDayDate = `${currentDay}, ${currentMonth} ${currentDate} ${currentYear}`;

  return dynamicDayDate;
}