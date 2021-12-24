import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'form';
  
  registerForm!: FormGroup;

  constructor(private formBuilder: FormBuilder){

  }

  ngOnInit(){
    this.registerForm=this.formBuilder.group({
      name:['',[Validators.required, Validators.minLength(8), Validators.maxLength(50)]],
      // gender:['',[Validators.required]],
      // country:['',[Validators.required]],
      city:['',[Validators.required]],
      age:['',[Validators.required]]
    });
  }
  get fun(){
    return this.registerForm.controls;
  }
  onSubmit(){
    if(this.registerForm.invalid){
      alert("Validation failed. Try Again...!");
      return;
    }
    alert("Registration done successfully...!");
  }
}
