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
  constructor(private registroService: RegistroService, private toastr: ToastrService) { }


  guardar() {

    let data = {
      nombres: this.nombres,
      correo: this.correo,
      telefono: this.telefono

    }

    this.registroService.createRegistro(data).then(res => {
      /*do something here....maybe clear the form or give a success message*/
      console.log(res, ' registro guardado....');
      this.showSuccess();
     this.nombres = '';
     this.correo = '';
      this.telefono = '';

    });

  }


  showSuccess() {
    this.toastr.success('Se ha registrado correctamente!');
  }

  listar(){
    
  }

  ngOnInit(): void {
  }

}
