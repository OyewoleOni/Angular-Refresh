import { Component, OnInit } from '@angular/core';

interface Product{
  sno: string;
  name: string;
  image: string;
  qty: number;
  price: number;
}

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  public product:Product = {
    sno: 'AA101',
    name: 'MI Watch',
    image :'data:image/jpeg;base64,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',
    qty: 2,
    price: 1500
  };

  constructor() { }

  ngOnInit(): void {
  }

  public incrementQty():void{
    this.product ={
      ...this.product,
      qty : this.product.qty + 1
    }
  }

  public decrementQty():void{
    this.product ={
      ...this.product,
      qty : this.product.qty - 1 > 0 ? this.product.qty - 1: 1
    }
  }
}
