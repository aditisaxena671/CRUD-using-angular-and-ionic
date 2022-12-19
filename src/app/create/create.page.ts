import { Component, OnInit } from '@angular/core';
import { HttpserviceService } from '../httpservice.service';
import { FormBuilder,FormGroup } from '@angular/forms';
import { createModal } from './create.modal';
import { ToastrService } from 'ngx-toastr';
import { AlertController, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
})
export class CreatePage implements OnInit {
  formvalue: FormGroup;
  createmodalobj:createModal= new createModal();
  
  constructor(private modalctrl:ModalController,private alrtctrl:AlertController, private http: HttpserviceService, private formbuilder: FormBuilder) { }

  ngOnInit() {
    this.formvalue=this.formbuilder.group({
      name:[''],
      email:[''],
      age:[''],
      city:[''],
      pincode:[''],
      mobile:['']
    })
  }
  createcancel(){
  this.modalctrl.dismiss()
  }
  createinterdetail(){
    this.createmodalobj.name=this.formvalue.value.name;
    this.createmodalobj.email=this.formvalue.value.email;
    this.createmodalobj.age=this.formvalue.value.age;
    this.createmodalobj.city=this.formvalue.value.city;
    this.createmodalobj.pincode=this.formvalue.value.pincode;
    this.createmodalobj.mobile=this.formvalue.value.mobile;
    console.log(this.createmodalobj);
    this.http.createintern(this.createmodalobj).subscribe(data=>{
      console.log(data);
      this.succesfull();
      let ref = document.getElementById('close')
      this.modalctrl.dismiss()
    },
    err=>{
      this.unsuccesfull();
    })
  }
  async succesfull(){
    const alrtF=await this.alrtctrl.create({
      cssClass:'my-custom-class',
      header:'SUCCESS',
      message:'record added successfully',
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
  async unsuccesfull(){
    const alrtF=await this.alrtctrl.create({
      cssClass:'my-custom-class',
      header:'UNSUCCESS',
      message:`record wasn't added`,
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
