
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  private aplicaciones: string[] = ['WhatsApp', 'Instagram', 'Snapchat', 'Youtube', 'Tik Tok', 'Outlook','Netflix','Duolingo','Chat Gpt','Amazon Prime','HBO MAX','PicsArt','Mercado Pago','Smart Gym', 'Gmail','Google', 'F1 TV', 'X','EA FC 24','Call Of Duty III','Football Manager 24'];
  getAplicaciones(): string[] {
    return this.aplicaciones;
  }

  buscarAplicacion(termino: string): string[] {
    return this.aplicaciones.filter(app => app.toLowerCase().includes(termino.toLowerCase()));
  }
}

