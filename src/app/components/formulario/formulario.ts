import { Component } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { Persona} from '../../models/persona';
import { LocalStorage} from '../../services/local-storage';

@Component({
  imports: [FormsModule],
  selector: 'app-formulario',
  styleUrl: './formulario.css',
  templateUrl: './formulario.html',
})
export class Formulario {

  persona: Persona = {
    nombres: '',
    apellidos: '',
    correo: '',
    edad: 0,
    ciudad: ''
  };

  constructor(
    private localStorage: LocalStorage
  ) {}

  guardar(){
    this.localStorage.guardar(this.persona);
    this.persona = {
      nombres: '',
      apellidos: '',
      correo: '',
      edad: 0,
      ciudad: ''
    }
  }

}
