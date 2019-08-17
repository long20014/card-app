import {
 Component,
 OnInit,
 OnChanges,
 SimpleChanges,
 DoCheck
} from '@angular/core';
import { Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnChanges {

	public isLogin = false;
	public isOpen = false;
  constructor(
  	public router: Router,
  ) { }

  ngOnInit() {
  	this.checkLogin();
  }

  ngOnChanges() {
  	
  }

  ngDoCheck() {
  	this.checkLogin();
  }  

  checkLogin() {
  	if (localStorage.getItem('user')) {
  		this.isLogin = true;
  	}
  	else {
  		this.isLogin = false;
  	}
  }

  onLogout() {
  	if (localStorage.getItem('user')){
  		localStorage.removeItem('user');
  		this.router.navigate(['']);
  		alert('user logged out');
  		this.isOpen = false;
  	}
  	else return 0;  	
  }

  openNav() {
  	this.isOpen = true;
  }

  closeNav() {
  	this.isOpen = false;
  }
}
