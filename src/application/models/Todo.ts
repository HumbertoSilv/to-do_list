export class TodoClass {
  public id: string

  public content: string

  public done?: boolean

  constructor(data: TodoClass) {
    this.id = data.id
    this.content = data.content
    this.done = false
  }

}
