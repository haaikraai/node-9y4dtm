import { Injectable, OnInit } from '@angular/core';
import { Project } from './projects.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  private tempuserIds!: string[];

  private projects: Project[] =
  [
    {
      code: 'p1',
      name: 'job1',
      status: 'Active',
      dateStart: new Date('2021-01-03'),
      dateEnd: new Date('2021-05-23'),
      workersById: []
    },
    {
      code: 'p2',
      name: 'job2',
      status: 'Closed',
      dateStart: new Date('2021-02-05'),
      dateEnd: new Date('2021-08-23'),
      workersById: []
    },
    {
      code: 'p3',
      name: 'jobabity 3',
      status: 'Dormat',
      dateStart: new Date('2021-02-05'),
      dateEnd: new Date('2021-08-23'),
      workersById: []
    },
    {
      code: 'p4',
      name: 'job 4 4',
      status: 'Active',
      dateStart: new Date('2021-02-05'),
      dateEnd: new Date('2021-08-23'),
      workersById: []
    }
  ];

  constructor() {}

  onInit() {
  }

  setUserNames(userIds: string[]) {
    this.tempuserIds = userIds;
  }

  // public get projects() {
  //   return this.projects.slice();
  // }

  getProjects(): Project[] {
    return [...this.projects];
  }

  getProjectById(id: string) {
    let foundproject = this.projects.find((project) => project.code === id);
    if (foundproject) { return foundproject}
    else {
      foundproject = new Project('p0', 'none', 'Closed', [''], new Date(), new Date())
      return foundproject;
    }
  }

  addProject(project: Project) {
      this.projects.push(project);
    }

  addUsers(code: string, userIds: string[]) {
    let foundproject = this.getProjectById(code);
    foundproject.workersById.push(...userIds);
  }
}
