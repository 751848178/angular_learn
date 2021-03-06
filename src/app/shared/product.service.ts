///<reference path="../../../node_modules/rxjs/Observable.d.ts"/>import {Injectable} from "@angular/core";
import {Injectable} from "@angular/core";
import {Http} from "@angular/http";

@Injectable()
export class ProductService {

	private products: Array<any> = [];

	private comments: Comment[] = [
		new Comment(1, 1, "2017-1-1", "zxb", 3.5, "描述内容"),
		new Comment(2, 1, "2017-1-1", "zxb", 2.5, "描述内容"),
		new Comment(3, 1, "2017-1-1", "zxb", 1.5, "描述内容"),
		new Comment(4, 2, "2017-1-1", "zxb", 4.5, "描述内容")
	];

	constructor(private http: Http) {
	}

	getProducts() {
		return this.http.get("/assets/json/products.json").map(res => res.json());
	}

	getProduct(id: number): Product {
		//noinspection TypeScriptUnresolvedFunction
		return this.products.find(product => product.id === id);
	}

	getCommentByProductId(id: number): Comment[] {
		return this.comments.filter(comment => comment.productId === id);
	}

}
export class Product {
	constructor(public id: number, public title: string, public price: number, public rating: number, public desc: string, public categories: Array<string>) {  }
}
export class Comment {
	constructor(public id: number, public productId: number, public timestamp: string, public user: string, public rating: number, public content: string) {	}
}
