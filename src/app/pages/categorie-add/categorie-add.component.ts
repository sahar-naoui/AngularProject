import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {CategorieService} from "../../_services/categorie.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Categorie} from "../../models/Categorie";

@Component({
  selector: 'app-categorie-add',
  templateUrl: './categorie-add.component.html',
  styleUrls: ['./categorie-add.component.css']
})
export class CategorieAddComponent implements OnInit {
  form: any ;
  title: any;
  buttonadd: any;
  categorie: Categorie = new Categorie();
  private CurrentItemId: any;
  constructor(private categorieService: CategorieService,private router: Router , private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    // @ts-ignore
    this.CurrentItemId = this.activatedRoute.snapshot.params.id;
    if (!!this.CurrentItemId) {
      this.title = 'Modifier Categorie';
      this.buttonadd = 'Modifier ';
      // @ts-ignore
      this.categorieService.getListCategorie(this.CurrentItemId)
        .subscribe(data => {
          // @ts-ignore
          this.compte = data;
          this.initForm1(data);
        }, error => console.log(error));
    }else{
      this.buttonadd = 'Enregistrer ';
      this.title = 'Ajouter Categorie';
      this.initForm();
    }
  }
  private initForm() {
    this.form = new FormGroup({
      CategoryName : new FormControl(null , [Validators.required]),
      Description : new FormControl(null , [Validators.required]),
    });
  }
  private initForm1(data: any) {
    this.form = new FormGroup({
      CategoryName : new FormControl(data.CategoryName , [Validators.required]),
      Description : new FormControl(data.Description , [Validators.required]),

    });
  }
  Retour() {
    this.router.navigate(['/categories']);
  }

  onSub() {

  }
}
