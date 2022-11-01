import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Maquina } from 'src/app/model/maquina';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-alarme',
  templateUrl: './add-alarme.component.html',
  styleUrls: ['./add-alarme.component.scss']
})
export class AddAlarmeComponent implements OnInit {
onSubmit() {
throw new Error('Method not implemented.');
}

  formulario: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<AddAlarmeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Maquina,

    private formBuilder: FormBuilder) {

    this.formulario = this.formBuilder.group({
      nome: [null, [Validators.required]],
      email: [localStorage.getItem("email")]
    });
   }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  getErrorMessage(msg: string) {
    return msg;
  }

}
