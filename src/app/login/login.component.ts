import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../service/api.service';
import Swal from 'sweetalert2';
import { catchError, tap } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';
import { EMPTY } from 'rxjs';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public cargando:boolean=false;
  public loginForm:FormGroup;
  public hide:boolean=true;
  
  constructor(
    public api:ApiService,
    public router:Router
  ) { 



    this.loginForm=new FormGroup({
      correo:new FormControl('', [Validators.required]),
      contrasenya:new FormControl('', [Validators.required])
    
    })
  }

  ngOnInit(): void {
  }

  login(){

    this.api.postdataApi('log/login', this.loginForm.value).subscribe((result:any)=>{
      console.log(result);
      localStorage.setItem('token', result.token);
      this.router.navigateByUrl('');

      
     
    },
    (error) =>{
      Swal.fire(
        'Correo o contraseña incorrecta',
        '',
        'error'
      )
    }
    )
    
  }

}
