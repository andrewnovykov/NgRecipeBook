import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  inputs: ['recipe'],
})
export class RecipeItemComponent implements OnInit {

 recipe: Recipe;
 recipeId: number;

  constructor() { }

  ngOnInit() {
  }

}
