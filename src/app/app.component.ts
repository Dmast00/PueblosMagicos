import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  estado : any = ''
  constructor() {
    
  }
  ngOnInit(): void {
    console.log(this.estado)
   
  }
  title = 'PueblosMagicos';

  NombreEstado(nombre : any){
    this.estado = nombre
  }
}
