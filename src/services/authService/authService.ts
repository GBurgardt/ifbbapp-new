import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
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

    // CRISTIAN-COMMENT
    // Estudiar que pasa si el backend no respodne. Incorporar un ngIf            

    getNews = (token) => {
        // CRISTIAN-COMMENT
        // Softcodear los parametros app y '1'
        return this.httpClient.get(
            `${environment.WS_URL}/noticias`,
            {
                headers: new HttpHeaders({ 'token': token }),
                params: new HttpParams()
                    .set('pedido', 'app')
                    .set('categoria', '1')
            }
        );
    }
    
    getSaludBienestar = (token) => {
        // CRISTIAN-COMMENT
        // Softcodear los parametros app y '1'
        // Copiado de getNews, editar según backend
        return this.httpClient.get(
            `${environment.WS_URL}/noticias`,
            {
                headers: new HttpHeaders({ 'token': token }),
                params: new HttpParams()
                    .set('pedido', 'app')
                    .set('categoria', '1')
            }
        );
    }

    getTorneos = (token) => {
        // CRISTIAN-COMMENT
        // Softcodear los parametros app y '1'
        // Copiado de getNews, editar según backend
        return this.httpClient.get(
            `${environment.WS_URL}/noticias`,
            {
                headers: new HttpHeaders({ 'token': token }),
                params: new HttpParams()
                    .set('pedido', 'app')
                    .set('categoria', '1')
            }
        );
    }

}
