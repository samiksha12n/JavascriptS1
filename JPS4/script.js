function Account(accountnumber, name, balance, mobile, pan) {
    this.accountnumber = accountnumber;
    this.name = name;
    this.balance = balance;
    this.mobile = mobile;
    this.pan = pan;
}
Account.prototype.showDetails = function() {
    // Displaying the details in the browser
    document.write("<h2>============================================</h2>");
    document.write("<h2>Creating JS object using Object Protype</h2>");
    document.write("<h2>============================================</h2>");
    document.write("<h2>Product Details</h2>");
    document.write("<h2>============================================</h2>");
    document.write("<h4>accountnumber     " + "&nbsp;".repeat(20) + "    :" + this.accountnumber + "</h4>");
    document.write("<h4>name " + "&nbsp;".repeat(6) + "  :" + this.name + "</h4>");
    document.write("<h4>balance  " + "&nbsp;".repeat(6) + " :" + this.balance + "</h4>");
    document.write("<h5>mobile " + "&nbsp;".repeat(6) + " :" + this.mobile + "</h5>");
    document.write("<h6>pan  " + "&nbsp;".repeat(6) + " :" + this.pan + "</h6>");
    console.log("=====================================================");
    console.log("Creating JS object using Object Prototype");
    console.log("=====================================================");
    console.log("Customer Details");
    console.log("=====================================================");
    console.log("accountnumber", "                         ", ":" + this.accountnumber);
    console.log("name", "                  ", ":" + this.name);
    console.log("balance", "                   ", ":" + this.balance);
    console.log("mobile", "                     ", ":" + this.mobile)
    console.log("pan", "                          ", ":" + this.pan)
    console.log("=====================================================");
};


var Account = new Account(
    "1023",
    "Pradeep Chinchole",
    "45888.99",
    "9158652627",
    "AMXPC895D"

);

//Calling the showDetails method of the Customer object to display the details
Account.showDetails();