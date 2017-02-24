/**
 * Created by Arnau on 21/02/17.
 */
import {Component} from "angular2/core";
import {Pelicula} from "./model/pelicula";
import {PeliculasListComponent} from "./components/peliculas-list.component";
import {PeliculasFooterComponent} from "./components/peliculas-footer.component";
@Component({
    selector: "mi-app",
    templateUrl: "app/view/peliculas.html",
    directives: [PeliculasListComponent, PeliculasFooterComponent],
})

export class AppComponent{

    public titulo:string = "Peliculas con Angular 2";

}