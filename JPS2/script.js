function Customer(id, firstName, lastName, email, mobile, gender, address, dateOfBirth, city, state, country) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.mobile = mobile;
    this.gender = gender;
    this.address = address;
    this.dateOfBirth = dateOfBirth;
    this.city = city;
    this.state = state;
    this.country = country;
}

//  Adding the showDetails method to the Customer object prototype
Customer.prototype.showDetails = function() {
    // Displaying the details in the browser
    document.write("<h2>============================================</h2>");
    document.write("<h2>Creating JS object using Object constructor</h2>");
    document.write("<h2>============================================</h2>");
    document.write("<h2>Customer Details</h2>");
    document.write("<h2>============================================</h2>");
    document.write("<h4>Customer ID      " + "&nbsp;".repeat(20) + "    :" + this.id + "</h4>");
    document.write("<h4>Customer FirstName " + "&nbsp;".repeat(6) + "  :" + this.firstName + "</h4>");
    document.write("<h4>Customer LastName   " + "&nbsp;".repeat(6) + " :" + this.lastName + "</h4>");
    document.write("<h4>Customer Email     " + "&nbsp;".repeat(13) + "  :" + this.email + "</h4>");
    document.write("<h4>Customer Mobile    " + "&nbsp;".repeat(11) + "  :" + this.mobile + "</h4>");
    document.write("<h4>Customer Gender    " + "&nbsp;".repeat(10) + " :" + this.gender + "</h4>");
    document.write("<h4>Customer Address   " + "&nbsp;".repeat(9) + " :" + this.address + "</h4>");
    document.write("<h4>Customer DateOfBirth" + "&nbsp;".repeat(3) + " :" + this.dateOfBirth + "</h4>");
    document.write("<h4>Customer City        " + "&nbsp;".repeat(17) + ":" + this.city + "</h4>");
    document.write("<h4>Customer State      " + "&nbsp;".repeat(15) + " :" + this.state + "</h4>");
    document.write("<h4>Customer Country    " + "&nbsp;".repeat(9) + " :" + this.country + "</h4>");
    document.write("<h2>============================================</h2>");

    // Displaying the details in the console
    console.log("=====================================================");
    console.log("Creating JS object using Object constructor");
    console.log("=====================================================");
    console.log("Customer Details");
    console.log("=====================================================");
    console.log("Customer ID", "                         ", ":" + this.id);
    console.log("Customer FirstName", "                  ", ":" + this.firstName);
    console.log("Customer LastName", "                   ", ":" + this.lastName)
    console.log("Customer Email", "                      ", ":" + this.email);
    console.log("Customer Mobile", "                     ", ":" + this.mobile);
    console.log("Customer Gender", "                     ", ":" + this.gender);
    console.log("Customer Address", "                    ", ":" + this.address);
    console.log("Customer Date of Birth", "              ", ":" + this.dateOfBirth);
    console.log("Customer City", "                       ", ":" + this.city);
    console.log("Customer State", "                      ", ":" + this.state);
    console.log("Customer Country", "                    ", ":" + this.country);
    console.log("=====================================================");
};

// Instantiating the Customer object
var customer = new Customer(
    "001",
    "Pradeep",
    "kumar",
    "shivakumar@example.com",
    "9483846947",
    "Male",
    "123 Main St",
    "1990-01-01",
    "Bapatla",
    "Cherukupalli",
    "India"
);

//Calling the showDetails method of the Customer object to display the details
customer.showDetails();