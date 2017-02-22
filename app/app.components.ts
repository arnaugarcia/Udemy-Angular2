/**
 * Created by Arnau on 21/02/17.
 */
import {Component} from "angular2/core";

@Component({
    selector: "mi-app",
    template: "<h1>{{titulo}}</h1>" +
    "<ul>" +
        "<li>Título: {{pelicula}}</li>" +
        "<li>Director: {{director}}</li>" +
        "<li>Año: {{anio}}</li>" +
    "</ul>"
})

export class AppComponent{
    public titulo:string = "Películas con Angular 2";
    public pelicula:string = "Batman vs Superman";
    public director:string = "Zack Snider";
    public anio:number = 2016;
}