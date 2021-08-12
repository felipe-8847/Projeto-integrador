import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sobre-nos',
  templateUrl:'./sobre-nos.component.html',
  styleUrls: ['./sobre-nos.component.css']
})
export class SobreNosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  projectcount:number = 0;
  vendedorescount: number=0;
  clientescount: number=0;
  horascount:number=0;

  projectcountstop: any = setInterval(() => {
    this.projectcount++;

    if(this.projectcount ==56){
      clearInterval(this.projectcountstop);
    }
  },10)

  vendedorescountstop: any = setInterval(() => {
    this.vendedorescount++;

    if(this.vendedorescount ==892){
      clearInterval(this.vendedorescountstop);
    }
  },10)

  clientescountstop: any = setInterval(() => {
    this.clientescount++;

    if(this.clientescount ==1785){
      clearInterval(this.clientescountstop);
    }
  },10)

  horascountstop: any = setInterval(() => {
    this.horascount++;

    if(this.horascount ==600){
      clearInterval(this.horascountstop);
    }
  },10)
}

