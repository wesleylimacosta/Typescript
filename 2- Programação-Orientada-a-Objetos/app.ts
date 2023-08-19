import { CompanyAccount } from "./class/CompanyAccount";
import { PeopleAccount } from "./class/PeopleAccount";


const peopleAccount: PeopleAccount = new PeopleAccount(1,"Wesley",442);
//peopleAccount.deposit();
peopleAccount.setName("Wesley Costa");


const companyAccount: CompanyAccount = new CompanyAccount('DIO',443);
//companyAccount.deposit();
