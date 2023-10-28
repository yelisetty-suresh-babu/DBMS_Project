const express = require("express");
const recipeRouter = express.Router();
const { getAllRecipe, addRecipe } = require("../controller/recipe-controller");

recipeRouter.get("/", getAllRecipe);
recipeRouter.post("/add", addRecipe);
// recipeRouter.put("/update/:id",  updateBlog);
// recipeRouter.get("/:id", getById);
// recipeRouter.delete("/:id",deleteBlog);
// recipeRouter.get("/user/:id",getByUserId)
module.exports = recipeRouter;
