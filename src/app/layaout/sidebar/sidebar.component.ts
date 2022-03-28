import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  public menus: any[] = [
    {
      idMenu: 12,
      descripcion: "Metricas",
      texto: "Metricas",
      idPadre: 0,
      icono: "insights",
      url: "",
      visible: true,
      activo: true,
      subItems: true,
      idModulo: 1003,
      hijos: [
        {
          idMenu: 17,
          idPadre: 12,
          texto: "Identificadores",
          descripcion: "Identificadores",
          icono: "insights",
          url: "metricas/identificadores",
          visible: true,
          activo: true,
          subItems: true,
        },
        {
          idMenu: 18,
          idPadre: 12,
          texto: "Graficos",
          descripcion: "Graficos",
          icono: "bar_chart",
          url: "metricas/graficos",
          visible: true,
          activo: true,
          subItems: true,
        },
        
       
        

       
      ],
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
