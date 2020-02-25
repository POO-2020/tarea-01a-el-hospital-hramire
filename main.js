import Fecha from "./fecha.js";
import Tiempo from "./tiempo.js";

class Main {
  constructor(tiempo,fecha) {
    this.tiempo = new Tiempo(9, 45, "pm");
    this.fecha = new Fecha(5, 2, 2009);
    
  }
  getTiempo() {
    console.log(this.tiempo.getFormato24());
  }
  getFecha() {
    console.log(this.fecha.getAños());
    console.log(this.fecha.getMeses());
    console.log(this.fecha.getSemanas());
    console.log(this.fecha.getDias());
    console.log(this.fecha.getDiaFecha());
    console.log(this.fecha.getFecha());
  }
  
}
let app = new Main();
app.getTiempo();
app.getFecha();

