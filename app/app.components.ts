/**
 * Created by Arnau on 21/02/17.
 */
import {Component} from "angular2/core";
import {Pelicula} from "./model/pelicula";

@Component({
    selector: "mi-app",
    templateUrl: "app/view/peliculas.html",
    styleUrls: ["./assets/css/styles.css"]
})

export class AppComponent{

    public titulo:string = "Peliculas con Angular 2";
    public pelicula:Pelicula;
    public mostrarDatos:boolean;
    public peliculas:Array<Pelicula>;

    constructor(){
        this.mostrarDatos = false;
        this.pelicula = new Pelicula(1,"Batman v Superman","Zack Snider",2016);
        this.debug();
        this.peliculas = [
            new Pelicula(1,"Batman v Superman","Zack Snider",2016),
            new Pelicula(2,"La verdad deuele","Will Smith",null),
            new Pelicula(3,"El señor de los anillos","Desconocido",2004),
            new Pelicula(4,"Una historia real","El de supersalidos",2015),
            new Pelicula(5,"Don Jhon","Joseph Gordon Levit",null)
        ]
    }

    debug(titulo = null){
        if (titulo != null){
            console.log(this.pelicula.titulo);
        }else{
            console.log(this.pelicula);
        }
    }

    onShowHide(value:boolean){
        this.mostrarDatos=value;
    }
}