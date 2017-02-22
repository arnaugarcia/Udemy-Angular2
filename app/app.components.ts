/**
 * Created by Arnau on 21/02/17.
 */
import {Component} from "angular2/core";

@Component({
    selector: "mi-app",
    templateUrl: "app/view/peliculas.html"
})

export class AppComponent{
    public titulo:string = "Películas con Angular 2";
    public pelicula:string;
    public director:string;
    public anio:number;

    constructor(){
        this.pelicula = "Batman v Superman";
        this.director = "Zack Snider";
        this.anio = 2016;
        this.holaMundo();
    }

    holaMundo(){
        alert("Películas: " + this.pelicula + " - " + this.director + " - " + this.anio );
    }
}