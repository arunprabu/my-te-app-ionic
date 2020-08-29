import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-solutions',
  templateUrl: './solutions.page.html',
  styleUrls: ['./solutions.page.scss'],
})
export class SolutionsPage implements OnInit {

  solutionList: any[];

  constructor() { }

  ngOnInit() {
    this.solutionList = [
      { iconName: 'videocam', solutionName: 'Media'},
      { iconName: 'car', solutionName: 'Automotive'},
      { iconName: 'hardware-chip', solutionName: 'Electronics'},
      { iconName: 'pie-chart', solutionName: 'Big Data Analytics'},
    ];
  }

}
