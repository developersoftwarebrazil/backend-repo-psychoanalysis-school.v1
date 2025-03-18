export class Course {
  constructor(
    public readonly id: string,
    public title: string,
    public description: string,
    public createdAt: Date = new Date(),
  ) {}

  updateTitle(title: string) {
    this.title = title;
  }

  updateDescription(description: string) {
    this.description = description;
  }
}
