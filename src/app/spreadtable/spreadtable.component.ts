import { Component, Input, OnInit } from '@angular/core';
import { ProjectsService } from '../projects.service';
import { Project } from '../projects.model';
import { FocusTrapManager } from '@angular/cdk/a11y/focus-trap/focus-trap-manager';

@Component({
  selector: 'app-spreadtable',
  templateUrl: './spreadtable.component.html',
  styleUrls: ['./spreadtable.component.css']
})
export class SpreadtableComponent implements OnInit {

  @Input() tblHeaders: string[] = [];
  @Input() usrData: [{}] = [{}];
  @Input() mngData: Project[] = [];

  statusDropValues = ['Active', 'Closed', 'Dormant'];


  constructor(private projectSrv: ProjectsService) { }

  ngOnInit() {
    console.log(this.tblHeaders);
    console.log(this.mngData);
    this.ifAdmin();
  }

  ifAdmin() {
    console.log('in admin table mode');
    console.log(this.statusDropValues);
  }
}
