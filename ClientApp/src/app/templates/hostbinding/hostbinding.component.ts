import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'app-hostbinding',
  templateUrl: './hostbinding.component.html',
  styleUrls: ['./hostbinding.component.css']
})
export class HostbindingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  
  @HostBinding('class')   
  get setTextColor() {
    // return ['bg-success','text-warning']
    return 'bg-success text-info'
  }

  @HostBinding('style.border') 
  get setStyle() {
    return '3px dashed blue'
  }
  
}
