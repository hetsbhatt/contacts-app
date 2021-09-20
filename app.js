const express = require("express");
const bodyParser = require("body-parser");

let contactsArray = [];
let newContact = [];
// let photos = [];

const app = express();
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));



app.get("/", (req, res) => {

    res.render("contacts", { contactArr: contactsArray });
});

app.post("/", (req, res) => {
    //const newPhoto = req.body.photo;
    const newFirstName = req.body.fName;
    const newLastName = req.body.lName;
    const newEmail = req.body.email;
    const newNumber = req.body.phone;
    //photo.push(newPhoto);
    newContact.push(newFirstName, newLastName, newEmail, newNumber);
    contactsArray.push(newContact);
    res.redirect("/");
    //console.log(newPhoto);


})

app.listen(process.env.PORT || 3000, () => {
    console.log("Server started on port 3000");
});