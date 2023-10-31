const express = require("express");
const recipeRouter = express.Router();
const {
  getAllRecipe,
  addRecipe,
  getById,
  getRecipeByName,
  deleteRecipeByName,
  getRecipeByIngredients,
  getByIdString,
} = require("../controller/recipe-controller");

recipeRouter.get("/", getAllRecipe);
recipeRouter.post("/add", addRecipe);
// recipeRouter.put("/update/:id",  updateBlog);
recipeRouter.get("/id", getById);
recipeRouter.get("/:id", getByIdString);
recipeRouter.post("/name", getRecipeByName);
recipeRouter.post("/ingredient", getRecipeByIngredients);
recipeRouter.delete("/name", deleteRecipeByName);
// recipeRouter.get("/user/:id",getByUserId)
module.exports = recipeRouter;
