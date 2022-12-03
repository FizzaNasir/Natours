const express = require('express');

const app= express();

const tourRouter = require('./Routes/TourRoutes');
const userRouter = require('./Routes/UserRoutes');

app.use(express.json()); //middleware: function that modify incomming req data 

//Our own middleware
app.use((req,res,next)=>{
    console.log("Heloo from the middleware")
    next();
})

app.use((req,res,next)=>{
    req.RequestTime=new Date().toISOString();
    next();
})
app.get('/', (req, res)=>{
    //  res.status(200).send('Hello from the server side!');
    //OR
    res.status(200).json({message: 'Hello from the server side!', app:'Natours'});
})

//ROUTES
app.use('/api/v1/tours', tourRouter); //here tourRoute is a sub-application having it's own routes. mounting a router on a route 
app.use('/api/v1/users', userRouter);

 //create a Router

// '/api/v1/tours/:id/:x/:y?'  // "?" means optional parameter" 

// app.get('/api/v1/tours/:id', (req, res)=>{ 
    
//     const id = parseInt(req.params.id); //to convert string number to int number
//     console.log(req.params); //variables in a url/route : mean variable
//     console.log(id);
//     if(id>tours.length){
//         return res.status(404).json({ 
//             status: 'failed',
//          })
//     }

//     const tour=tours.find(el=>el.id===id)
//     res.status(200).json({ 
//         status: 'success',
//         data: {
//             tour //ES6 property to write only name of the key if both key and value has same name
//         }
//      })
// })

// app.patch('/api/v1/tours/:id', (req, res)=>{ 
//     if(parseInt(req.params.id)>tours.length){
//         return res.status(404).json({ 
//             status: 'failed',
//          })
//     }
//     res.status(200).json({
//         status: 'success',
//         data:{
//             tour:'<updated tour here...>'
//         }
//     })
// }
// )

// app.post('/api/v1/tours', (req, res)=>{ //create a new tour
//      console.log(req.body); //req.body is accecible only due to middleware
//     const newId = tours[tours.length-1].id+1;
//     const newTour = Object.assign({id: newId}, req.body); //newobj by merging existing obj together
    
//     tours.push(newTour);
//     fs.writeFile(`${__dirname}/dev-data/data/tours-simple.json`, JSON.stringify(tours), (err)=>{
//     res.status(201).json({
//         status: 'success',
//         data:{
//             tour: newTour
//         }
//     })
//     })
// })
const port=3000;
app.listen(port, ()=>{
    console.log('App running on port 3000')
})
