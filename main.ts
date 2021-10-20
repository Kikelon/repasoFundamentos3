import { Mobile } from "./Mobile";
import { MobileLibrary } from "./MobileLibrary";

let Nokia3210 = new Mobile("Nokia3210", "3210", "Nokia", 128, "Black", false, 1, 200);
let iPhone3G = new Mobile("iPhone3G", "iPhone", "Apple", 128, "White", false, 2, 350);
let SamsungGalaxy10 = new Mobile("Samsung Galaxy 10", "Galaxy 10", "Samsung", 256, "Grey", true, 4, 800);
let SamsungNote20 = new Mobile("Samsung Galaxy Note 20", "Galaxy Note 20", "Samsung", 512, "Grey", true, 4, 1200);
let misMobiles : Mobile[] = [Nokia3210, iPhone3G, SamsungGalaxy10, SamsungNote20];

let libreria = new MobileLibrary("Pepe", "Granada", misMobiles);

console.log(libreria.getName());
console.log(libreria.getLocation());
libreria.printLibrary();

libreria.setName("Juan");
libreria.setLocation("Madrid");
misMobiles = [SamsungNote20];
libreria.setMobiles(misMobiles);
console.log(libreria.getName());
console.log(libreria.getLocation());
libreria.printLibrary();
misMobiles = [SamsungNote20, Nokia3210];
libreria.setMobiles(misMobiles);
libreria.printLibrary();
