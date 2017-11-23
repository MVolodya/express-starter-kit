import express from "express";

const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello World!!!");
});

app.listen(PORT, err => {
  if (err) {
    throw err;
  } else {
    console.log(
      `Server running on port: ${PORT} || Welcome to ${
        process.env.NODE_ENV
      } mode`
    );
  }
});

if (process.env.NODE_ENV === "development") {
  console.log("Welcome to development");
}

if (process.env.NODE_ENV === "production") {
  console.log("Welcome to production");
}
