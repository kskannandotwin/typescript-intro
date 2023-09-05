// string, number, boolean, null, undefined
var myName = null;
myName = 'test';
// arrays
var items = [5, 'luis'];
;
// objects
var account = {
    name: 'luis',
    balance: 10
};
var accounts;
var InvestmentAccount = /** @class */ (function () {
    function InvestmentAccount(name, balance) {
        this.name = name;
        this.balance = balance;
    }
    InvestmentAccount.prototype.widthdraw = function () {
    };
    return InvestmentAccount;
}());
