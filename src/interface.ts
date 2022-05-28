export interface JobInterface {
    id?:  number,
    company?:  string,
    logo?:  string,
    new?:  boolean,
    featured?:  boolean,
    position?:  string,
    role?:  string,
    level?:  string,
    postedAt?:  string,
    contract?:  string,
    location?:  string,
    languages?:  string[],
    tools?:  string[]
}

export interface Items{
    id:number,
    name:string
  }

export interface Users {
    userId: number,
    id: number,
    title: string
  }