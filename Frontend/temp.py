import requests

API_KEY = "827957ef363b46d7843e11f92938836e"

def get_recipes_by_name(recipe_name):
    url = f"https://api.spoonacular.com/recipes/search?apiKey={API_KEY}&query={recipe_name}&number=10"
    response = requests.get(url)
    data = response.json()
    return data

def get_recipe_information(recipe_id):
    url = f"https://api.spoonacular.com/recipes/{recipe_id}/information?apiKey={API_KEY}"
    response = requests.get(url)
    data = response.json()
    return data

if __name__ == "__main__":  # Use double underscores for "__main__" instead of "_main_"
    recipe_name = input("Enter the recipe name: ")
    recipe_data = get_recipes_by_name(recipe_name)  # Use the user input for the recipe name
    if recipe_data['results']:
        print(f"Recipes found with the name '{recipe_name}':\n")
        for result in recipe_data['results']:
            print("Title:", result['title'])
            recipe_info = get_recipe_information(result['id'])
            if recipe_info:
                print("Image: ", recipe_info['image'])
                print("Cuisines:", ", ".join(recipe_info['cuisines']))
                print("Ready in Minutes:", recipe_info['readyInMinutes'])
                print("Servings:", recipe_info['servings'])
                print("Dish Types:", ", ".join(recipe_info['dishTypes']))
                print("Ingredients:\n")
                for ingredient in recipe_info['extendedIngredients']:
                    print(ingredient['original'])
                print()
                if 'analyzedInstructions' in recipe_info and recipe_info['analyzedInstructions'] and recipe_info['analyzedInstructions'][0]['steps']:
                    print("Recipe Steps:")
                    for step in recipe_info['analyzedInstructions'][0]['steps']:
                        print(step['step'])
                elif 'instructions' in recipe_info and recipe_info['instructions']:
                    print("Recipe Instructions:")
                    print(recipe_info['instructions'])
                else:
                    print("Recipe steps not found.")
                print()
    else:
        print(f"No recipes found with the name: {recipe_name}")
