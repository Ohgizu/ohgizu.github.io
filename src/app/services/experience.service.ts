import { Injectable } from "@angular/core";

@Injectable()
export class ExperienceService{
    private experience:Experience[] = [
        {
            empresa:"IT Resources S.A",
            puesto: "Programador Java",
            fechaIngreso: "2019-07-01",
            fechaEgreso: "",
            proyectos:[
                {
                    nombre:"Legal Security",
                    resumenProyecto:"Desarrollo y mantenimiento de la aplicacion de seguridad personal y empresarial de la Empresa Legal Security",
                    tecnologias: ["JavaEE", "SpringMVC", "MySql", "Bootstrap3", "Javascript/jQuery", "Git/SVN"]
                },
                {
                    nombre:"Banco Santander",
                    resumenProyecto:"Desarrollo y mantenimiento de la aplicacion portal del Banco Santander",
                    tecnologias: ["JavaEE", "SpringMVC", "OracleDB", "jQuery", "Git/SVN"]
                }
            ],
            resumenProyecto:"",
            tecnologias: []
        },
        {
            empresa:"Eglam Argentina S.A",
            puesto: "Programador Backend",
            fechaIngreso: "2019-02-01",
            fechaEgreso: "2019-07-01",
            proyectos:[],
            resumenProyecto:"Gestión y desarrollo de modulos para e-commerces basados en Magento",
            tecnologias: ["PHP5", "Magento", "MySql", "Javascript/jQuery", "Git/SVN"]
        },
        {
            empresa:"Tecnosoftware S.A",
            puesto: "Programador Java",
            fechaIngreso: "2018-07-01",
            fechaEgreso: "2019-02-01",
            proyectos:[
                {
                    nombre:"Banco Provincia",
                    resumenProyecto:"Desarrollo y mantenimiento de la aplicacion BIP (Banca Internet Provincia) del Banco Provincia",
                    tecnologias: ["JavaEE", "SpringMVC", "OracleDB", "Javascript/jQuery", "Git/SVN"]
                }
            ],
            resumenProyecto:"",
            tecnologias: []
        },
        {
            empresa:"Arkiteck C.A",
            puesto: "Analista de Sistemas 3",
            fechaIngreso: "2017-11-01",
            fechaEgreso: "2018-02-01",
            proyectos:[
                {
                    nombre:"Banco BBVA Provincial (Venezuela)",
                    resumenProyecto:"Desarrollo y mantenimiento de la plataforma para usuarios corporativos del banco BBVA Provincial",
                    tecnologias: ["JavaEE", "SpringMVC", "Bootstrap3","Javascript/jQuery", "Git"]
                }
            ],
            resumenProyecto:"",
            tecnologias: []
        },
        {
            empresa:"La Victoria 3021 R.L (Venezuela)",
            puesto: "Desarrollador Web",
            fechaIngreso: "2013-10-01",
            fechaEgreso: "2017-11-01",
            proyectos:[],
            resumenProyecto:"Desarrollo de sitios/aplicaciones web tanto en frontend y backend siguiendo las exigencias de cada proyecto",
            tecnologias: ["PHP5", "Codeigniter", "MySql", "Bootstrap3", "Javascript/jQuery", "Git"]
        },
        
    ];

    getExperience():Experience[]{
        return this.experience;
    }
}

export interface Experience{
    empresa:string,
    puesto:string,
    fechaIngreso:string,
    fechaEgreso:string,
    proyectos:Proyects[],
    resumenProyecto:string,
    tecnologias:string[]
}

interface Proyects{
    nombre:string,
    resumenProyecto:string,
    tecnologias:string[]
}