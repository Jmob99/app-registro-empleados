export class Empleado {

    constructor(nombre:string,apellido:string,cargo:string,salario:number){

        this.nombre = nombre;
        this.apellido=apellido;
        this.salario=salario;
        this.cargo=cargo;

    }


    nombre:string="";
    apellido:string="";
    cargo:string="";
    salario:number=0;

}

