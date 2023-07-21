export abstract class DioAccount {
  private name: string
  private readonly accountNumber: number
  balance: number = 0
  private status: boolean = true

  constructor(name: string, accountNumber: number){
    this.name = name
    this.accountNumber = accountNumber
  }

  setName = (name: string): void => {
    this.name = name
    console.log('Nome alterado com sucesso! \n')
  }

  getName = (): string => {
    return this.name
  }

  deposit = (value:number): void => {
    if(this.validateStatus()){
      this.balance += value;
      console.log(`Deposito de R$ ${value} efetuado com sucesso  (Saldo atual ${this.balance}) \n`)
    }
  }

  withdraw = (value:number): void => {
    if(this.validateStatus()){
      if(value <= this.balance){
        this.balance -= value;
        console.log(`Voce sacou R$ ${value} com sucesso (Saldo atual ${this.balance}) \n`);
      }
      else{
        console.log('Não foi possivel concluir o saque (Saldo insuficiente) \n');
      }
    }
    else{
      console.log('Somente contas ativas podem realizar saques \n')
    }
  }

  getBalance = (): void => {
    console.log(this.balance)
  }

  protected validateStatus = (): boolean => {
    if (this.status) {
      return this.status
    }

    throw new Error('Conta inválida')
  }
}
