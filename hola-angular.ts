import { Component } from '@angular/core';
import { bootstrap } from '@angular/platform-browser-dynamic';

@Component({
    selector: 'hola-angular',
    template: '<h1>Hola {{ saludo }}</h1>'
})
class HolaAngularComponent{
    saludo: string;
    constructor(){
        this.saludo = "Arnau";
    }
}
bootstrap(HolaAngularComponent); //component with bootstrap!