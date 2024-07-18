export default class Trabajador{
    constructor(nombre, horasRegulares,horasExtra){
        this.nombre=nombre;
        this.horasRegulares=horasRegulares;
        this.horasExtra=horasExtra;
    }

    set nombre(n){
        this._nombre=n
    }
    get nombre(){
        return this._nombre
    }
    set horasRegulares(hr){
        this._horasRegulares=+hr
    }
    get horasRegulares(){
        return this._horasRegulares
    }
    set horasExtra(he){
        this._horasExtra=+he
    }
    get horasExtra(){
        return this._horasExtra
    }

}