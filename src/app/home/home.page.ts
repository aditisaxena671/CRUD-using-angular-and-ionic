import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { CreatePage } from '../create/create.page';
import { ReadPage } from '../read/read.page';
import { UpdatePage } from '../update/update.page';
import { HttpserviceService } from '../httpservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  interns: any[];
  constructor(private http: HttpserviceService, private modalctrl: ModalController, private alrtctrl: AlertController) { }
  ngOnInit() {
    this.http.displayinter().subscribe(data => {
      this.interns = data.data;
      console.log(this.interns);
    })
  }
  async displayinter(interns: any) {
    const modal = await this.modalctrl.create({
      component: ReadPage,
      componentProps: {
        detail: interns
      }
    });
    await modal.present();
  }
  async update(interns: any) {
    const modal = await this.modalctrl.create({
      component: UpdatePage,
      componentProps: {
        detail: interns
      }
    });
    await modal.present();
  }
  async create() {
    const modal = await this.modalctrl.create({
      component: CreatePage
    });
    await modal.present();
  }
  delete(interns: any) {
    this.http.deleteintern(interns._id).subscribe(data => {
      // window.location.reload();
      this.deletealrt();
    })
  }
  async deletealrt() {
    const alrtF = await this.alrtctrl.create({
      cssClass: 'my-custon-class',
      header: 'DELETE NOTIFICATION',
      message: 'intern record deleted',
      buttons: [{
        text: "OK",
        handler: data => {
          // console.log("branchId: " + data);
          window.location.reload();
          
        }
      }],
    })
    await alrtF.present();
  }
}
