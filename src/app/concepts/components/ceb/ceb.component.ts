import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-ceb',
  templateUrl: './ceb.component.html',
  styles: [
  ]
})
export class CebComponent implements OnInit {
  data = "Manu";
  @Output() profileLoaded = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  handleSendData() {
    console.log("Sending data to parent!");
    this.profileLoaded.emit(this.data);
  }
}
