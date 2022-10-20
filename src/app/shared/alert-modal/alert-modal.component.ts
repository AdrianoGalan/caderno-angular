import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, Inject, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-alert-modal',
  templateUrl: './alert-modal.component.html',
  styleUrls: ['./alert-modal.component.scss']
})
export class AlertModalComponent implements OnInit {


  constructor(@Inject(MAT_DIALOG_DATA) public data: {msg: string}) { }

  ngOnInit(): void {
  }


  onClose() {

    

  }
}
