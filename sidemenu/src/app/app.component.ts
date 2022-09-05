import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Nuevo grupo', url: '/folder/Nuevogrupo', icon:'people'},
    { title: 'Contacto', url: '/folder/Contacto', icon: 'person' },
    { title: 'Llamadas', url: '/folder/Llamadas', icon: 'call' },
    { title: 'Persona cerca', url: '/folder/Personacerca', icon: 'person-circle' },
    { title: 'Mensajes guardados', url: '/folder/Mensajesguardados', icon: 'bookmark' },
    { title: 'Ajustes', url: '/folder/Ajustes', icon: 'settings' },
  ];
  public labels = ['Invitar amigos', 'Aprende sobre Telegram'];
  constructor() {}
}
