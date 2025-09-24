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
  
selectedcatagory = 'In Progress'

newtask = ''

tasks = [
  {text: 'Task 1', completed: false},
  {text: 'Task 2', completed: false},
  {text: 'Task 3', completed: false}
]



addtask() {
  this.tasks.push({text: this.newtask, completed: false})
  this.newtask = ''
}

countComplete() {
  return this.tasks.filter(task => task.completed == true).length
}

countInProgress() {
  return this.tasks.filter(task => task.completed == false).length
}

  getCategoriesWithCounts() {
  return [
    { name: 'In Progress', count: this.countInProgress() },
    { name: 'completed', count: this.countComplete() }
  ];
}

  getfilteredtask() {
    if (this.selectedcatagory == "In Progress") {
      return this.tasks.filter(task => task.completed == false)
    } else {
      return this.tasks.filter(task => task.completed == true)

    }
  }


  changestatus(wtask: any) {
    if (wtask.completed == true){
      wtask.completed = false
    } else {
      wtask.completed = true
    }
  }

delete(taskToDelete: any) {
  const index = this.tasks.indexOf(taskToDelete);
  if (index > -1) {
    this.tasks.splice(index, 1);
  }
}


}