// import dependencies
import express from "express";
import cors from "cors";

// app config
const app = express();
const port = 3001;

// middleware with cors
app.use(express.json());
app.use(cors());

// api routes
app.get("/", (req, res) => {
  res.status(200).send("hello World");
});

app.post("/api/v1/calculateTip", (req, res) => {
  const amount = parseInt(req.body.amount);
  const percentage = parseInt(req.body.percentage);

  const toBePayed = (percentage / 100) * amount;

  res.status(200).json({ toBePayed });
});

// listen
app.listen(port, () => console.log(`Listening on localhost: ${port}`));
