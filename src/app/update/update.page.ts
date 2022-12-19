import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AlertController, ModalController } from '@ionic/angular';
import { createModal } from '../create/create.modal';
import { HttpserviceService } from '../httpservice.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.page.html',
  styleUrls: ['./update.page.scss'],
})
export class UpdatePage implements OnInit {
  list:any;
  detail:any;
  formvalue:FormGroup;
  createmodalobj:createModal=new createModal();
  // formbuilder: any;
  constructor( private http:HttpserviceService, private modalctrl: ModalController, private alertctrl: AlertController,private formbuilder:FormBuilder) { }

  ngOnInit() {
    this.list=this.detail;
    console.log(this.list);
    this.formvalue = this.formbuilder.group({
      id: [''],
      name: [''],
      email: [''],
      age: [''],
      city: [''],
      pincode: [''],
      mobile: ['']
    })
    this.formvalue.controls['id'].setValue(this.list._id);
    this.formvalue.controls['name'].setValue(this.list.name);
    this.formvalue.controls['email'].setValue(this.list.email);
    this.formvalue.controls['age'].setValue(this.list.age);
    this.formvalue.controls['city'].setValue(this.list.city);
    this.formvalue.controls['pincode'].setValue(this.list.pincode);
    this.formvalue.controls['mobile'].setValue(this.list.mobile);
  }
  updateinternclose(){
    this.modalctrl.dismiss()
    // window.location.reload();
  }
  updateintern() {
    this.createmodalobj.id = this.formvalue.value.id;
    this.createmodalobj.name = this.formvalue.value.name;
    this.createmodalobj.email = this.formvalue.value.email;
    this.createmodalobj.age = this.formvalue.value.age;
    this.createmodalobj.city = this.formvalue.value.city;
    this.createmodalobj.pincode = this.formvalue.value.pincode;
    this.createmodalobj.mobile = this.formvalue.value.mobile;
    console.log(this.createmodalobj)
    this.http.updateintern(this.createmodalobj).subscribe(data => {
      this.popup();
      let ref = document.getElementById('close')
      // ref?.click();
      // this.formvalue.reset();
      this.modalctrl.dismiss()
      
      // this.router.navigate(['/read']);
    })
  }
  async popup(){
    const alrtF= await this.alertctrl.create({
      cssClass:'my-custom-class',
      header:'alert',
      message:'intern detail updated succesfully',
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
