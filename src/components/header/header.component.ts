import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'st-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public router: Router) {}

  navMenu: HTMLElement;
  htmlBody: HTMLElement;

  ngOnInit(): void {
    this.navMenu = document.querySelector('#nav-menu-list');
    this.htmlBody = document.body;
    const paths = window.location.pathname.split('/');
    const path: string = paths.slice(-1)[0];
    if (path && path !== 'home') {
      this.htmlBody.classList.add(path);
    }
  }

  @HostListener('window:keydown.escape')
  onKeydownEsc(): void {
    this.closeMenu();
  }

  closeMenu(): void {
    if (document.getElementById('close-menu').offsetParent !== null) {
      this.navMenu.style.display = 'none';
      this.htmlBody.style.overflow = '';
    }
  }

  redirect(redirectTo: string): void {
    if (redirectTo !== 'home') {
      this.htmlBody.removeAttribute('class');
      this.htmlBody.classList.add(redirectTo);
    } else {
      this.htmlBody.removeAttribute('class');
    }
    this.closeMenu();
  }

  onClickMenu(): void {
    if (this.navMenu.style.display === 'block') {
      this.htmlBody.style.overflow = '';
      this.navMenu.style.display = 'none';
    } else {
      this.navMenu.style.display = 'block';
      this.htmlBody.style.overflow = 'hidden';
    }
  }
}
