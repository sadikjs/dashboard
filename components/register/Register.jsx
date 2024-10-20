import {registrationAction} from '@/action/register'
const Register = async()=>{
    return(
        <div>
            <form action={registrationAction}
            className="flex flex-col border-2 border-slate-600 p-5 justify-left"
            >
                <div className="p-2 ">
                <label htmlFor="fullName">Full Name : </label>
                <input type="text" id="fullName" name="fullName" placeholder="enter name here" 
                 required/>
                </div>
                <label htmlFor="mobileNo">Mobile No : </label>
                <input type="text" id="mobileNo" name="mobileNo" placeholder="enter mobile no" 
                required />
                <label htmlFor="birthDay">Birth Day : </label>
                <input type="date" id="birthDay" name="birthDay" placeholder="enter birthday " 
                 required />
                <label htmlFor="email">Email : </label>
                <input type="email" id="email" name="email" placeholder="enter email address" 
                 required />
                <label htmlFor="address">Address: </label>
                <textarea type="text" id="address" name="address" row="3" col="30" 
                required />
                <button type="submit">submit</button>
            </form>
        </div>
    );
} 

export default Register