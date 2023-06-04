import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent {
  employeename: string ="";
  password: string ="";

  errorMessage :any;
  constructor(private router: Router,private http: HttpClient) {}


  Login() {
    console.log(this.employeename);
    console.log(this.password);
    let bodyData = {
      employeename: this.employeename,
      password: this.password,
    };
    this.http.post("http://localhost:8090/houda/login", bodyData).subscribe(  (resultData: any) => {
      console.log(resultData);
      if (resultData.message == "Login Success")
      {


        this.router.navigateByUrl('/admin/land');
      }
      else if(resultData.message == "Le nom n'existe pas")

      {
        alert("Le nom n'existe pas")
      }
      else
      {
        alert("l'email ou le mot de passe ne correspond pas");
      }

    });
  }
}
