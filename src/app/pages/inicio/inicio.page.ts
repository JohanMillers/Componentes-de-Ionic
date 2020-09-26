import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  componentes: Componente[] = [
    {
      icon: 'american-football',
      name: 'Action Sheet',
      redirectTo: '/action-sheet'
    },
    {
      icon: 'baseball',
      name: 'Alert',
      redirectTo: '/alert'
    },
    {
      icon: 'person-circle-outline',
      name: 'Avatar',
      redirectTo: '/avatar'
    },
    {
      icon: 'radio-button-on-outline',
      name: 'Botones y router',
      redirectTo: '/button'
    },
    {
      icon: 'card',
      name: 'Cards',
      redirectTo: '/card'
    },
    {
      icon: 'CheckBox',
      name: 'CheckBox',
      redirectTo: '/check'
    },
    {
      icon: 'hourglass-outline',
      name: 'DateTime',
      redirectTo: '/date-time'
    },
    {
      icon: 'add',
      name: 'Fabs',
      redirectTo: '/fab'
    },
    {
      icon: 'apps-outline',
      name: 'Grids',
      redirectTo: '/grid'
    }
  ];


  constructor() { }

  ngOnInit() {
  }

}
interface Componente {
  icon: string;
  name: string;
  redirectTo: string;
};