export const errorHandlr=(ststusCode,message)=>{
    const error=new Error();
        error.status=ststusCode;
        error.message=message;
        return error;
    
}