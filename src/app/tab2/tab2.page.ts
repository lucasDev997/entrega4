import { Component, ElementRef, ViewChild, viewChild } from '@angular/core';
import { registerPlugin } from '@capacitor/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  @ViewChild('ON3') obesidadeIII!: ElementRef;
  @ViewChild('ON2') obesidadeII!: ElementRef;
  @ViewChild('ON1') obesidadeI!: ElementRef;
  @ViewChild('SPS') sobrepeso!: ElementRef;
  @ViewChild('NML') normal!: ElementRef;
  @ViewChild('PBX') pesoBaixo!: ElementRef;
  @ViewChild('RES') resultadoDiv!: ElementRef;
  @ViewChild('RESINPUT') resultadoInput!: ElementRef;

  

 
  constructor() {}

  public peso: number = 0;
  public altura: number = 0;
  public resultado: number = 0
  
  
  private calcularIMC():number {

    const restult = this.peso / (this.altura*this.altura)
    return restult
  }

  public limparCampos():void{
    this.altura = 0;
    this.peso = 0;
    this.resultado = 0;

    this.limparTabela()
    this.mostrarResultado(this.resultado)
  }

  private selecionarClassificacao(resultado: number):void{
    if(resultado >= 40){
      this.obesidadeIII.nativeElement.classList.add("select")
    }else if(resultado < 40 && resultado >= 35){
      this.obesidadeII.nativeElement.classList.add("select")
    }else if(resultado < 35 && resultado >= 30){
      this.obesidadeI.nativeElement.classList.add("select")
    }else if(resultado < 30 && resultado >= 25){
      this.sobrepeso.nativeElement.classList.add("select")
    }else if(resultado < 25 && resultado >= 18.5){
      this.normal.nativeElement.classList.add("select")      
    }else if(resultado < 18.5){
      this.pesoBaixo.nativeElement.classList.add("select")
    }

  }

  private mostrarResultado (resultado: number):void{
    if(resultado > 0){
      this.resultadoDiv.nativeElement.classList.remove("resultadoHidden")
    }else{
      this.resultadoDiv.nativeElement.classList.add("resultadoHidden")
    }
  }

  private limparTabela():void{
    this.obesidadeIII.nativeElement.classList.remove("select")
    this.obesidadeII.nativeElement.classList.remove("select")
    this.obesidadeI.nativeElement.classList.remove("select")
    this.sobrepeso.nativeElement.classList.remove("select")
    this.normal.nativeElement.classList.remove("select")
    this.pesoBaixo.nativeElement.classList.remove("select")
  }

  public initializer():void{
    let result = this.calcularIMC().toFixed(2)
    this.resultado = Number(result)

    this.mostrarResultado(this.resultado)
    this.limparTabela()
    this.selecionarClassificacao(this.resultado)
  }
}
