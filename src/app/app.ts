// app.component.ts
import { Component, input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],  
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
  
  categories = ['In Progress', 'Completed'];
  selectedcategory = 'In Progress';

  tasks = [
    {text: 'Task 1', completed: false},
    {text: 'Task 2', completed: false},
    {text: 'Task 3', completed: false}
  ]

  newtask = "";

  addtask() {
    if (this.newtask !== "") {
      this.tasks.push({text: this.newtask, completed: false})
      this.newtask = ""
    } else {
      alert('Enter a Task')
    }
  }

  getfilteredtasks() {
    if (this.selectedcategory === 'Completed') {
      return this.tasks.filter(task => task.completed === true);
    } else {
      return this.tasks.filter(task => task.completed === false);
    }
  }

  changestatus(whichtask: any) {
     if (whichtask.completed == true) {
      whichtask.completed = false
     } else {
      whichtask.completed = true
     }
  }


}

 