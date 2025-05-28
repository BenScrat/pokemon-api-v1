export interface Pokemon {
  name:string;
  types: [
    {
      slot:number;
      type:{
        name:string;
      }
    }
  ]
  sprites: {
    other: {
      dream_world:{
        front_default:string;
      }
    }
  }
}
