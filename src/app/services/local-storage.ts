import { Service } from '@angular/core';
import { Persona} from '../models/persona';

@Service()
export class LocalStorage {

  private readonly CLAVE = "personas" ;


  obtenerTodos(): Persona[] {
   const datos = localStorage.getItem(this.CLAVE);

    return datos ? JSON.parse(datos) : [];
  }

  guardar(persona: Persona){
    const personas = this.obtenerTodos();
    personas.push(persona);
    localStorage.setItem(this.CLAVE, JSON.stringify(personas));

  }

  eliminar(){

  }



}
