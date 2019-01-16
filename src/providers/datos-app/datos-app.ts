import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from '../../clases/usuario';
import { Http } from '@angular/http';


@Injectable()
export class DatosAppProvider {

  public isLogueado: Boolean = false;
  public usuarioLogueado: Usuario;
  public token : string;

  constructor(public http: Http) {
    this.isLogueado = false;
    this.usuarioLogueado = new Usuario();
  }

  public setUsuario(val){
    this.token = val.acceso.token;
    this.usuarioLogueado.email  = val.cuenta.mail;
    this.usuarioLogueado.nombre = val.cuenta.nombrePersona;
    this.usuarioLogueado.idUsuario = val.cuenta.idUsuario;
  }
}
