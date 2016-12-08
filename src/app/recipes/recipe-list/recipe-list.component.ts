import { Component, OnInit, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  outputs: ['recipeSelected']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [];
  recipeSelected = new EventEmitter<Recipe>();
  recipe = new Recipe('Dummy','Dummy', 'http://rusmaneken.ru/images/cms/thumbs/fec428932ea8a5e54db8720425bdf88f094615d3/maneken-zhenskij-_glance-06_205_308_5_100.jpg' );

  constructor() { }

  ngOnInit() {
  }

  onSelected(recipe: Recipe){
    this.recipeSelected.emit(recipe)
  }

}
