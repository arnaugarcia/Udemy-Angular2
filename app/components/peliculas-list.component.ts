/**
 * Created by Arnau on 24/02/17.
 */
import {Component} from "angular2/core";
import {Pelicula} from "../model/pelicula";

@Component({
    selector: "peliculas-list",
    templateUrl: "app/view/peliculas-list.html"
})

export class PeliculasListComponent{

    public pelicula:Pelicula;
    public peliculaElegida:Pelicula;
    public mostrarDatos:boolean;
    public peliculas;

    constructor(){
        this.mostrarDatos = false;
        this.debug();
        this.peliculas = [
            new Pelicula(1,"Batman v Superman","Zack Snider",2016),
            new Pelicula(2,"La verdad deuele","Will Smith",null),
            new Pelicula(3,"El señor de los anillos","Desconocido",2004),
            new Pelicula(4,"Una historia real","El de supersalidos",2015),
            new Pelicula(5,"Don Jhon","Joseph Gordon Levit",null)
        ];
        this.peliculaElegida = this.peliculas[0];
        this.pelicula = this.peliculas[0];
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

    onCambiarPelicula(pelicula){
        this.peliculaElegida = pelicula;
    }
}