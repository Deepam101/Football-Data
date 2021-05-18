interface Team {
  id: number;
  name: string;
  founded: string;
  national: boolean;
  country: string;
  logo: string;
}
interface Venue{
  id: number
  name	:string
  address	:string
  city	:string
  capacity :number,
  surface :string
  image: string	
}
export interface Club{
  team: Team,
  venue: Venue
}

export interface Result{
  get: string,
  parameters: any,
  errors: any,
  results: number,
  response: Club[]
}

export interface Statistics{
  get: string,
  parameters: any,
  errors: any,
  results: number,
  response: Stats
}

export interface Stats{
  league: {
    id	:number
    name	:string
    country	:string
    logo	:string
    flag	:string
    season	:number
  },
  team: any,
  fixtures: {
    played: any,
    wins:{
      home: number,
      away: number,
      total: number
    },
    draws:{
      home: number,
      away: number,
      total: number
    },
    loses:{
      home: number,
      away: number,
      total: number
    },
  },
  lineups: [
    {formation: string}
  ]
  goals: {
    against: {
      total:{
        total: string
      }
    },
    for: {
      total:{
        total: string
      }
    }
  }
}
export interface Players{
  player:{
    name: string,
    photo: string,
    nationality: string
  }
}
export interface PlayerFetch{
  get: string,
  parameters: any,
  errors: any,
  results: number,
  response: Players[]
}