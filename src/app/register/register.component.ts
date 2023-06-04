import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{
  employeename: string ="";
  email: string ="";
  password: string ="";

  newUserFormGroup! : FormGroup;
  constructor(private http: HttpClient,private fb : FormBuilder )
  {}

  ngOnInit(): void {
    this.newUserFormGroup=this.fb.group({
      name : this.fb.control(null, [Validators.required, Validators.minLength(4)]),
      email : this.fb.control(null,[Validators.required, Validators.email]),
      password : this.fb.control(null,[Validators.required, Validators.minLength(8)])
    });
    }

  save()
  {

    let bodyData = {
      "employeename" : this.employeename,
      "email" : this.email,
      "password" : this.password
    };
    this.http.post("http://localhost:8090/houda/save",bodyData,{responseType: 'text'}).subscribe((resultData: any)=>
    {
      console.log(resultData);
      alert("l'utilisateur est enregistré avec succés");

    });
  }
}
