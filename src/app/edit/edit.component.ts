import { Component, OnInit } from '@angular/core';
import { Edit } from '../model/edit.model';
import { EditService } from '../services/edit.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  edits?:Edit[];
  currentEdit:Edit={};
  name='';
  constructor(private editService:EditService) { }

  ngOnInit(): void {
    this.retrieveEdit()
  }
  retrieveEdit():void{
    this.editService.getAll()
      .subscribe(
        data=>{
          this.edits=data;
          console.log(data);
        },
        error=>{
          console.log(error)
        }
      )
  }

}



 

