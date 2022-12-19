import { Component, OnInit } from '@angular/core';
import { HttpserviceService } from '../httpservice.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { createModal } from '../create/create.modal';
import { AlertController, IonLabel, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-update',
  templateUrl: './read.page.html',
  styleUrls: ['./read.page.scss'],
})
export class ReadPage implements OnInit {
  list: any;
  detail: any;
  formvalue: FormGroup;
  createmodalobj: createModal = new createModal();
  // modalCtrl: any;
  router: any;
  interns: any[];
  constructor(private http: HttpserviceService,private modalCtrl: ModalController, private alertCtrl: AlertController, private formbuilder: FormBuilder) { }
  ngOnInit() {
    this.list = this.detail;
    console.log(this.list);
    this.http.displayinter().subscribe(data=>{
      this.interns=data.data;
      // console.log(this.interns);
    })
    
  }
  displayinterclose(){
    this.modalCtrl.dismiss()
    // window.location.reload();
  }
  displayinter() {
    this.http.displayinter().subscribe(data=>{
    })
  }

}