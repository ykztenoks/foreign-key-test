const express = require("express");

require("dotenv").config();
require("./config/db.config")();
const app = express();

app.use(express.json());

const beerRouter = require("./routes/beers.routes");
app.use("/beer", beerRouter);

const reviewRouter = require("./routes/review.routes");
app.use("/review", reviewRouter);
app.listen(Number(process.env.PORT), () => {
  console.log(`Server up and running on port ${process.env.PORT}`);
});
