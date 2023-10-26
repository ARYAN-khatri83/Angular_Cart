import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './component/products/products.component';
import { CartComponent } from './component/cart/cart.component';
import { cartDeactiveGuard } from './cart-deactive.guard';
// import { canDeactivateGuardService } from './service/can-deactivate-guard.service';


const routes: Routes = [
  // configuring the routes 
  {path:'',redirectTo:'products',pathMatch:'full'},
  {path:'products',component:ProductsComponent},
  {path:'cart',canDeactivate:[cartDeactiveGuard] ,component:CartComponent},
  //{path:'cart' ,component:CartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
