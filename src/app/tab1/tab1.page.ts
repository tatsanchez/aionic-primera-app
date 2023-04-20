import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [IonicModule, ExploreContainerComponent],
})
export class Tab1Page implements  OnInit{
  constructor() {}
  ngOnInit(): void {
  let numero = 10;
  //debuger;

   numero = 20;

   numero = numero + 10;

   numero = 0;

    console.log(numero);

  }
}
