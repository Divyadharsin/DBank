import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personalloan',
  templateUrl: './personalloan.component.html',
  styleUrls: ['./personalloan.component.scss']
})
export class PersonalloanComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  students : string[] = ["kavi","divya","priya","vishnu"];

}
