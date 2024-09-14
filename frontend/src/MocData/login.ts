export interface IProfile {
    name: string;
    username: string;
    age: string;
    password:string;
    key:string;
    //lägg til mer om du vill
}
// Den här listan kommer att användas som en MOCK för att testa Login funktionalliteten 
export const profiles: IProfile[] = [
    {name:'George', username:'George123', age:'20', password:'0000', key:'1'},
    {name:'Amanda', username:'Amanda123', age:'21', password:'0000', key:'2'},
    {name:'Calle', username:'Calle123', age:'22', password:'0000', key:'3'},
    {name:'Deividas', username:'Deividas123', age:'23', password:'0000', key:'4'},
]; 