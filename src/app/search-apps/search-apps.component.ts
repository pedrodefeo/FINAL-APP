// search-apps.component.ts
import { Component } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { Router } from '@angular/router';
import { APLICACIONES } from '../core/constantes/aplicaciones';

@Component({
  selector: 'app-search-apps',
  templateUrl: './search-apps.component.html',
  styleUrls: ['./search-apps.component.scss'],
})
export class SearchAppsComponent {
  terminoBusqueda: string = '';
  aplicacionesEncontradas: string[] = [];

  constructor(private appService: AppService, private router: Router) {
    
  }

  buscarAplicaciones(termino: string): void {
    this.aplicacionesEncontradas = this.appService.buscarAplicacion(termino);
  }

  compararApps(appEncontrada: string): void {
    const appEncontradaIndex = APLICACIONES.findIndex(app => app.nombre === appEncontrada);
    if (appEncontradaIndex !== -1) {
      const appId = APLICACIONES[appEncontradaIndex].id;
      this.router.navigate(['descargar-app', appId]);
    } else {
      console.log('La aplicación no se encontró en la lista');
    }
    console.log(appEncontradaIndex, "appEncontrada index")
    console.log(this.compararApps,"este es el console log de compararApps")
  }
}

