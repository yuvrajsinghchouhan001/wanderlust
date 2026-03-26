const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
    title: {
        type:String,
        required:true,
    },
    description: String,
    image: {
  filename: {
    type: String,
    default: "listingimage",
  },
    url: {
        type:String,
        default:"https://unsplash.com/photos/kitchen-and-dining-area-with-wooden-cabinets-and-table-5UbhBxb_pdA",//if user does not enter any image 
        set: (v) =>
            v === ""
         ? "https://unsplash.com/photos/kitchen-and-dining-area-with-wooden-cabinets-and-table-5UbhBxb_pdA": v, 
         //if user enter empty image then 
        //this default image will appear and if user enters the image then than image will appear
    },
},
    price: Number,
    location: String,
    country: String,
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;
