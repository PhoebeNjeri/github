export class User {
  constructor(
    public username:string, public avatar_url:string, public newuser :string,
    public followers:number, public following:number, public public_repos:number,
    public html_url:string, public completeDate:Date
  ) {}
}