import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  firstClick()
  {
  	console.log('clicked');
  	var target=document.getElementById('text');
  	target.innerHTML = 'someone disturbed me help me please';
  }

}
