import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cpb',
  templateUrl: './cpb.component.html',
  styles: [
  ]
})
export class CpbComponent implements OnInit {
  @Input() age = 10;
  constructor() { }

  ngOnInit(): void {
  }

}
