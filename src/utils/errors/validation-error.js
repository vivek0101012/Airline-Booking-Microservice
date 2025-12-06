const {statusCodes, StatusCodes}= require('http-status-codes');
const { Model } = require('sequelize');

class validationError extends Error {

    constructor(erorr){
        super();
        let explanations=[];
        erorr.errors.forEach(err => {
            explanations.push(err.message);
            
        });
        statusCode= StatusCodes.BAD_REQUEST
    
        this.name='validationError';
        this.message="Not able to validate the data sent in the reuqests ";
        this.explanations=explanations;
        this.statusCode= StatusCodes.BAD_REQUEST ;
    }

}

module.exports= validationError;