import { Component } from '@angular/core';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {Router, RouterLink} from "@angular/router";
import {AuthService} from "../../core/services/auth/auth.service";
import {routes} from "../../core/helpers/routes/routes";
import Swal from 'sweetalert2'

@Component({
  selector: 'app-registre',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    RouterLink
  ],
  templateUrl: './registre.component.html',
  styleUrl: './registre.component.scss'
})
export class RegistreComponent {
  public isValidConfirmPassword = false;
  public CustomControler: undefined;
  public routes = routes;

  form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    name: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    password_confirmation: new FormControl('', [Validators.required]),
  });

  get f() {
    return this.form.controls;
  }

  constructor(private router: Router, private auth: AuthService) {}


  submit() {
    ///console.log(this.form.value);
    this.auth.register(this.form.value).subscribe((res)=>{
      // @ts-ignore
      switch (res.Message){
        case "The email has already been taken.":
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "The email has already been taken.",

          });
          break;
          case "The email has already been taken.,The password confirmation does not match.":
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "The email has already been taken.,The password confirmation does not match.",

            });
            break;
        case "The password must be at least 6 characters.":
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "The password must be at least 6 characters.",

          });
          break;
        case "The email has already been taken.,The password must be at least 6 characters.":
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "The email has already been taken.,The password must be at least 6 characters.",

          });
          break;
      }
      // @ts-ignore
      if(res.Success == true) {
        this.router.navigate(['/login'])
      }
     })
    // if (this.form.value.password != this.form.value.confirmPassword) {
    //   this.isValidConfirmPassword = true;
    // } else {
    //   this.isValidConfirmPassword = false;
    //   this.auth.login();
    // }
  }
}
