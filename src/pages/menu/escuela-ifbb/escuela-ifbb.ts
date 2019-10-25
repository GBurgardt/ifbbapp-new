import { Component } from "@angular/core";
import { NavController, NavParams } from "ionic-angular";
import { mockEscuela } from "../../../constants/mockUpData";

/**
 * Generated class for the EscuelaIfbbPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
    selector: "page-escuela-ifbb",
    templateUrl: "escuela-ifbb.html"
})
export class EscuelaIfbbPage {
    escuela = mockEscuela;

    constructor(public navCtrl: NavController, public navParams: NavParams) {}

    ionViewDidLoad() {
        console.log("ionViewDidLoad EscuelaIfbbPage");
    }
}
