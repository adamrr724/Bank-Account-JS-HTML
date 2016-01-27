describe('BankAccount', function() {
  it("creates bank account with customer's name", function() {
    var testBankAccount = new BankAccount("John Doe", 500);
    expect(testBankAccount.custName).to.equal("John Doe");
    expect(testBankAccount.initDeposit).to.equal(500);
  });
});
// describe('transaction', function() {
//   it("adds or subtracts from the initial deposit", function() {
//     var testTransaction = new transaction(5000, 5, 10);
//     expect(testTransaction.initBalance).to.equal(5000);
//     expect(testTransaction.deposit).to.equal(5);
//     expect(testTransaction.withdrawal).to.equal(10);
//   });
//   it("adds the Updated Balance method to the balance", function() {
//     var testTransaction = new transaction(5000, 5, 10);
//     expect(testTransaction.balance()).to.equal(4995);
//   });
// });
