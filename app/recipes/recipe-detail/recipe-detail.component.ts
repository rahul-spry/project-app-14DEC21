import { Component, OnInit, Input } from '@angular/core';

import { Recipe } from "../recipe";
import { FormBuilder, FormGroup } from '@angular/forms';
import { RecipeData } from '../../shared/recipeData.service';

@Component({
   selector: 'rb-recipe-detail',
  templateUrl: 'recipe-detail.component.html',
  providers: [RecipeData]
})
export class RecipeDetailComponent implements OnInit {
  @Input() selectedRecipe: Recipe;
  recipeFormValue  ! : FormGroup

  constructor(private fb : FormBuilder, private rd:RecipeData) {
    this.selectedRecipe
  }

  ngOnInit() {
    this.recipeFormValue=this.fb.group({
      recipeName:[''],
      description:[''],
      price:[''],
      imageURL:[''],
      offerdate:[''],
      offerExpiryDate:[''],
      details:[''],
      limit:[]
    })
  }

  addRecipe(){
    this.rd.addRecipes(this.recipeFormValue.value)
  }

}
