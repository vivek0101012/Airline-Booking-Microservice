const {statusCodes, StatusCodes} = require("http-status-codes")

class ServiceError extends Error {
    
    constructor(
        message,
        explanations=[],
        statusCode= StatusCodes.INTERNAL_SERVER_ERROR
    ){
        super()
        this.name='serviceError';
        this.message=message;
        this.explanations=explanations
        this.statusCode=statusCode
    
    }
}
module.exports=ServiceError