import { Injectable } from '@angular/core';
import { Language, Frameworks } from "./habilities.service";

@Injectable()
export class PortfolioService {

  proyects : Proyects[] = [
    {
      name:"SpotiApp",
      description: "Applicacion que consume el api de spotify, para conocer nuevos lanzamientos y artistas",
      imageUrl:"https://iili.io/JM23FI.th.jpg",
      repoUrl:"",
      url:"https://jesuseduaardo-spotiapp.herokuapp.com/",
      lenguajes:[
        {name:"Java", version:"8"},
        {name:"TypeScript", version:"3.8"}
      ],
      frameworks:[
        {name:"SpringBoot", version:5, percent:0}, 
        {name:"Angular", version:9, percent:0 },
        {name:"Bootstrap", version: 4, percent:0}
      ]
    },
    {
      name:"Saenca",
      description: "Ecommerce completo con panel de administracion creado con laravel 5.8 y ReactJs 16",
      imageUrl:"https://iili.io/JM2d6N.th.jpg",
      repoUrl:"",
      url:"http://saenca.com/",
      lenguajes:[
        {name:"PHP", version:"7"},
        {name:"Javascript", version:"ES6"}
      ],
      frameworks:[
        {name:"Laravel", version:5.8, percent:0}, 
        {name:"ReactJS", version:16, percent:0 },
        {name:"MaterialUI", version: 8, percent:0}
      ]
    }
  ] 

  constructor() { }

  getPortfolio():Proyects[]{
    return this.proyects;
  }
}

export interface Proyects{
  name:string;
  description:string;
  imageUrl:string,
  repoUrl:string,
  url:string;
  lenguajes: Language[];
  frameworks: Frameworks[]
}
