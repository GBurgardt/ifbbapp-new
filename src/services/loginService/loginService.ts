import { Injectable } from '@angular/core';
import { AuthService } from '../authService/authService';
import { LocalStorageService } from '../localStorageService/localStorageService';


@Injectable()
export class LoginService {

    constructor(
        private authService: AuthService,
        private localStorageService: LocalStorageService
    ) { }

    login = (account) =>
        this.authService.login(account.username, account.password).toPromise()
            .then(
                (resp: any) => {

                    // Si resp es OK, guardo token en localStorage
                    if (resp.control && resp.control.codigo === 'OK') {
                        this.localStorageService.setObject('token', resp.datos.acceso.token);
                    }
                    // Retorna el control que ya dice si está todo OK o no
                    return resp.control;
                }
            )
            .catch(err => err.error.control)


    register = (account) =>
        this.authService.register(account.username, account.email, account.password).toPromise()
            .then(
                (resp: any) => resp.control
            )
            .catch(err => err.error.control)

}
