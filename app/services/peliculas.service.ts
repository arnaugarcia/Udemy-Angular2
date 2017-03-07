/**
 * Created by Arnau on 06/03/17.
 */
import {Injectable} from "angular2/core";
import {PELICULAS} from "./mock.peliculas";
@Injectable()

export class PeliculasService{
    getPeliculas(){
        return PELICULAS;
    }
}