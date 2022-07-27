import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mean-project';
  isLoggedIn = false;
  username?: string;
  constructor(private authService: AuthService) { }
  ngOnInit(): void {
    
  }
  logout(): void {
    this.authService.logout().subscribe({
      next: res => {
        console.log(res);
      },
      error: err => {
        console.log(err);
      }
    });
    
    window.location.reload();
  }
}
