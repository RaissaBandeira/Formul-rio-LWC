import{LightningElement, track} from "lwc";

export default class App extends LightningElement{
	
	@track nome1;
	@track sobrenome1;
  resultado;

  name(event){
    this.nome1 = event.target.value.toUpperCase();
  }

  lname(event){
    this.sobrenome1 = event.target.value.toUpperCase();
  }

	junta(){
	  this.resultado = this.nome1 +" "+ this.sobrenome1;
	}
}