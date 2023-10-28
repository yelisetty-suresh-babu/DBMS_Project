const mongoose = require("mongoose");

const Recipe = require("../models/Recipe");
const User = require("../models/User");
const getAllRecipe = async (req, res, next) => {
  let recipes;
  try {
    recipes = await Recipe.find();
  } catch (e) {
    console.log(e);
  }

  if (!blogs) {
    return res.status(404).json({ message: " No blogs found" });
  }

  return res.status(200).json({ recipes });
};

// const addRecipe = async (req, res, next) => {
//   const { Name, url, type, ingredients, procedure, user, date } = req.body;

//   const currentDate = new Date();

//   let existingUser;
//   try {
//     existingUser = await User.findById(user);
//   } catch (e) {
//     console.error(e);
//     return res.status(500).json({ message: "Internal server error" });
//   }

//   if (!existingUser) {
//     return res.status(400).json({ message: "User not found" });
//   }

//   const recipe = new Recipe({
//     Name,
//     url,
//     type,
//     ingredients,
//     procedure,
//     user,
//     date: currentDate,
//   });
//   // return res.status(200).json({ recipe });
//   try {
//     const session = await mongoose.startSession();
//     session.startTransaction();

//     await recipe.save({ session });

//     existingUser.recipes.push(recipe);
//     await existingUser.save({ session });

//     await session.commitTransaction();
//     session.endSession();

//     return res.status(200).json({ recipe });
//   } catch (err) {
//     console.error(err);
//     return res.status(500).json({ message: "Failed to add recipe" });
//   }
// };


const addRecipe = async (req, res, next) => {
  const { Name, url, type, ingredients, procedure, user, date } = req.body;
  const currentDate = new Date();

  let existingUser;

  try {
    existingUser = await User.findById(user);
  } catch (e) {
    console.error(e);
    return res.status(500).json({ message: "Internal server error" });
  }

  if (!existingUser) {
    return res.status(400).json({ message: "User not found" });
  }

  const recipe = new Recipe({
    Name,
    url,
    type,
    ingredients,
    procedure,
    user,
    date: currentDate,
  });

  try {
    await recipe.save();


    existingUser.recipes.push(recipe);
    await existingUser.save();

    return res.status(200).json({ recipe });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "cannot add the recipe" });
  }
};


const deleteRecipe = async () => {};
const updateRecipe = async () => {};
const getById = async () => {};
const getRecipeByName = async () => {};
const getRecipeByIngredients = async () => {};

module.exports = { getAllRecipe, addRecipe };
