function product(ProcductId, ProductName, ProductPrice) {
    this.ProductId = ProcductId;
    this.ProductName = ProcductId;
    this.ProductPrice = ProductPrice;
}
product.prototype.showDetails = function() {
    // Displaying the details in the browser
    document.write("<h2>============================================</h2>");
    document.write("<h2>Creating JS object using Object Protype</h2>");
    document.write("<h2>============================================</h2>");
    document.write("<h2>Product Details</h2>");
    document.write("<h2>============================================</h2>");
    document.write("<h4>ProductID      " + "&nbsp;".repeat(20) + "    :" + this.ProductId + "</h4>");
    document.write("<h4>ProductName " + "&nbsp;".repeat(6) + "  :" + this.ProductName + "</h4>");
    document.write("<h4>ProductPrice  " + "&nbsp;".repeat(6) + " :" + this.ProductPrice + "</h4>");
    console.log("=====================================================");
    console.log("Creating JS object using Object Prototype");
    console.log("=====================================================");
    console.log("Customer Details");
    console.log("=====================================================");
    console.log("ProcductID", "                         ", ":" + this.ProcductId);
    console.log("ProductName", "                  ", ":" + this.ProductName);
    console.log("ProductPrice", "                   ", ":" + this.ProductPrice);
    console.log("=====================================================");
};


var product = new product(
    "101",
    "Laptop",
    "45000",

);

//Calling the showDetails method of the Customer object to display the details
product.showDetails();