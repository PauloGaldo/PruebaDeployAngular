import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css']
})
export class ContadorComponent implements OnInit {

  contador: number;
  textos = [];
  texto: string;

  constructor() {
    this.contador = 0;
  }

  ngOnInit() {
  }

  sumar() {
    this.contador++;
  }

  restar() {
    this.contador--;
  }

  guardar(texto: string) {
    this.textos.push(texto);
  }

}
