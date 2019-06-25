import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  constructor(private shoppingListService: ShoppingListService){}

  private recipes: Recipe[] = [
    new Recipe(
      'Kadai Paneer',
      'Chunks of pan fried cottage cheese and cubes of tomato and green capsicum cooked in a delicious bhuna onion and tomato masala',
      'http://bankefoods.com/wp-content/uploads/2016/11/kadai-paneer.jpg',
      [
        new Ingredient('Cottage Cheese Cubes', 15),
        new Ingredient('Tomato', 2),
        new Ingredient('Capsicum', 2)
      ]
    ),

    new Recipe(
      'Maharaja Burger',
      'Super delicious yummy burger.',
      'http://foodvala.com/wp-content/uploads/2017/03/veg-burger.jpeg',
      [
        new Ingredient('Bread', 2),
        new Ingredient('Cocumber', 1),
        new Ingredient('Tomato', 1),
      ]
    )
  ];

  getRecipes() {
    // return a copy of the array.
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }

}
