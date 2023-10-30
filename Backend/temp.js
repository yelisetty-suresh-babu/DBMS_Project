const API_KEY = "827957ef363b46d7843e11f92938836e";

async function getRecipesByName(recipeName) {
  const url = `https://api.spoonacular.com/recipes/search?apiKey=${API_KEY}&query=${recipeName}&number=10`;
  //   const response = await fetch(url);
  //   const data = await response.json();
  //   console.log(data);
  //   return data;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      // getRecipeInformation(data["id"]);
    });
}

async function getRecipeInformation(recipeId) {
  const url = `https://api.spoonacular.com/recipes/${633650}/information?apiKey=${API_KEY}`;
  //   const response = await fetch(url);
  //   const data = await response.json();
  //   return data;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);

    });
}

console.log(getRecipeInformation("samosa"));

// rl.question('Enter the recipe name: ', async (recipeName) => {
//     const recipeData = await getRecipesByName(recipeName);
//     if (recipeData['results']) {
//         console.log(`Recipes found with the name '${recipeName}':`);
//         console.log();
//         console.log();
//         for (let result of recipeData['results']) {
//             console.log("Title:", result['title']);
//             console.log();
//             const recipeInfo = await getRecipeInformation(result['id']);
//             if (recipeInfo) {
//                 console.log("Image: ",recipeInfo['image']);
//                 console.log("Cuisines:", recipeInfo['cuisines'] ? recipeInfo['cuisines'].join(", ") : "Not specified");
//                 console.log("Ready in Minutes:", recipeInfo['readyInMinutes']);
//                 console.log("Servings:", recipeInfo['servings']);
//                 console.log("Dish Types:", recipeInfo['dishTypes'] ? recipeInfo['dishTypes'].join(", ") : "Not specified");
//                 console.log();
//                 console.log("Ingredients:");
//                 console.log();
//                 for (let ingredient of recipeInfo['extendedIngredients']) {
//                     console.log(ingredient['name']);
//                 }
//                 console.log();
//                 if ('analyzedInstructions' in recipeInfo && recipeInfo['analyzedInstructions'] && recipeInfo['analyzedInstructions'].length > 0) {
//                     console.log("Recipe Steps:");
//                     for (let step of recipeInfo['analyzedInstructions'][0]['steps']) {
//                         console.log(step['step']);
//                     }
//                 } else if ('instructions' in recipeInfo && recipeInfo['instructions']) {
//                     console.log("Recipe Instructions:");
//                     console.log(recipeInfo['instructions']);
//                 } else {
//                     console.log("Recipe steps not found.");
//                 }
//                 console.log();
//                 console.log();
//             }
//         }
//     } else {
//         console.log(`No recipes found with the name: ${recipeName}`);
//     }
//     rl.close();
// });
