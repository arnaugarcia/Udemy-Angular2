/**
 * Created by Arnau on 21/02/17.
 */
import {Component} from "angular2/core";
import {Pelicula} from "./model/pelicula";

@Component({
    selector: "mi-app",
    templateUrl: "app/view/peliculas.html"
})

export class AppComponent{

    public pelicula:Pelicula;

    constructor(){
        this.pelicula = new Pelicula(1,"Batman v Superman","Zack Snider",2016);
        this.debug();
    }

    debug(){
        console.log(this.pelicula);
    }
}