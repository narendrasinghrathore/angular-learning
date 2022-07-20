import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crudoperation',
  templateUrl: './crudoperation.component.html',
  styleUrls: ['./crudoperation.component.scss']
})
export class CrudoperationComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  title = 'app';
  employees = [
    {name:"Sikandar", position:"Programmer"},
    {name:"Alex", position:"Designer"},
    {name:"Maria", position:"Manager"}
  ];
  model:any={};
  model2:any={};
  msg:any="";
  addEmployee(){
    this.employees.push(this.model);
    this.model = {};
    this.msg = "Record is successfully added..... ";

  }
  deleteEmployee(i: number){
    this.employees.splice(i,1);
    this.msg = "Record is successfully deleted..... ";

  }
  myValue: any;
  editEmployee(k: any){
    this.model2.name = this.employees[k].name;
    this.model2.position = this.employees[k].position;
    this.myValue = k;

  }
  updateEmployee(){
    let k= this.myValue;
    for(let i=0; i<this.employees.length;i++){
      if(i==k){
        this.employees[i]= this.model2;
        this.model2 = {};
        this.msg = "Record is successfully updated..... ";
      }

    }

  }
  clickMe(){
    this.msg = "";

}



}
