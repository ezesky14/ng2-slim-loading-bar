import { Component, OnInit } from '@angular/core';
import { SlimLoadingBarService, SlimLoadingBarEvent } from 'ng2-slim-loading-bar';

@Component({
  selector: 'demo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  _loadingBar: any;
  constructor(private slimLoadingBarService: SlimLoadingBarService) {
    this.slimLoadingBarService.events.subscribe((item:SlimLoadingBarEvent) => console.log(item));
   }
  

  ngOnInit() {
    this.startLoading();
  }


  startLoading() {
    this.slimLoadingBarService.color = 'green';
    this.slimLoadingBarService.start();
   
}


stopLoading() {
    this.slimLoadingBarService.stop();
}

completeLoading() {
    this.slimLoadingBarService.complete();
}
}
