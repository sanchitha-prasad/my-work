import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usebar',
  templateUrl: './usebar.component.html',
  styleUrls: ['./usebar.component.css']
})
export class UsebarComponent implements OnInit {

  constructor() { }
  data;
  ngOnInit(): void {
  }

  btntoggle(): void{
    if ($('.item').hasClass('active')) {
      $('.item').removeClass('active');
  } else {
      $('.item').addClass('active');
  }
}
profile($event): void {
  this.data = $event;
  console.log(this.data);

}
}
