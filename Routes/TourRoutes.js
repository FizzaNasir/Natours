const express=require('express')
const fs = require('fs');

const tours = JSON.parse(fs.readFileSync(`${__dirname}/../dev-data/data/tours-simple.json`))

 function getalltours(req, res){
    console.log(req.RequestTime)
    res.status(200).json({ 
       status: 'success',
       result: tours.length,
       data: {
           tours //ES6 property to write only name of the key if both key and value has same name
       }
    })
}


function createtour(req, res){
console.log(req.body); //req.body is accecible only due to middleware
const newId = tours[tours.length-1].id+1;
const newTour = Object.assign({id: newId}, req.body); //newobj by merging existing obj together

tours.push(newTour);
fs.writeFile(`${__dirname}/dev-data/data/tours-simple.json`, JSON.stringify(tours), (err)=>{
res.status(201).json({
    status: 'success',
    data:{
        tour: newTour
    }
})
})
}

function getTour(req, res){
const id = parseInt(req.params.id); //to convert string number to int number
console.log(req.params); //variables in a url/route : mean variable
console.log(id);
if(id>tours.length){
    return res.status(404).json({ 
        status: 'failed',
     })
}

const tour=tours.find(el=>el.id===id)
res.status(200).json({ 
    status: 'success',
    data: {
        tour //ES6 property to write only name of the key if both key and value has same name
    }
 })
}

function updateTour(req, res){
if(parseInt(req.params.id)>tours.length){
    return res.status(404).json({ 
        status: 'failed',
     })
}
res.status(200).json({
    status: 'success',
    data:{
        tour:'<updated tour here...>'
    }
})
}
const router =express.Router();
router.route('/').get(getalltours).post(createtour);
router.route('/:id').get(getTour).patch(updateTour);

module.exports = router; //to export one thing only