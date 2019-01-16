import { Md5 } from 'ts-md5/dist/md5';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Configuraciones } from '../../clases/Configuraciones';
import { Headers, Http, Request, RequestOptions, RequestOptionsArgs, RequestMethod } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/timeout';


@Injectable()
export class LoginServiceProvider {

  constructor(public http: Http) {
  }

  public login(_usr: string, _pass: string) {
    var opciones: RequestOptionsArgs = {
      url: Configuraciones.authUrl + _usr,
      method: RequestMethod.Post,
      search: null,
      headers: new Headers({ clave: ' ' + Md5.hashStr(_pass) }),
      body: null
    }
    var reqOptions = new RequestOptions(opciones);
    var req = new Request(reqOptions);
    return this.http.request(req).timeout(Configuraciones.timeoutDefault).map(res => { return res.json() });
  }

  
}
