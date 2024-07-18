export default class Empresa{
    constructor(){
        this.PAGO_HORA_REGULAR=10
        this.PAGO_HORA_EXTRA=25
        this.acuHorasExtra=0
        this.menorSalario=1000;
        this.nombreMenorSalario="";
    }

    procesarTrabajador(trabajador){
        let _salario=this.calcSalario(trabajador.horasRegulares,trabajador.horasExtra)
        let _montoHorasExtra=trabajador.horasExtra * this.PAGO_HORA_EXTRA

        this.acuHorasExtra+=_montoHorasExtra
       if(_salario<this.menorSalario){
            this.menorSalario=_salario
            this.nombreMenorSalario=trabajador.nombre
       }
    }

    calcSalario(horasRegulares, horasExtra){
        let _salario=this.PAGO_HORA_REGULAR * horasRegulares
        let _extra=this.PAGO_HORA_EXTRA * horasExtra
        return _salario + _extra

    }

}