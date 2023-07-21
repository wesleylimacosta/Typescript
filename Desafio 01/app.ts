import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'
import { OtherAccount } from './class/OtherAccount'

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Wesley', 10)
const otherAccount: OtherAccount = new OtherAccount("Igor", 2023)
const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20)

//console.log(peopleAccount)

peopleAccount.deposit(100);
peopleAccount.withdraw(50);
peopleAccount.getLoan(5000);

otherAccount.deposit(100)
otherAccount.withdraw(50);

companyAccount.deposit(200)
companyAccount.withdraw(100)
companyAccount.getLoan();
//console.log(companyAccount)