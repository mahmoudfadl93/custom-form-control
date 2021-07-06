import { Component, OnInit } from '@angular/core';
import { Widget } from '../shared/custom-widget-wrapper/helper/widget.interface';
import { WIDGET } from '../shared/custom-widget-wrapper/helper/widget.token';

@Component({
  selector: 'widget-example',
  templateUrl: './widget-example.component.html',
  styleUrls: ['./widget-example.component.scss'],
  providers: [
    {
      provide: WIDGET,
      useExisting: WidgetExampleComponent,
    },
  ],
})
export class WidgetExampleComponent implements OnInit, Widget {
  isRefreshing = false;
  constructor() { }


  ngOnInit(): void {
  }
  load() {
    console.log('Load data from JIRA API... ');
  }

  refresh() {
    this.isRefreshing = true;
    setTimeout(() => {
      this.isRefreshing = false;
    }, 2500);
  }
}
