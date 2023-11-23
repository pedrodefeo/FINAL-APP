import { Component } from '@angular/core';
import { Aplicaciones } from '../core/interfaces/aplicaciones';
import { APLICACIONES } from '../core/constantes/aplicaciones';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  aplicaciones:Aplicaciones[] = APLICACIONES

  constructor(private navCtrl:NavController) {}
  
  
  appRecomendada: Aplicaciones | undefined;
  mostrarDiv: boolean = false;
  rojo:boolean = false
  verde:boolean = false

  obtenerRecomendacionAleatoria() {
    const indiceAleatorio = Math.floor(Math.random() * this.aplicaciones.length);
    this.appRecomendada = this.aplicaciones[indiceAleatorio];
  
      this.mostrarDiv = !this.mostrarDiv;
     
  }

  apretarDislike(){
    this.rojo = !this.rojo

    if (this.rojo) {
      this.verde = false;
    }
  }

  apretarMg() {
      this.verde = !this.verde;
      if (this.verde) {
        this.rojo = false;
      }
  }

  sinColor(){
    this.rojo = false;
    this.verde = false;
  }


  descargarApp(id:Number){

    this.navCtrl.navigateForward(`/descargar-app/${id}`);


  }

}

