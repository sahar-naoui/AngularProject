import { Component } from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {SharedModule} from "../../shared/shared.module";
import {Router, RouterLink} from "@angular/router";
import {AuthService} from "../../core/services/auth/auth.service";
import {routes} from "../../core/helpers/routes/routes";
import {TokenService} from "../../core/services/TokenService";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    SharedModule,
    RouterLink
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  public routes = routes;
  public show_password = true;
  form = new FormGroup({
    email: new FormControl('', [Validators.required,Validators.email]),
    password: new FormControl('', [Validators.required]),
  });

  get f() {
    return this.form.controls;
  }

  constructor(private router: Router, private auth: AuthService, private tokenService: TokenService) {

  }



  loginFormSubmit() {
    if (this.form.valid) {
      this.auth.login(this.form.value).subscribe((res)=>{
        // @ts-ignore
        if(res.Message =="Successful Login."){
          // @ts-ignore
          this.tokenService.setToken(res.Data.accessToken.Token)
          // @ts-ignore
          localStorage.setItem('user', JSON.stringify(res.Data.User));
          this.router.navigate(['/dashboard']);
          //this.router.navigate([routes.dashboard]);
        }

      })
    }
  }
}
