import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-pages-register',
  templateUrl: './pages-register.component.html',
  styleUrls: ['./pages-register.component.css']
})
export class PagesRegisterComponent implements OnInit {
  private form: any;

  constructor() { }

  ngOnInit(): void {
    this.form = new FormGroup({
      name : new FormControl(null , [Validators.required]),
      nbEtudiant : new FormControl(null , [Validators.required]),
    });
  }

  onSub() {
    
  }
}
