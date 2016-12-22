import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe';
import { ShoppingListService} from '../../shopping-list/shopping-list.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  inputs: ['selectedRecipe']

})
export class RecipeDetailComponent implements OnInit {

  selectedRecipe: Recipe;

  constructor(private sls: ShoppingListService) { }

  onAddToShoppingList(){
    this.sls.addItems(this.selectedRecipe.ingredients)
  }

  ngOnInit() {
  }

}
