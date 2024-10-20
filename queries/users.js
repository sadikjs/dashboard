import { Register } from "../model/registration"
export async function getRegister(user){
     return await Register.create(user) 
}
