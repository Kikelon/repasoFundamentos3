export class Mobile{

    // Propiedades

    private name : string;
    private model: string;
    private tradeMark : string;
    private sdSize : number;
    private color : string;
    private is5G : boolean;
    private cameraNumber : number;
    private price : number;

    //  Constrructor

    constructor(name: string, model: string, tradeMark: string, sdSize: number, color: string, is5G: boolean, cameraNumber: number, price: number){
        this.name = name;
        this.model= model;
        this.tradeMark = tradeMark;
        this.sdSize = sdSize;
        this.color = color;
        this.is5G = is5G;
        this.cameraNumber = cameraNumber;
        this.price = price;
           
    };

    // Métodos

    public setName(name: string){
        this.name = name;
    };

    public getName(): string {
        return this.name;
    };

    public setModel(model: string){
        this.model = model;
    };

    public getModel(): string {
        return this.model;
    };

    public setTradeMark(tradeMark: string){
        this.tradeMark = tradeMark;
    };

    public getTradeMark (): string{
        return this.tradeMark;
    };

    public setSdSize(sdSize: number){
        this.sdSize = sdSize;
    };

    public getSdSize(): number{
        return this.sdSize;
    };

    public setColor(color: string){
        this.color = color;
    };

    public getColor(): string {
        return this.color;
    };

    public setIs5G(is5G: boolean){
        this.is5G = is5G;
    }

    public getIs5G():boolean{
        return this.is5G;
    }

    public setCameraNumber(cameraNumber: number){
        this.cameraNumber = cameraNumber;
    };

    public getCameraNumber(): number{
        return this.cameraNumber;
    }

    public setPrice(price: number){
        this.price = price;
    }

    public getPrice(): number{
        return this.price;
    }

    public printAll(){
        console.log("The characteristics of the mobile", this.name, "are:\n\t- Name:", this.name,
        "\n\t- Model:", this.model,"\n\t- TradeMark:", this.tradeMark, "\n\t- SD Size(GB):", this.sdSize,
        "\n\t- Color:", this.color, "\n\t- Is 5G?:", this.is5G,"\n\t- Number of Cameras:", this.cameraNumber,"\n");
    }

};