import { Component } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  public products:any=[
   
    {name:'pen',price:20,rating:4.3, isFreeDelivery:true},
    {name:'phone',price:2000,rating:4.7, isFreeDelivery:false},
    {name:'toy',price:30,rating:3.3, isFreeDelivery:true},
    {name:'shirt',price:20,rating:2.3, isFreeDelivery:false},
    {name:'bag',price:2000,rating:4.2, isFreeDelivery:true},
    {name:'laptop',price:60000,rating:4.8, isFreeDelivery:true},
    {name:'tv',price:20000,rating:3.2, isFreeDelivery:true},
    {name:'pendrive',price:700,rating:4.1, isFreeDelivery:false},
    {name:'pant',price:3000,rating:4.5, isFreeDelivery:true},
    {name:'pencil',price:10,rating:4.6, isFreeDelivery:false},
    {name:'cap',price:200,rating:3.3, isFreeDelivery:true}
  ];
  delete(i:number){
    this.products.splice(i,1)
  }
  count(){
    alert("cart count is"+this.products.length);
  }
  onlyfree(){
    this.products=this.products.filter((product:any) =>product.isFreeDelivery== true);
  }
  pricelh(){
    this.products=this.products.sort((a:any,b:any)=>a.price-b.price);
  }
  discount(){
    this.products=this.products.map((product:any)=>{
      product.price=product.price/2;
      return product;
    })
  }
  charges(){
    this.products=this.products.map((product:any)=>{
      if(product.isFreeDelivery==false){
      product.price=product.price+20;
      }
      return product;
    })
  }

  total(){
  var total=this.products.reduce((sum:any,product:any)=>sum+product.price,0);
alert (total);
    
    
    }
    pricehl(){
      this.products=this.products.sort((a:any,b:any)=>b.price-a.price);
    }
    public term:string="";
    search(){
      this.products=this.products.filter((product:any)=> product.name.indexOf(this.term) !=-1)
    }

    public product:any= {};

    create(){
      this.products.unshift(this.product)
    }
  }


