import { Component, OnInit } from '@angular/core';
interface Education {
  name: string,
  enterprise: string
}

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {

  educationList: Education[] = [
    { name: 'Desarrollo y Diseño Web', enterprise: 'Google LLC' },
    { name: 'Diplomado en Sistemas Informáticos', enterprise: 'Fundación Ing. Carlos Slim' },
    { name: 'Programación Orientada a Objetos', enterprise: 'Fundación Ing. Carlos Slim' },
    { name: 'Lógica de Programación', enterprise: 'Fundación Ing. Carlos Slim' },
    { name: 'Desarrollo y Diseño Web', enterprise: 'Edutin Academy' },
    { name: 'HTML, CSS y JavasCript', enterprise: 'Khan Academy' },
    { name: 'Ciencias de la computación 101', enterprise: 'Certificado Stanford University' },
    { name: 'MySQL', enterprise: 'Udemy' }
  ];

  othersList: Education[] = [
    { name: 'Técnico en Informática', enterprise: 'Instituto Santa Mónica' },
    { name: 'Diploma de puntualidad', enterprise: 'Instituto Santa Mónica' },
    { name: 'Diploma de Honor', enterprise: 'Instituto Santa Mónica' },
    { name: 'Diploma de Liderazgo', enterprise: 'Instituto Santa Mónica' },
    { name: 'Campeón Feria Tecnológica', enterprise: 'Premiado con medalla' },
    { name: 'Excelencia Académica', enterprise: 'Premiado con medalla (indice perfecto 100%)' },
    { name: 'Premio "Santa Mónica"', enterprise: 'Instituto Santa Mónica' }
  ];

  ngOnInit(): void {
  }

}
