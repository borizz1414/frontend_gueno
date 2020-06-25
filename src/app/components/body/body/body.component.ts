import { Component} from '@angular/core';
import {  User } from '../../../models/user';
import { Dni } from "../../../models/dni";
import { DniService } from '../../../services/dni.service';


@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css'],
})
export class BodyComponent {
  public dni: Dni;
  public id: number;
  public user: User;
  public status: boolean;
  public load: boolean;

  constructor(private _dni: DniService) {
    this.dni = new Dni('');
    this.load = false;
  }

  OnSubmit(form) {
      this.load = true;
    setTimeout(() => {
      this.load = false;
      console.log(this.dni.cuit);
      this._dni.getCuit(this.id).subscribe(
        (response) => {
          this.dni = response;
          this._dni.getUser(response.cuit).subscribe(
            (res) => {
              this.user = res;
              this.status = true;
              console.log(this.user);
            },
            (err) => {
              console.log(err);
            }
          );
        },
        (error) => {
          this.status = false;
        }
      );
    }, 2000);

  }
}
