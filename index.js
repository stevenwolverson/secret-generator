import express from "express";
import axios from "axios";

const port = 3000;
const app = express();
const API_URL = "https://secrets-api.appbrewery.com";

app.use(express.static("public"));

app.get("/", async (req, res) => {
  try {
    const result = await axios.get(`${API_URL}/random`);
    res.render("index.ejs", {
      secret: result.data.secret,
      user: result.data.username,
    });
  } catch (err) {
    console.log(err.response.data);
    res.status(500);
  }
});

app.listen(port, () => {
  console.log(`Server run on port ${port}`);
});
