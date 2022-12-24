const mongoose = require('mongoose');

const tourschema = new mongoose.Schema({ 
    name:{
        type: String,
        required: [true, 'A tour must have a name'],
        unique: true
    },
    
    rating: {
         type: Number,
         default: 4.5
    },
    
    price: {
     type: Number,
     required: [true, 'A tour must have a price']
    }} 
    )
    
     //modal out of above schema
    const tour = mongoose.model('Tour', tourschema) //Tour is the anme of model it can be anything
    module.exports = tour;
 
    //create new document out of Tour modal or Tour constructor
    //testtour is the instance of tour model containing variety of functions
    
    // const testtour = new tour({
    //     name: 'The new journey',
    //     rating: 4.2,
    //     price: 608
    // })   
    
    // //it saves the data in a database. This method returns a promise which we can later consume
    // testtour.save().then(doc =>{
    //     console.log(doc);
    // }).catch(err => {
    //     console.log("Error!: ", err);
    // }) 
    