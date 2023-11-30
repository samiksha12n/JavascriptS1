function Book(accountnumber, name, balance, mobile, pan) {
    this.id = id;
    this.name = name;
    this.author = author;
    this.price = price;

}
Book.prototype.showDetails = function() {
    // Displaying the details in the browser
    document.write("<h2>============================================</h2>");
    document.write("<h2>Creating JS object using Object Protype</h2>");
    document.write("<h2>============================================</h2>");
    document.write("<h2>Product Details</h2>");
    document.write("<h2>============================================</h2>");
    document.write("<h4>id     " + "&nbsp;".repeat(20) + "    :" + this.id + "</h4>");
    document.write("<h4>name " + "&nbsp;".repeat(6) + "  :" + this.name + "</h4>");
    document.write("<h4>author  " + "&nbsp;".repeat(6) + " :" + this.author + "</h4>");
    document.write("<h5>price " + "&nbsp;".repeat(6) + " :" + this.price + "</h5>");
    console.log("=====================================================");
    console.log("Creating JS object using Object Prototype");
    console.log("=====================================================");
    console.log("Customer Details");
    console.log("=====================================================");
    console.log("id", "                         ", ":" + this.id);
    console.log("name", "                  ", ":" + this.name);
    console.log("author", "                   ", ":" + this.author);
    console.log("price", "                     ", ":" + this.price)
    console.log("=====================================================");
};


var Book = new Book(
    "13455",
    "Mrityunjay",
    "Shivaji Sawant",
    "4350.55",


);

//Calling the showDetails method of the Customer object to display the details
Book.showDetails();