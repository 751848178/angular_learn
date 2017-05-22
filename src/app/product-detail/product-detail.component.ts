import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {ProductService, Product, Comment} from "../shared/product.service";

@Component({
	selector: 'app-product-detail',
	templateUrl: './product-detail.component.html',
	styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

	private productId: number;

	private product: Product;

	private comments: Comment[];

	constructor(private activatedRoute: ActivatedRoute, private productService: ProductService) {
	}

	ngOnInit() {
		this.activatedRoute.params.subscribe((params: Params) => {
			this.productId = params["id"]
		});
		this.product = this.productService.getProduct(this.productId);
		this.comments = this.productService.getCommentByProductId(this.productId);
		//this.productTitle = this.activatedRoute.snapshot.params["title"];
	}

}
