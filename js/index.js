
const a = 19;

try{
    if(a < 20){
        throw new validationError("Salary not valid");
    }
}
catch(error){
    console.log(error.message);
}