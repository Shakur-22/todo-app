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
  {text: 'Buy groceries', completed: false, edit: false},
  {text: 'Schedule dentist appointment', completed: false, edit: false},
  {text: 'Complete project proposal', completed: false, edit: false},
  {text: 'Call mom', completed: false, edit: false},
  {text: 'Pay electricity bill', completed: false, edit: false},
  {text: 'Walk the dog', completed: false, edit: false},
  {text: 'Read 20 pages of book', completed: false, edit: false},
  {text: 'Clean bathroom', completed: false, edit: false},
  {text: 'Submit timesheet', completed: false, edit: false},
  {text: 'Water plants', completed: false, edit: false},
  {text: 'Update resume', completed: false, edit: false},
  {text: 'Organize desk workspace', completed: false, edit: false},
  {text: 'Book vacation flights', completed: false, edit: false},
  {text: 'Fix leaky faucet', completed: false, edit: false},
  {text: 'Attend team meeting', completed: false, edit: false},
  {text: 'Take car for oil change', completed: false, edit: false},
  {text: 'Prep for presentation', completed: false, edit: false},
  {text: 'Return library books', completed: false, edit: false},
  {text: 'Exercise for 30 minutes', completed: false, edit: false},
  {text: 'Research new laptop', completed: false, edit: false},
  {text: 'Plan weekend trip', completed: false, edit: false},
  {text: 'Send birthday card to aunt', completed: false, edit: false},
  {text: 'Backup computer files', completed: false, edit: false},
  {text: 'Review monthly budget', completed: false, edit: false},
  {text: 'Clean out email inbox', completed: false, edit: false},
  {text: 'Pick up dry cleaning', completed: false, edit: false},
  {text: 'Install new software updates', completed: false, edit: false},
  {text: 'Practice guitar for 20 minutes', completed: false, edit: false},
  {text: 'Meal prep for next week', completed: false, edit: false},
  {text: 'Write thank you notes', completed: false, edit: false}
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

addtask() {
  if (this.newtask != ''){
  this.tasks.push({text: this.newtask, completed: false, edit: false})
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