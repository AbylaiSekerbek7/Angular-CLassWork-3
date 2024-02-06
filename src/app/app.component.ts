import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ResumeComponent } from './resume/resume.component';
import { Form } from '@angular/forms';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    ResumeComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  // hobbies: Array<string> = ['Спорт', 'Книги']
  // isOpen: boolean = false

  // setIsOpen() {
  //   this.isOpen = !this.isOpen
  // }

  // formData = {
  //   name: "",
  //   surname: "",
  // }
  
  // onSubmit(event:Event) {
  //   event.preventDefault();
  //   console.log(`Data submited - ${this.formData.name} , ${this.formData.surname}`);
  // }

  // imgArr =  {
  //   img1: "../assets/car1.jpg",
  //   img2: "../assets/mercedes-logo-15866.png",
  //   img3: "../assets/Mercedes CEO.jpg",
  // }

  // Lab 01
  imgArr: Array<string> = ['../assets/car1.jpg', '../assets/mercedes-logo-15866.png', '../assets/Mercedes CEO.jpg'];

  // Lab 02
  hobby = {
    name: "Football",
    desc: "Football ipsum ipsum woifejeowi",
    star: "10 Stars",
  }

  hobbyArr: Array<string> = ['../assets/Essence of a football.jpg', '../assets/Cris7.jpg']
}
