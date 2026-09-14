const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
    title : {
        type: String,
        required: true,
    },
        
    description : String,
    image:{
        filename:{
          type: String,
        default : "https://unsplash.com/photos/ornate-domed-ceiling-in-bucharest-A1-mvASloGI",  
        },
        
        url:{
             type: String,
            set:(v)=> v=== ""
         ? "https://unsplash.com/photos/ornate-domed-ceiling-in-bucharest-A1-mvASloGI"
        : v,    
        },
    },    
    price : Number,
    location: String,
    country: String,

});

const Listing = mongoose.model("listing",listingSchema);
module.exports = Listing;