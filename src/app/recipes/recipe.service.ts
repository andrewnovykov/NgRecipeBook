import { Injectable } from '@angular/core';
import { Recipe } from './recipe';
import { Ingredient} from '../shared/ingredient';

@Injectable()
export class RecipeService {

  private recipes: Recipe[] = [
    new Recipe('Пицца «Толстый фраер»','Пицца, которая состоит из трех видов мяса и большого количества овощей.', 'https://eda.ua/images/15578-220-184-tolstyj_fraer.jpg', [
    new Ingredient('тесто', 100), new Ingredient('мясо', 350) ] ),
    new Recipe('Ролл «Филадельфия с лососем» ','Восхитительный ролл с удивительным вкусом придется по вкусу всем и каждому', 'https://eda.ua/images/15674-220-184-fd81158534d7a1f2d1e68370d01d7aa437561ca0.jpg', [ ] )
  ];

  constructor() { }

  getRecipes(){
    return this.recipes;
  }

}
