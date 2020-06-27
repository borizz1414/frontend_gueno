import { Component} from '@angular/core';
import {  User } from '../../models/user';
import { Dni } from "../../models/dni";
import { DniService } from '../../services/dni.service';
declare var $: any;


@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css'],
})
export class BodyComponent {
  public dni: Dni;
  public id: number;
  public user: any = {} ;
  public status: boolean;
  public load: boolean;

  constructor(private _dni: DniService) {
    this.dni = new Dni('');
    this.load = false;
  }

  OnSubmit(form) {
      this.load = true;


      console.log(this.dni.cuit);
      this._dni.getCuit(this.id).subscribe(
        (response) => {
          this.dni = response;
          this._dni.getUser(response.cuit).subscribe(
            (res) => {
                $('#x-icon').hide();
                $('#alert').hide();
                $('#check-icon').fadeIn();


                this.load = false;
              this.user.name = res.name;
              this.user.surname = res.surname;
              this.user.birthday = res.birthday;
              this.user.confidence = res.scoring.confidence;
              this.user.approved = res.scoring.approved;
              this.user.cuit = this.dni.cuit

              this.status = true;


              console.log(this.user);
            },
            (err) => {
              this.load = false;
              console.log(err);
            }
          );
        },
        (error) => {
          this.load = false;
          $('#check-icon').hide();
             $('#x-icon').fadeIn()
             $('#alert').fadeIn()


          this.status = false;
        }
      );


  }
}
