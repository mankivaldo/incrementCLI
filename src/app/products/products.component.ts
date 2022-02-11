import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  productList : Product[] = [];
  
  

  constructor() { }

  ngOnInit(): void {

    this.productList = [
      { id:1 , title:'Ibutura', price: 300, quantity: 10, like:0},
      { id:2 , title:'Ibutura', price: 100, quantity: 0, like:0},
      { id:3 , title:'Ibutura', price: 200, quantity: 8, like:70},
      { id:4 , title:'Ibutura', price: 300, quantity: 10, like:1}];
  }
  Buyproduct(i: number)
{
  this.productList[i].quantity--;
}
likeproduct(i:number)
{
  this.productList[i].like++;
}
}
