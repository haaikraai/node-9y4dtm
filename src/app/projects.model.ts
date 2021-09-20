export class Project {
  // code: string;
  // name: string;
  // status: 'Active' | 'Closed' | 'Dormat';
  // workersById: string[];
  // dateStart: Date;
  // dateEnd: Date;

  constructor(
    public code: string,
    public name: string,
    public status: 'Active' | 'Closed' | 'Dormat',
    public workersById: string[],
    public dateStart: Date,
    public dateEnd: Date) {}
}
