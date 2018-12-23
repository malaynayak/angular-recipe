import { Component, OnInit } from '@angular/core';
import { Ingredient } from "../shared/ingredient.model";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients: Ingredient[] = [
    new Ingredient('Potato', 3),
    new Ingredient('Tomato', 2),
    new Ingredient('Bringal', 1),
    new Ingredient('Beans', 20),
    new Ingredient('Carrot', 3),
  ];

  constructor() { }

  ngOnInit() {
  }

}
