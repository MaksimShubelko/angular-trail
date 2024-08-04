import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-to-cart-button',
  templateUrl: './add-to-cart-button.component.html',
  styleUrls: ['./add-to-cart-button.component.scss']
})
export class AddToCartButtonComponent implements OnInit {
  isClicked: boolean = false
  addedProducts: number = 5

  constructor() { }

  ngOnInit(): void {
    this.isClicked = false
  }

  handleClick() {
    this.isClicked = true
  }

  decreaseProductQty() {
    this.addedProducts--
  }

  isMinQty() {
    return this.addedProducts == 0
  }

  increaseProductQty() {
    this.addedProducts++
  }
}
