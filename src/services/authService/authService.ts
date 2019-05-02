import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../constants/environment';


@Injectable()
export class AuthService {

    constructor(
        private httpClient: HttpClient
    ) { }

    login = (nombre, clave) => this.httpClient.post(
        `${environment.WS_URL}/usuarios/${nombre}`,
        {},
        {
            headers: new HttpHeaders({
                'clave': clave
            })
        }
    )

}
