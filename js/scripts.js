function BankAccount(custName, initDeposit) {
  this.custName = custName;
  this.initDeposit= initDeposit;
  this.balance = [];
}

function transactionDeposit(deposit) {
  this.deposit = deposit;
}

function transactionWithdrawal(withdrawal) {
  this.withdrawal = withdrawal;
}



$(document).ready(function() {

  $("form#bankAccount").submit(function(event) {
    event.preventDefault();

    var inputtedCustName = $("input#new-cust-name").val();
    var inputtedInitDeposit = parseInt($("input#new-account-balance").val());
    var newBankAccount = new BankAccount(inputtedCustName, inputtedInitDeposit);
    debugger;
    newBankAccount.balance.push(newBankAccount);


        $("#customer").append("<h2><span class='contact'>" + inputtedCustName + "s" + "</span></h2>");
        $("ul#balance").append("<li><span class='contact'>" + inputtedInitDeposit + "</span></li>");
  });

  $("form#deposit").submit(function(event) {
    event.preventDefault();

    var inputtedDeposit = parseInt($("input.new-deposit").val());
    var newDeposit = new Deposit(inputtedDeposit);
  });

  $("form#withdrawal").submit(function(event) {
    event.preventDefault();

    var inputtedWithdrawal = parseInt($("input.new-withdrawal").val());
    var newWithdrawal = new Withdrawal(inputtedWithdrawal);
  });

});





//   $(".newbalance").each(function() {
//     var initialBalance = parseInt($(this).find("input.new-balance").val());
//     var inputtedDeposit = parseInt($(this).find("input.new-deposit").val());
//     var inputtedWithdrawal = parseInt($(this).find("input.new-withdrawal").val());
//     var newTransaction = new transaction(initialBalance, inputtedDeposit, inputtedWithdrawal)
//
//
//       $("ul#balance").append("<li><span class='contact'>" + newTransaction.balance() + "</span></li>");
//   });
//
//
// });
// });
