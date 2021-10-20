import { Mobile } from "./Mobile";

export class MobileLibrary{

    // Atributos

    private name : string;
    private location : string;
    private mobiles : Mobile[];
    private totalPrice : number;

    // Constructor

    public constructor(name: string, location: string, mobiles: Mobile[]){
        this.name = name;
        this.location = location;
        this.mobiles = mobiles;
    }

    // Settters y Getters

    public setName(name: string){
        this.name = name;
    }

    public getName(): string{
        return this.name;
    }

    public setLocation(location: string){
        this.location = location;
    }

    public getLocation(): string{
        return this.location;
    }

    public setMobiles(mobiles: Mobile[]){
        this.mobiles = mobiles;
    }

    public getMobiles(): Mobile[]{
        return this.mobiles;
    }

    public setTotalPrice(totalPrice: number){
        this.totalPrice = totalPrice;
    }

    public getTotalPrice(): number{
        return this.totalPrice;
    }

    //Métodos

    public totalPriceCalculation(){
        this.totalPrice = 0;
        this.mobiles.forEach(element => {
            this.totalPrice += element.getPrice();
        });
   }

}