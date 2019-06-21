import { Injectable } from '@angular/core';
import { AuthService } from '../authService/authService';
import { LocalStorageService } from '../localStorageService/localStorageService';


@Injectable()
export class NewsService {

    constructor(
        private authService: AuthService,
        private localStorageService: LocalStorageService
    ) { }

    getnews = () => {
        this.authService.getNews(this.localStorageService.getObject('token'))
            .toPromise()
            .then(
                (resp: any) => {

                    // Si resp es OK, guardo token en localStorage
                    if (resp.control && resp.control.codigo === 'OK') {
                        console.log(resp);
                    }
                    // Retorna el control que ya dice si está todo OK o no
                    return resp.control;
                }
            )
            .catch(err => err.error.control)
    }

    

    // BORRAR DEBAJO:

    // execSp = () => this.http.get(`${environment.WS_URL}/admin-sp/${this.spName}`).toPromise()
    // .then(
    //     (resp: any) => {
    //         if (resp && resp.length > 0) {
    //             this.columns = Object.keys(resp[0])
    //             this.data = resp;
    //         } else {
    //             alert(resp)
    //         }
    //     }
    // )
    

    login = (account) =>
        this.authService.login(account.username, account.password).toPromise()
            .then(
                (resp: any) => {

                    // Si resp es OK, guardo token en localStorage
                    if (resp.control && resp.control.codigo === 'OK') {
                        this.localStorageService.getObject('token');
                    }
                    // Retorna el control que ya dice si está todo OK o no
                    return resp.control;
                }
            )
            .catch(err => err.error.control)


    // register = (account) =>
    //     this.authService.register(account.username, account.email, account.password).toPromise()
    //         .then(
    //             (resp: any) => resp.control
    //         )
    //         .catch(err => err.error.control)

}
