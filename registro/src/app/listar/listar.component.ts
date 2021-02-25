import { Component, OnInit } from '@angular/core';
import { RegistroService } from '../registro.service';
import exportFromJSON from 'export-from-json'

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.scss']
})
export class ListarComponent implements OnInit {

  registros : any = [];

  constructor(private registroService: RegistroService) { }

  ngOnInit(): void {

    this.registroService.getRegistros().subscribe(data =>{

      this.registros = data;
      console.log(this.registros);
      

    });

     
  const data = [{ foo: 'foo'}, { bar: 'bar' }]
  const fileName = 'download'
  const exportType = 'csv'
  
  exportFromJSON({ data, fileName, exportType })
  }

}
