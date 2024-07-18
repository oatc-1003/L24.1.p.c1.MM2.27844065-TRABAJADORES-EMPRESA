// 10. TRABAJADORES EMPRESA
// Se conoce de cada uno de los trabajadores de una empresa su nombre, número de horas
// trabajadas en tiempo regular y número de horas extra. La hora en tiempo regular se paga a 10$.
// y la hora en tiempo extra se paga a 25$. Se desea que el programa genere monto total pagado
// por horas extras y nombre del trabajador con el menor salario obtenido.
// Se dispone de los siguientes datos de varios trabajadores: (nombre, número de horas regular,
// números de horas extra) (Mary, 30, 10), (José, 35, 5), (Carlos, 35, 0), (Pedro, 25, 10)
// Monto total pagado por horas extras: 625$
// Nombre del trabajador con el menor salario obtenido: Carlos con un salario de 350$

import Empresa from "./classes/empresa.js";
import Trabajador from "./classes/trabajador.js";

let _trabajador1=new Trabajador("Mary",30,10);
let _trabajador2=new Trabajador("Jose",35,5);
let _trabajador3=new Trabajador("Carlos",35,0);
let _trabajador4=new Trabajador("Pedro",25,10);

let _empresa=new Empresa()

_empresa.procesarTrabajador(_trabajador1)
_empresa.procesarTrabajador(_trabajador2)
_empresa.procesarTrabajador(_trabajador3)
_empresa.procesarTrabajador(_trabajador4)

document.body.innerHTML=`
<br>
Monto total pagado por horas extras: ${_empresa.acuHorasExtra}$
<br>
Nombre del trabajador con el menor salario obtenido: ${_empresa.nombreMenorSalario} con un salario de ${_empresa.menorSalario}$
`