import { ComponentFactory, ComponentFactoryResolver, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WishlistComponent } from './wishlist.component';
import { WishlistCardComponent } from './components/wishlist-card/wishlist-card.component';



@NgModule({
  declarations: [
    WishlistCardComponent,
    WishlistComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
   
  ]
})
export class WishlistModule {
  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  public resolveComponent(): ComponentFactory<WishlistComponent> {
    return this.componentFactoryResolver.resolveComponentFactory(WishlistComponent);
  }
 }
