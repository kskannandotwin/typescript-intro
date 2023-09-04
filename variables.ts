// string, number, boolean, null, undefined
let myName: string | null = null;
myName = 'test';

// arrays
let items = [5, 'luis'];

// objects
const account: {
    name: string,
    balance: number,
    status?: string
} = {
    name: 'luis',
    balance: 10
};

let accounts: {}[];