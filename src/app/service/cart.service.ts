import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  // when we click on cart button we had to call a method 
  public cartItemList:any=[]
  public productList = new BehaviorSubject<any>([]); // it acts as a boolean , we can emit and also pass a vlaue and also act a a subscriber where anyone can subsctibe whatever data is being emiited
  // creaating a behavior subject to search the products from header to produ
  public search = new BehaviorSubject<string>("");
  
  // productList would act as a both bool and will act as observable and will helps us in emit data
  constructor() { }

  // methods
  getProducts(){
    return this.productList.asObservable();
  }

  addToCart(product:any){
    this.cartItemList.push(product);
    this.productList.next(this.cartItemList); // it will be passed whenever next will be called
    this.getTotalPrice();
  }

  getTotalPrice():number{
    let grandTotal = 0;
    this.cartItemList.map((a:any)=>{ // it will take all the items present in the cart and will add in total
      grandTotal += a.total;
    })
    return grandTotal;
  }

  removeCartItem(product:any){
    this.cartItemList.map((a:any,index:any)=>{
      // if the id matches we will remove it from the cart
      if(product.id === a.id){
        this.cartItemList.splice(index,1) // this will remove the 1 item from cart
      }
    })
    this.productList.next(this.cartItemList)
  }

  removeAllCart(){
    // we will just have to empty the cart and at the same time i want to pass this data to product list bcoz it's been subscribed and then pass to cartlist
    this.cartItemList = []
    this.productList.next(this.cartItemList); 
  }
}
