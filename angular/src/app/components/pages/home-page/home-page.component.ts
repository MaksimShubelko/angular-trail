import {Component, OnInit} from "@angular/core";
import {Observable} from "rxjs";
import {IProduct} from "../../../models/product";
import {ProductService} from "../../../services/product-service.service";

@Component({
  selector: "app-home-page",
  templateUrl: "home-page.component.html",
  styleUrls: ["home-page.component.scss"]
})
export class HomePageComponent implements OnInit {
  products: Observable<IProduct[]>;
  loading: boolean = false;

  constructor(
    public productService: ProductService,
  ) {
  }

  ngOnInit(): void {
    this.loading = true;
    this.productService.getAll().subscribe(() => this.loading = false);
  }
}
