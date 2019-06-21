import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../constants/environment';

import * as crypto from 'crypto-js';

@Injectable()
export class AuthService {

    constructor(
        private httpClient: HttpClient
    ) { }

    login = (nombre, clave) =>
        this.httpClient.post(
            `${environment.WS_URL}/usuarios/${nombre}`,
            {},
            {
                headers: new HttpHeaders({
                    'clave': crypto.MD5(clave).toString(),
                    'Content-Type': 'application/json',
                })
            }
        )

    register = (nombreUsuario, mail, clave) =>
        this.httpClient.post(
            `${environment.WS_URL}/usuarios`,
            {
                nombreUsuario,
                mail
            },
            {
                headers: new HttpHeaders({
                    'clave': clave,
                    'Content-Type': 'application/json',
                })
            }
        )

    getNews = (token) => {
        //  http://165.22.198.233:8080/IfbbAppRest-0.1alpha/ws/noticias?pedido=1&categoria=1
        return this.httpClient.get(
            `${environment.WS_URL}/noticias`,
            {
                headers: new HttpHeaders({'token': token})
            }
        );
    }

}
