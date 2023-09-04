// string, number, boolean, null, undefined
let myName: string | null = null;
myName = 'test';

// arrays
let items = [5, 'luis'];

interface IAccount {
    name: string,
    balance: number,
    status?: string,
    deposit?: () => void
};

// objects
const account: IAccount = {
    name: 'luis',
    balance: 10
};

let accounts: IAccount[];