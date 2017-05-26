import {Component, OnInit} from '@angular/core';
import {WebSocketService} from "../shared/web-socket.service";

@Component({
	selector: 'app-search',
	templateUrl: './search.component.html',
	styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

	constructor(private wsService: WebSocketService) {
	}

	ngOnInit() {
		this.wsService.createObservableScoket("ws://localhost:8085").subscribe(
			data => console.log(data),
			error => console.log(error),
			() => console.log("webSocket已结束！")
		);
	}

	search(productName) {
		this.wsService.sendMessage(productName);
	}

}
