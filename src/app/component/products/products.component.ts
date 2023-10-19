import { Component , OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  // we must have a property where we can store this (api)
  public productList:any;
  public filtercategory:any;
  searchKey:string="";
  constructor(private api:ApiService,private cartService:CartService) {}
  
  ngOnInit():void{

    
    // will make a call here
    this.api.getProduct()
    .subscribe(res=>{
      this.productList = res; // store whatever we r getting from the response
      this.filtercategory = res;
      // in order to add quantity and total
      // use foreach
      this.productList.forEach((a:any)=>{
        if(a.category === "womens's clothing" || a.category === "men's clothing"){
          a.category = "fashion";
        }
        // assign obj
        Object.assign(a,{quantity:1,total:a.price});
      });
      console.log(this.productList)
    });
    this.cartService.search.subscribe((val:any)=>{
      this.searchKey=val;
    })
  }
  addToCart(item:any){ // will use this in the product where we have crated the button
    this.cartService.addToCart(item);
  }
  filter(category:string){
    this.filtercategory = this.productList
    .filter((a:any)=>{
      if(a.category == category || category==''){
        return a;
        //localStorage.setItem("token",this.filtercategory)
      }
    })
  }
}

