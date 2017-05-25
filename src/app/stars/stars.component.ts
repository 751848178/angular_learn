import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from "@angular/core";

@Component({
	selector: 'app-stars',
	templateUrl: './stars.component.html',
	styleUrls: ['./stars.component.css']
})
export class StarsComponent implements OnInit, OnChanges {

	@Input()
	private rating: number = 0;

	@Output()
	private ratingChange: EventEmitter<number> = new EventEmitter();

	private stars: boolean[];
	@Input()
	private readonly: boolean;

	constructor() {
	}

	ngOnInit() {
	}

	clickStar(index: number) {
		if (!this.readonly) {
			this.rating = index + 1;
			this.ratingChange.emit(this.rating);
		}
	}

	ngOnChanges(): void {
		this.stars = [];
		for (let i = 1; i <= 5; i++) {
			this.stars.push(i > this.rating);
		}
	}

}
