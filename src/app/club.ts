interface Team {
  id: number;
  name: string;
  founded: number;
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
  