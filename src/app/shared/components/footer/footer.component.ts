import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
  <footer class="text-center">
  <hr>
  <p>
  <app-menu> 
  <li class="nav-item" #footer footer>
  <a class="nav-link"href="#">Back to top</a>
  </li>
  </app-menu>
  <p class="redText">Copyright 2021 | Manu    </p>
  </footer>
  `,
  styles: [   
  //  .redText{
  // color: darkred,
  // font-weight: bold,
  //   };
  ]
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
