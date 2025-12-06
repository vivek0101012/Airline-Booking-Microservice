const {statusCodes, StatusCodes} = require("http-status-codes")

class ServiceError extends Error {
    
    constructor(
        message,
        explanatiomn=[],
        statuscode= StatusCodes.INTERNAL_SERVER_ERROR
    ){
        
        this.name='serviceError';
        this.message=message;
        this.explanations=explanations
        this.statusCode=statusCode
    
    }
}