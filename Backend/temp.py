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

if __name__ == "_main_":
    recipe_name = input("Enter the recipe name: ")
    recipe_data = get_recipes_by_name(recipe_name)
    if recipe_data['results']:
        print(f"Recipes found with the name '{recipe_name}':")
        print()
        print()
        for result in recipe_data['results']:
            print("Title:", result['title'])
            print()
            recipe_info = get_recipe_information(result['id'])
            if recipe_info:
                print("Image: ", recipe_info['image'])
                print("Cuisines:", ", ".join(recipe_info['cuisines']))
                print("Ready in Minutes:", recipe_info['readyInMinutes'])
                print("Servings:", recipe_info['servings'])
                print("Dish Types:", ", ".join(recipe_info['dishTypes']))
                print()
                print("Ingredients:")
                print()
                for ingredient in recipe_info['extendedIngredients']:
                    print(ingredient['name'])
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
                #print("Author/Creator:", recipe_info['creditsText'])
                print()
    else:
        print(f"No recipes found with the name: {recipe_name}")