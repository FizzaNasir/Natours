const Tour = require('./../Models/tourmodel')
//const tours = JSON.parse(fs.readFileSync(`${__dirname}/../dev-data/data/tours-simple.json`))

exports.getalltours= async (req, res)=>{
    try{
        const tours = await Tour.find();

        res.status(200).json({ 
           status: 'success',
           results: tours.length,
           data: {
               tours //ES6 property to write only name of the key if both key and value has same name
           }
        })
    }
catch(err){
 res.status(404).json({
    status: 'fail',
    message: err
 })
}
}

exports.createtour= async (req, res)=>{
const newTour = await Tour.create(req.body)
try{

    res.status(201).json({
        status: 'success',
        data:{
            tour: newTour
        }
    })
}
 catch(err){
    //400 stands for bad request
    res.status(400).json({
        status: 'failed',
        message: err
    }) 
}
}

exports.getTour= async (req, res)=>{
try{
    const tour = await Tour.findById(req.params.id);
    //Tour.findOne({_id: req.params.id}) => the way we did in mongo shell
    res.status(200).json({ 
        status: 'success',
        data:{
            tour
        }
     })
}
catch(err){
     res.status(404).json({ 
                status: 'failed',
                message: err
             })
        }
}

exports.updateTour= async (req, res)=>{
try{
    const tour = await Tour.findByIdAndUpdate(req.params.id, req.body, {
        new: true, //new updated doc would be the one that would return
        runValidators: true
    })
    res.status(200).json({
        status: 'success',
        data:{
            tour
        }
    })

}catch(err){
    res.status(404).json({
        status: 'failed',
        message: err
    })
}
}

exports.deleteTour= async (req, res)=>{
    try{
        const tour = await Tour.findByIdAndDelete(req.params.id)
        res.status(200).json({
            status: 'success',
            data:null
        })   
    }catch(err){
        res.status(404).json({
            status: 'failed',
            message: err
        })
    }
    }