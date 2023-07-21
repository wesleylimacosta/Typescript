import { DioAccount } from "./DioAccount"

export class OtherAccount extends DioAccount {

    
  constructor(name: string, accountNumber: number){
    super(name, accountNumber)
  }

  deposit = (value:number) =>{
    if(this.validateStatus()){
        this.balance += value + 10;
        console.log(`Você depositou R$ ${value} com sucesso! Saldo atual: ${this.balance} \n`)
    }
  }
}