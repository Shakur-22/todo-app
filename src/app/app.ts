// app.component.ts
import { Component, input } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
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

etask = ''


tasks = [
  {text: 'Buy groceries', completed: false, edit: false, high: true},
  {text: 'Schedule dentist appointment', completed: false, edit: false, high: false},
  {text: 'Complete project proposal', completed: false, edit: false, high: true},
  {text: 'Call mom', completed: false, edit: false, high: false},
  {text: 'Pay electricity bill', completed: false, edit: false, high: true},
  {text: 'Walk the dog', completed: false, edit: false, high: false},
  {text: 'Read 20 pages of book', completed: false, edit: false, high: false},
  {text: 'Clean bathroom', completed: false, edit: false, high: false},
  {text: 'Submit timesheet', completed: false, edit: false, high: true},
  {text: 'Water plants', completed: false, edit: false, high: false},
  {text: 'Update resume', completed: false, edit: false, high: true}
]


edittask(taskToEdit: any) {
  const index = this.tasks.indexOf(taskToEdit);
  this.tasks[index].edit = true;
}

updateTask(taskToUpdate: any) {
  const index = this.tasks.indexOf(taskToUpdate);
  this.tasks[index].text = this.etask;
  this.tasks[index].edit = false
  this.etask = ''
}

changePriority(taskPriority: any) {
  if (taskPriority.high == true) {
    taskPriority.high = false
  } else {
    taskPriority.high = true
  }

}

addtask() {
  if (this.newtask != ''){
  this.tasks.push({text: this.newtask, completed: false, edit: false, high: false})
  this.newtask = ''
  } else {
    alert("Enter Task")
  }
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