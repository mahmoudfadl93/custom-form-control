import { Component, ContentChild, OnInit } from '@angular/core';
import { Widget } from '../helper/widget.interface';
import { WIDGET } from '../helper/widget.token';

@Component({
  selector: 'widget-wrapper',
  templateUrl: './widget-wrapper.component.html',
  styleUrls: ['./widget-wrapper.component.scss']
})
export class WidgetWrapperComponent implements OnInit {

  @ContentChild(WIDGET as any, { static: true }) widget!: Widget;

  constructor() { }

  ngOnInit() {
    this.widget.load();
  }

  onRefresh() {
    this.widget.refresh();
  }




}
