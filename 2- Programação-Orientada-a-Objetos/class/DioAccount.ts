export abstract class DioAccount {
   private name:string
   private accountNumber: Number
   private balance: number = 0

    constructor(name:string, accountNumber:number){
        this.name = name;
        this.accountNumber = accountNumber;
    }

   public setName = (name:string): void => {
        this.name = name;
       console.log("Nome alterado com sucesso")
    }

   public deposit = () : void => {
        console.log("Você depositou");
    }

   public withdraw = () : void => {
        console.log("Você sacou");
    }

   public getBalance = () : void  => {
        console.log(this.balance);
    }
}