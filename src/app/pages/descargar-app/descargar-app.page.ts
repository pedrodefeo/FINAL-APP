import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { APLICACIONES, aplicaciones } from 'src/app/core/constantes/aplicaciones';
import { Aplicaciones } from 'src/app/core/interfaces/aplicaciones';
import { AppService } from 'src/app/core/services/app.service';


@Component({
  selector: 'app-descargar-app',
  templateUrl: './descargar-app.page.html',
  styleUrls: ['./descargar-app.page.scss'],
})
export class DescargarAppPage implements OnInit {

  
  aplicacionActual = APLICACIONES[0];

  Route = inject(Router)
 

  constructor(private activatedRoute:ActivatedRoute, private appService:AppService ) {
    activatedRoute.params.subscribe(params => {
      const aplicacionEncontrada = APLICACIONES.find(aplicaciones => aplicaciones.id == params["id"]);
      console.log(aplicacionEncontrada, "esta es la app encontrada")
      if(aplicacionEncontrada){
        this.aplicacionActual = aplicacionEncontrada;
      }
      console.log(params, "esto es el params")
      
    })

    
   }

  ngOnInit() {

    

    

    
  }
  
  
    

  
}
