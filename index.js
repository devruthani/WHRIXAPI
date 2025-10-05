

const express = require("express");
const { sequelize, Career } = require("./src/models");

const app = express();
app.use(express.json());

;

// Careers route
app.get("/", async (req, res) => {
    res.send("hello whrix");
  
});

// Sync DB & start server
// const PORT = 5000;
sequelize.sync({ alter: true }) // use { force: true } to drop/recreate
  .then(() => {
    app.listen(process.env.PORT, () => console.log("DB connected"));
  })
  .catch(err => console.error("DB connection failed:", err));


  app.listen(process.env.PORT,()=>{
    console.log(`server is running on port ${process.env.PORT}`)
})