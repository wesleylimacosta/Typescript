import { DioAccount } from "./DioAccount"

export class PeopleAccount extends DioAccount {
  doc_id: number

  constructor(doc_id: number, name: string, accountNumber: number){
    super(name, accountNumber)
    this.doc_id = doc_id
  }

  getLoan = (valueLoan:number): void => {

    if(this.validateStatus()){
      
      this.balance += valueLoan;
      console.log(`Voce pegou um empréstimo (Saldo atual: ${this.balance}) \n`)
    }
  }

}