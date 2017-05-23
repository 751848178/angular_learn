import {Injectable} from "@angular/core";

@Injectable()
export class ProductService {

	private products: Product[] = [
		new Product(1, "第一个商品", 1.99, 3.5, "这是我学angular商品组件的第一个商品", ["电子产品", "虚拟类"]),
		new Product(2, "第二个商品", 2.99, 2.5, "这是我学angular商品组件的第一个商品", ["电子产品", "虚拟类"]),
		new Product(3, "第三个商品", 3.99, 4.5, "这是我学angular商品组件的第一个商品", ["电子产品", "虚拟类"]),
		new Product(4, "第四个商品", 4.99, 1.5, "这是我学angular商品组件的第一个商品", ["电子产品", "虚拟类"]),
		new Product(5, "第五个商品", 5.99, 3.5, "这是我学angular商品组件的第一个商品", ["电子产品", "虚拟类"]),
		new Product(6, "第六个商品", 6.99, 2.5, "这是我学angular商品组件的第一个商品", ["电子产品", "虚拟类"])
	]

	private comments: Comment[] = [
		new Comment(1, 1, "2017-1-1", "zxb", 3.5, "描述内容"),
		new Comment(2, 1, "2017-1-1", "zxb", 2.5, "描述内容"),
		new Comment(3, 1, "2017-1-1", "zxb", 1.5, "描述内容"),
		new Comment(4, 2, "2017-1-1", "zxb", 4.5, "描述内容")
	]

	constructor() {
	}

	getProducts() {
		return this.products;
	}

	getProduct(id: number): Product {
		//noinspection TypeScriptUnresolvedFunction
		return this.products.find(product => product.id == id);
	}

	getCommentByProductId(id: number): Comment[] {
		return this.comments.filter(comment => comment.productId == id);
	}

}
export class Product {
	constructor(public id: number, public title: string, public price: number, public rating: number, public desc: string, public categories: Array<string>) {  }
}
export class Comment {
	constructor(public id: number, public productId: number, public timestamp: string, public user: string, public rating: number, public content: string) {	}
}
