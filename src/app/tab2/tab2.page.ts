import { Component } from '@angular/core';
import { registerPlugin } from '@capacitor/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor() {}

  public peso = 0;
  public altura = 0;

  
  
  public calculateIMC() {

    const restult = this.peso / (this.altura*this.altura)
    return restult
  }

  public mostrar(){
    const result = this.calculateIMC()

    
  }



}
