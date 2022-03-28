import { DatePipe } from '@angular/common';
import { Template } from '@angular/compiler/src/render3/r3_ast';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ApiService } from 'src/app/service/api.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-identificadores',
  templateUrl: './identificadores.component.html',
  styleUrls: ['./identificadores.component.css']
})
export class IdentificadoresComponent implements OnInit {
  public identificadoresArray:any[]=[];
  public identificadorForm:FormGroup;
  public identificadorDato:any[]=[];
  public datoIdentificador:FormGroup;
  public saveId:number=0;

  constructor(
    public api:ApiService,
    public dialog: MatDialog,
    public datePipe: DatePipe
  ) { 

    this.mostarIndicadores()
    this.identificadorForm=new FormGroup({
      in_nombre_indicador:new FormControl('', [Validators.required]),
      id:new FormControl(0)
    
    })

    this.datoIdentificador= new FormGroup({
      descripcion:new FormControl('',[Validators.required] ),
      total:new FormControl('',[Validators.required] ),
      fecha:new FormControl('',[Validators.required] ),
      id_indicador: new FormControl(0),
      id_dato:new FormControl(0)
    })
  }

  ngOnInit(): void {
  }

  openDialog(template:any, params?:any) {
    console.log(params);
   if (params) {
    this.identificadorForm.get('in_nombre_indicador')?.setValue(params.nombre_indicador);
    this.identificadorForm.get('id')?.setValue(params.id_indicador);
   }
  

    const dialogRef = this.dialog.open(template, {
      width: '40%'
    });

    dialogRef.afterClosed().subscribe(result => {
      this.identificadorForm.get('in_nombre_indicador')?.setValue('');
      this.identificadorForm.get('id')?.setValue(0);
    });
  }

  guardarIndicador(){
    
    if(this.identificadorForm.invalid){
      this.identificadorForm.markAllAsTouched();
      return;
    };

    if(this.identificadorForm.get('id')?.value === 0){
      this.api.postdataApi('indicador/add-indicador', this.identificadorForm.value).subscribe((result:any)=>{
        this.mostarIndicadores();
        this.dialog.closeAll();
  
      })
    }else{
      let params = {id: this.identificadorForm.value.id, nombre: this.identificadorForm.value.in_nombre_indicador};
      this.api.putdataApi('indicador/update-indicador', params).subscribe((result:any)=>{
        this.mostarIndicadores();
        this.dialog.closeAll();
      })
    }
    
  }

  mostarIndicadores(){
    this.api.getdataApi('indicador/select-indicador/','0').subscribe((result:any)=>{
      this.identificadoresArray=result.result[0];
      console.log(this.identificadoresArray);
    })
  }

  eliminarIndicador(params:any){
    Swal.fire({
      title: `¿Esta seguro de eliminar el indicador ${params.nombre_indicador}?`,
      text: "",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Eliminar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.api.deletedataApi('indicador/delete-indicador/', params.id_indicador).subscribe((result)=>{
          this.mostarIndicadores();
          Swal.fire(
            'El indicador se elminó correctamente',
            '',
            'success'
          )
        })
        
      }
    })
  }

  openDato(template:any, params:any) {
    console.log(params)
  this.saveId=params.id_indicador;
    this.mostrarDatos();
    const dialogRef = this.dialog.open(template, {
      width: '60%'
    });

    dialogRef.afterClosed().subscribe(result => {
     
    });
  }

  openDatoIndicador(template:any, params?:any) {
    console.log(this.saveId)
    this.datoIdentificador.get('id_indicador')?.setValue(this.saveId);
   if (params) {
    this.datoIdentificador.get('id_dato')?.setValue(params.id_dato);
    this.datoIdentificador.get('descripcion')?.setValue(params.descripcion);
    this.datoIdentificador.get('total')?.setValue(params.total);
    this.datoIdentificador.get('fecha')?.setValue(this.datePipe.transform(params.fecha, "yyyy-MM-dd"));
   
   }
  console.log(this.datoIdentificador.value)

    const dialogRef = this.dialog.open(template, {
      width: '70%'
    });

    dialogRef.afterClosed().subscribe(result => {
      this.datoIdentificador.get('descripcion')?.setValue('');
    this.datoIdentificador.get('total')?.setValue('');
    this.datoIdentificador.get('fecha')?.setValue('');
    this.datoIdentificador.get('id_indicador')?.setValue(0);
    });
  }

  mostrarDatos(){
    this.api.getdataApi('indicador/select-datos-indicador/',this.saveId).subscribe((result:any)=>
    {this.identificadorDato = result.result[0]
    console.log(this.identificadorDato)
    })
  }

  guardarDato(){


    if(this.datoIdentificador.invalid){
      this.datoIdentificador.markAllAsTouched();
      return;
    };

    console.log(this.datoIdentificador.value)
    if(this.datoIdentificador.get('id_dato')?.value === 0){
      this.api.postdataApi('indicador/dato-indicador', this.datoIdentificador.value).subscribe((result:any)=>{
        this.mostrarDatos();
        this.dialog.closeAll();
  
      })
    }else{
      let params = {id: this.datoIdentificador.value.id_dato, descripcion: this.datoIdentificador.value.descripcion,
                    total: this.datoIdentificador.value.total, fecha: this.datoIdentificador.value.fecha};
      this.api.putdataApi('indicador/update-datos-indicador', params).subscribe((result:any)=>{
       
        this.dialog.closeAll();
      })
    }
  }

  downloadFile(nombre:any,data: any) {
    const replacer = (key:any,value:any) => (value === null ? '' : value); // specify how you want to handle null values here
    const header = Object.keys(data[0]);
    const csv = data.map((row:any) =>
      header
        .map((fieldName) => JSON.stringify(row[fieldName], replacer))
        .join(',')
    );
    csv.unshift(header.join(','));
    const csvArray = csv.join('\r\n');
  
    const a = document.createElement('a');
    const blob = new Blob([csvArray], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
  
    a.href = url;
    a.download = `${nombre}_${new Date().getMilliseconds()}.csv`;
    a.click();
    window.URL.revokeObjectURL(url);
    a.remove();
  }

  exportarExcel(params:any){
    this.api.getdataApi('indicador/select-datos-indicador/',params.id_indicador).subscribe((result:any)=>
    {this.identificadorDato = result.result[0]
      this.downloadFile(params.nombre_indicador,this.identificadorDato)
    })
  }










}
