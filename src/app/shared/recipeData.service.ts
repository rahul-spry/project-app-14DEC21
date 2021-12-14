import { Injectable } from '@angular/core';
import { Recipe } from '../recipes/recipe';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class RecipeData {
  constructor(private http:HttpClient){}
  /* loadRecipes(): Recipe[] {
    return [
        {
            name: 'Chocolate Cake', 
            description: 'With milk chocolate', 
            imagePath: 'https://imgcdn.floweraura.com/Chocolate-Cake-Five-Star-A.jpg',
            price: 2030,
            offerdate: '12/13/2021',
            offerExpiryDate: '12/15/2021',
            details: 'GET IT NOW',
            limit: 10
        },
        {
            name: 'Black Forest Cake', 
            description: 'With dark chocolate', 
            imagePath: 'https://cdn.shopify.com/s/files/1/1060/3816/products/rich-chocolate-truffle-cake_large.jpg?v=1594974441',
            price: 2030,
            offerdate: '12/13/2021',
            offerExpiryDate: '12/15/2021',
            details: 'GET IT NOW',
            limit: 10
        }
    ];
  } */

  loadRecipesFromDB(){
    return this.http.get('https://rahulpro-740de-default-rtdb.firebaseio.com/myrecipes.json')
  }

  addRecipes(recipeData:any){
    return this.http.post('https://rahulpro-740de-default-rtdb.firebaseio.com/myrecipes.json',recipeData)
    .subscribe((data)=>{
      console.log(data);
    })
  }

}