import { Injectable } from '@angular/core';
import { Project } from '../models/project.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  public projects:Project[]=[];

  constructor() { 
    this.createProjects();
  }

  createProjects(){
    let project = new Project(
      'saeta',
      'Saeta Tacna - Web',
      `Saeta es una aplicación destinada a contribuir con la gestión de la seguridad ciudadana en el distrito de Pocollay-Tacna. Contiene 
      módulo para gestionar usuarios, visulizar alertas recibidas en tiempo real, hacer seguimiento real al miembro de 
      seguridad ciudadana.`,
      'saeta.png',
      'https://saeta.herokuapp.com/dashboard'      
    )

    this.projects.push(project);

    project = new Project(
      'landscaping',
      'J.M. & Sons. Landscaping',
      `Esta página web fue creada para publicitar la empresa J.M. & Sons. Landscaping.`,
      'landscaping.png',
      'https://saeta.herokuapp.com/dashboard'      
    )

    this.projects.push(project);

    project = new Project(
      'sgcs',
      'S.G.C.S.',
      `El SGCS (Sistema de Gestión de Configuración de Software) está destinado a gestionar documentos, proyectos, metodologías, miembros, solicitudes de cambio para poder mejorar
       en la configuración del Software`,
      'sgcs.png',
      'https://saeta.herokuapp.com/dashboard'      
    )
    
    this.projects.push(project);
  }
}
