import { Component, EventEmitter, OnInit,Output } from '@angular/core';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit {

  @Output() newItemEvent = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
  }

  PathId = addEventListener('click',(e)=>{
    let item = e.target as Element
    let name = item.getAttribute('name')
    let id = item.getAttribute('id')
    window.scrollTo(0,document.body.scrollHeight);    
    this.newItemEvent.emit(name)

  })

}
