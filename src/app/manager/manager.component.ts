import { Component, OnInit } from '@angular/core';
import { Project } from '../projects.model';
import { ProjectsService } from '../projects.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.css']
})
export class ManagerComponent implements OnInit {

  loadedProjects: Project[] = [];
  colheaders: string[] = ['','Wk1','Wk2','Wk3','Wk4','Wk5']

  constructor(private projectSrv: ProjectsService, private UserSrv: UserService) { }

  ngOnInit(): void {
    this.loadedProjects = this.projectSrv.getProjects();
    console.log(this.loadedProjects);
  }

}
