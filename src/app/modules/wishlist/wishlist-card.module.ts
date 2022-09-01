import { ComponentFactory, ComponentFactoryResolver, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WishlistCardComponent } from './wishlist-card.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';



@NgModule({
  declarations: [
    WishlistCardComponent,
    WishlistComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    WishlistCardComponent
  ]
})
export class WishlistCardModule {
  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  public resolveComponent(): ComponentFactory<WishlistCardComponent> {
    return this.componentFactoryResolver.resolveComponentFactory(WishlistCardComponent);
  }
 }
