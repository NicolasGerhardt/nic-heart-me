import { Component, OnInit, Input } from '@angular/core';

const _collapseClass = 'collapse';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  @Input() title: string;

  constructor() {}

  ngOnInit(): void {}

  toggleNavBarCollapse(): void {
    let navbar = document.querySelector('#navbarSupportedContent');
    if (navbar.classList.contains(_collapseClass)) {
      navbar.classList.remove(_collapseClass);
    } else {
      navbar.classList.add(_collapseClass);
    }
  }
}
