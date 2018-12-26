import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('Veg Curry', 'Lorem ipsum text', 'https://img.taste.com.au/56r_iNcB/w720-h480-cfill-q80/taste/2016/11/indian-style-vegetable-curry-59371-1.jpeg'),
    new Recipe('Spicy Veg Curry', 'Lorem ipsum text', 'https://img.taste.com.au/56r_iNcB/w720-h480-cfill-q80/taste/2016/11/indian-style-vegetable-curry-59371-1.jpeg')
  ];
  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }

}
