const router = require("express").Router();

const BeerModel = require("../models/Beer.model");

//Create

router.post("/create-beer", async (req, res) => {
  try {
    const newBeer = await BeerModel.create(req.body);
    return res.status(201).json(newBeer);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
});

// Read - details

router.get("/:beerId", async (req, res) => {
  try {
    const { beerId } = req.params;

    const beer = await BeerModel.findOne({ _id: beerId }).populate("reviews");

    return res.status(200).json(beer);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
});
module.exports = router;
