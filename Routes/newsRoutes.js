module.exports = app => {
const express = require('express');
const router = express.Router();
const {check} = require('express-validator');
const news = require("../controllers/newsController.js");
  

    // Create a new news
    router.post("/",
    [
      check('Source').isAlpha('en-US',{ignore:" "}),
      check("News").isAlphanumeric('en-US',{ignore:" "}),
      check('artistName').isAlphanumeric('en-US',{ignore:" "}),
      check('artistID').isInt()     
  ],
    news.createNews);

    // Retrieve all news
    router.get("/", news.findAllNews);

    // Retrieve one  news
    router.get("/:id", news.findNewsByID);

    // Update a news with id
    router.put("/:id", news.updateNews);

    // Delete a news with id
    router.delete("/:id", news.deleteById);
    
    app.use('/api/news', router);
  };