import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-message',
  templateUrl: './message.page.html',
  styleUrls: ['./message.page.scss'],
})
export class MessagePage implements OnInit {

  constructor(public router: Router) { }
  back() {
    
    this.router.navigateByUrl('/tabs/tab3');
  }
  ngOnInit() {
  }

}