import axios from "axios";
import ReactDOM from "react-dom/client";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Link,
} from "react-router-dom";
import React, { useEffect, useState } from "react";
import Landing from "./Components/Landing";
import ByRecipe from "./Components/ByRecipe";
import ByIngredient from "./Components/ByIngredient";
import Layout from "./Components/Layout";
import Login from "./Components/Login";
import Login_Signup from "./Components/Login_Signup";
import RecipeDisplay from "./Components/RecipeDisplay";
import Profile from "./Components/Profile";
import AddRecipe from "./Components/AddRecipe";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Landing />} />
      <Route path="/byrecipe" element={<ByRecipe />} />
      <Route path="/byingredient" element={<ByIngredient />} />
      <Route path="/login" element={<Login_Signup />} />
      <Route path="/recipe" element={<RecipeDisplay />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/addrecipe" element={<AddRecipe />} />
    </Route>
  )
);
function App() {
  return ( 
    <RouterProvider router={router} />
  );
}

export default App;


