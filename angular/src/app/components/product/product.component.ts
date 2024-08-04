import {Component, Input} from '@angular/core';
import {IProduct} from "../../models/product";
import {AppProductImageComponent} from "./product-tile/product-image/app-product-image.component";

@Component({
  selector: 'app-product',
  templateUrl: 'product.component.html',
  styleUrls: ['product.component.scss']
})
export class AppProductComponent {
  @Input() product: IProduct;

  constructor() {
  }
}
