import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
  export class LoginComponent implements OnInit {
    form: any = {
      username: null,
      password: null
    };
    isLoggedIn = false;
    isLoginFailed = false;
    errorMessage = '';
    roles: string[] = [];
    constructor(private authService: AuthService) { }
    ngOnInit(): void {
    }
    onSubmit(): void {
      const { username, password } = this.form;
      this.authService.login(username, password).subscribe({
        next: data => {
          console.log(data);
          this.isLoginFailed = false;
          this.isLoggedIn = true;
          this.reloadPage();
        },
        error: err => {
          this.errorMessage = err.error.message;
          this.isLoginFailed = true;
        }
      });
    }
    getUserFormData(data:any)
    {
      console.warn(data);
      this.authService.saveUser(data).subscribe((result)=>{
       console.warn(result)
      })
    }
    reloadPage(): void {
      window.location.reload();
    }
  }


