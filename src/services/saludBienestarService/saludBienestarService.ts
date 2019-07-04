import { Injectable } from '@angular/core';
import { AuthService } from '../authService/authService';
import { LocalStorageService } from '../localStorageService/localStorageService';
import { NavController } from 'ionic-angular';


@Injectable()
export class SaludBienestarService {

    constructor(
        private authService: AuthService,
        private localStorageService: LocalStorageService
    ) { }

    getSaludBienestar = () =>
        this.authService.getSaludBienestar(this.localStorageService.getObject('token'))
            .toPromise()
            .then(
                (resp: any) => {

                    // Si resp es OK, guardo token en localStorage
                    if (resp.control && resp.control.codigo === 'OK') {
                        return resp;
                    }
                    // Retorna el control que ya dice si está todo OK o no
                    return resp.control;
                }
            )
            .catch(err => err.error.control)

}
