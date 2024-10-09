import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'register-page',
  templateUrl: './register-page.component.html',
  styleUrl: './register-page.component.css'
})
export class RegisterPageComponent {
    registerForm:FormGroup

    constructor(){
      this.registerForm = new FormGroup({
        name: new FormControl("",[Validators.required, Validators.minLength(5)]),
        email:new FormControl("", [Validators.required, Validators.email]),
        password:new FormControl("", [Validators.required, Validators.minLength(6)])
      })
    }

    onSubmitForm = () =>{
      if(this.registerForm.valid){
        console.log("form details", this.registerForm.value)
      }
    }
}
