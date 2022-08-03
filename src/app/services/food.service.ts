import { Injectable } from '@angular/core';
import { Food } from '../models/food.model';

@Injectable({
  providedIn: 'root',
})
export class FoodService {
  getFoods(): Food[] {
    return [
      {
        id: 1,
        title: '7 Up',
        price: 15,
        image: 'assets/images/beverages/7 up.png',
        description: 
          '7 - Up Regular 600ml Refresh yourself with an Original 7UP® with 100% natural flavors and its iconic lemon lime flavor!.',
      },
      {
        id: 2,
        title: 'Alaska',
        price: 275,
        image: 'assets/images/beverages/alaska.png',
        description: 
          ' kundi choco MMMilk! Has Pro-Growth Nutrients and Choline that your active child needs.',
      },
      {
        id: 3,
        title: 'Chuckie',
        price: 90,
        image: 'assets/images/beverages/chuckie.png',
        description:
          'A combination of Vitamin D that helps in normal development of bones, and Iron & Zinc that supports normal cognitive development.',
      },
      {
        id: 4,
        title: 'Apple',
        price: 92,
        image: 'assets/images/produce/apple.png',
        description:
          'Fresh Apple (Approximate Weight Only): 1 PC Price: per PIECE ',
      },
      {
        id: 5,
        title: 'Egg',
        price: 255,
        image: 'assets/images/produce/egg.png',
        description:
          'Large Egg 1 tray',
      },
      {
        id: 6,
        title: 'Sitaw',
        price: 37,
        image: 'assets/images/produce/sitaw.png',
        description:
          '250 Grams Price: per 250 Grams',
      },
      {
        id: 7,
        title: 'Belly Sliced',
        price: 350,
        image: 'assets/images/meat/belly sliced.png',
        description:
          'The good meat belly liempo sliced (1kg)',
      },
      {
        id: 8,
        title: 'Lechon Kawali',
        price: 200,
        image: 'assets/images/meat/lechon kawali.png',
        description:
          'The good meat lechon kawali (1kg)',
      },
      {
        id: 9,
        title: 'Face Mask',
        price: 35,
        image: 'assets/images/personal care/face mask.png',
        description:
          '3D disposable mask, sanitary and convenient for use.',
      },
      {
        id: 10,
        
        title: 'Alcohol',
        price: 124,
        image: 'assets/images/personal care/alcohol.png',
        description:
          'Green Cross Ethyl Alcohol with Moisturizer 70% Solution (500 mL)',
      },
    ];
  }

  getFood(id: number): Food {
    return this.getFoods().find((food) => food.id === id);
  }
}
