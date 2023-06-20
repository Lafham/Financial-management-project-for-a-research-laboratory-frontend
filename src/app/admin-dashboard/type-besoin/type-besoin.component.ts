import { Component } from '@angular/core';
import { ITypeBesoin } from '../classes/ITypeBesoin';
import { NgForm } from '@angular/forms';
import { TypeBesoinService } from '../Services/type-besoin.service';

@Component({
  selector: 'app-type-besoin',
  templateUrl: './type-besoin.component.html',
  styleUrls: ['./type-besoin.component.css']
})
export class TypeBesoinComponent {

  types: ITypeBesoin[] = [];
  type: ITypeBesoin = {
    type: ''
  };

  constructor(private typeService: TypeBesoinService) { }
  
  ngOnInit() {
    this.getTypes();
  }

  getTypes() {
    this.typeService.getTypes().subscribe(
      types => this.types = types,
      error => console.log(error)
    );
  }

  onSubmit(form: NgForm) {
    if (form.invalid) {
      return;
    }

    this.typeService.createType(this.type).subscribe(
      response => {
        alert('Type added successfully.');
        this.getTypes();
        this.resetForm(form);
      },
      error => {
        console.error(error);
      }
    );
  }

  onSubmit_Edit(form: NgForm) {
    if (form.invalid) {
      return;
    }

    this.typeService.updateType(this.type).subscribe(
      response => {
        alert('Type updated successfully.');
        this.getTypes();
        this.resetForm(form);
      },
      error => {
        console.error(error);
      }
    );
  }

  deleteType(TypeId: number) {
    this.typeService.deleteType(TypeId).subscribe(
      response => {
        this.getTypes();
      },
      error => {
        console.error(error);
      }
    );
  }

  updateType(Type: ITypeBesoin) {
    this.type = { ...Type };
    
  }


  resetForm(form: NgForm) {
    form.resetForm();
    this.type = {
      type: '',
    };
  }
}
