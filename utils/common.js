import { error } from "console";


export const authenticate = (req,res,next)=>{
    if(true){
        console.log("Authentication success");
        next();
    }else{
        res.send({status:400,message:"Imvalid Authentication"})
    }
}