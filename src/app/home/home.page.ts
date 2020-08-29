import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor( private router: Router) {}

  gotoSolutionsPage(){
    // navigating the user to another url thru pgm
    this.router.navigate(['../solutions']);
  }

  gotoContactPage(){
    this.router.navigate(['../contact']);
  }
}
