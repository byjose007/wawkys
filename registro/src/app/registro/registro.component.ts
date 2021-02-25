import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { RegistroService } from '../registro.service';
import { faChartArea } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {

  title = 'registro';
  nombres = '';
  correo = '';
  telefono = '';
  pais = ''
  constructor(private registroService: RegistroService, private toastr: ToastrService) { }


  guardar() {

    let data = {
      nombres: this.nombres,
      correo: this.correo,
      telefono: this.telefono,
      pais: this.pais

    }

    this.registroService.createRegistro(data).then(res => {
      /*do something here....maybe clear the form or give a success message*/
      console.log(res, ' registro guardado....');
      this.showSuccess();
     this.nombres = '';
     this.correo = '';
      this.telefono = '';
      this.pais = '';

    });

  }


  showSuccess() {
    this.toastr.success('Se ha registrado correctamente!');
  }

  listar(){
    
  }

  ngOnInit(): void {


    this.registroService.getIp().subscribe((data:any) =>{
      console.log(data, 'ip');

      this.registroService.getGEOLocation(data.ip).subscribe((pais:any) =>{
        console.log(pais, "pais");

        this.pais = pais.country_name;
        
      })
      
    })
  }

}
