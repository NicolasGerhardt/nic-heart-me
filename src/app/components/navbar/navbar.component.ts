import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';


const _collapseClass = 'collapse';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  @Input() title: string;

  constructor(public auth: AuthService) {}

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
