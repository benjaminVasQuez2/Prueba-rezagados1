import { Component } from '@angular/core';
import { ServicioDeLaEmpresaService } from '../../servicios/Servicio_de_la_Empresa/servicio-de-la-empresa.service';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrl: './servicios.component.css'
})
export class ServiciosComponent {
  solicitudes_formulario:any;
  constructor( private ObtenerservicioSrv:ServicioDeLaEmpresaService){}
  ngOnInit(){
    this.obtenerServiciosEmpresa();
  }
  obtenerServiciosEmpresa(){
    this.ObtenerservicioSrv.obtenerServiciodelaEmpresa().subscribe(
      (response:any) => {        
        this.solicitudes_formulario = response.servicios_empresa;          
        console.log(this.solicitudes_formulario);
      }, error => {
        console.log(error);
      }
    )
  }
}
