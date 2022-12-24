const express=require('express')
const tourController=require('./../Controller/tourController'); //it contains all the functions
const router =express.Router();

// router.param('id', tourController.checkID)

router
.route('/')
.get(tourController.getalltours)
.post(tourController.createtour);

router
  .route('/:id')
  .get(tourController.getTour)
  .patch(tourController.updateTour)
  .delete(tourController.deleteTour);
module.exports = router; //to export one thing only