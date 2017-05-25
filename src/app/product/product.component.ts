import {Component, DoCheck, OnInit} from '@angular/core';
import {ProductService, Product} from "../shared/product.service";
import {FormControl} from "@angular/forms";
import {Observable} from "rxjs/Observable";
import "rxjs/Rx";

@Component({
	selector: 'app-product',
	templateUrl: './product.component.html',
	styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit, DoCheck {

	private dataSource: Observable<any>;

	private products: Array<any>;

	private keyword: string;

	private titleFilter: FormControl = new FormControl();

	constructor(private productService: ProductService) {
		this.titleFilter.valueChanges.debounceTime(500).subscribe(value => this.keyword = value);
	}

	ngOnInit() {
		this.dataSource = this.productService.getProducts();
		this.dataSource.subscribe(data => this.products = data );
	}

	ngDoCheck(): void {
		// console.log(this.products);
	}

}
