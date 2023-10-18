import { Component ,OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{
  public totalItem:number = 0; // to see how many items are there in our cart
// will call our productlist on our header component
  constructor(private cartService:CartService){}
  ngOnInit(): void {
    // call the getproduct
    this.cartService.getProducts()
    .subscribe(res=>{ // when we subs it we get response
      this.totalItem = res.length;
    })
  }
}
