import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrl: './todolist.component.css'
})
export class TodolistComponent {
 taskObj:Task;
  taskList:Task[]=[];
  originalTaskList: Task[] = [];
  tagsList:string []= ['work','market','meeting','calls','defect','story','interview'];
  filterType: string='';
  selectedTag:string='';



  constructor(){
    this.taskObj=new Task();
    
    //for storing the data in string format
    const localData=localStorage.getItem('todoapp');
    if(localData!=null){

      this.taskList=JSON.parse(localData);
      this.originalTaskList = this.taskList;
    }
  }
//on clicking add new task function
  createNewTask(){
  
    const task=JSON.stringify(this.taskObj);
    const parseTask=JSON.parse(task);
    this.taskList.push(parseTask);
    this.originalTaskList = this.taskList;
localStorage.setItem('todoapp',JSON.stringify(this.taskList));
  }

  //once the check boxes are ticked after refreshing page it should not change the ticks
  onComplete(){
   
    // const newData=this.taskList;
    this.originalTaskList = this.taskList;
    localStorage.setItem('todoapp',JSON.stringify(this.taskList));
  }
  //for removing tasks
  onRemove(index:number){
    debugger;
    this.taskList.splice(index,1);
    this.originalTaskList = this.taskList;
    localStorage.setItem('todoapp',JSON.stringify(this.taskList));
  }

  //for adding tags
  getArrayFromCommaSeperatedString(value:string) : string[]{
const arr= value.split(',');
    return arr;

  }

  setFilter(type: string){
this.filterType=type;
this.selectedTag='';
if(this.filterType == 'showCompleted'){
this.taskList = this.originalTaskList.filter(m=>
  m.isCompleted == true);
}
else{
  this.taskList = this.originalTaskList;
}
  }

  filterTag(tagName: string){
    debugger;
    this.selectedTag = tagName;
    const filterData = this.originalTaskList.filter((item)=>{
        return item.tags.includes(tagName);
      });
      this.taskList =filterData;
  
  }


}
export class Task{
  taskName:string;
  dueDate:string;
  tags:string;
  isCompleted:boolean;
  filterType:string= '';
  constructor(){
    this.taskName='';
    this.dueDate='';
    this.tags='';
    this.isCompleted=false;

  }
}