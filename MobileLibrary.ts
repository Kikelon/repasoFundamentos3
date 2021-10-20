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
        this.totalPriceCalculation();
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
        this.totalPriceCalculation();
    }

    public getMobiles(): Mobile[]{
        return this.mobiles;
    }

    private setTotalPrice(totalPrice: number){
        this.totalPrice = totalPrice;
    }

    public getTotalPrice(): number{
        return this.totalPrice;
    }

    //Métodos

    private totalPriceCalculation(){
        this.totalPrice = 0;
        this.mobiles.forEach(element => {
            this.totalPrice += element.getPrice();
        });
   }
   public printLibrary(){
       (this.mobiles.length>1) ? console.log("This are all my mobiles") : console.log("This is my mobile");
       this.mobiles.forEach(element => {
            console.log("The characteristics of the mobile", element.getName(), "are:\n\t- Name:", element.getName(),
            "\n\t- Model:", element.getModel(),"\n\t- TradeMark:", element.getTradeMark(), "\n\t- SD Size(GB):", element.getSdSize(),
            "\n\t- Color:", element.getColor(), "\n\t- Is 5G?:", element.getIs5G(),"\n\t- Number of Cameras:", element.getCameraNumber(),"\n");
       });
       console.log("Price overall:", this.totalPrice,"\n")
   }

}