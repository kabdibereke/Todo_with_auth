import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { UserAuth } from '../../context/AuthContext';
import Spinner from '../Spinner'
const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false)
    const {createUser} = UserAuth();
    const navigate= useNavigate();
    const spinner = loading? <Spinner/>:null;
    const hundleSubmit = async (e)=>{
        e.preventDefault();
        setError('');
        setLoading(true)
        try {
            await createUser(email, password)
            navigate('/account')
            setLoading(false)
        }catch(e) {
            setLoading(false)
            setError(e.message)
            console.log(e.message)
        }finally {
            setLoading(false)
          }
    }
  return (
    <div className="flex justify-center items-center w-full h-screen bg-[#0D2960]">
        <div className="flex flex-col gap-3 justify-center items-center w-full sm:w-[450px] py-10 bg-white">
           <p className="text-2xl   text-teal-900">Sign Up</p>
           <p>{error}</p>
            <form  onSubmit={hundleSubmit} >
                <div className="flex flex-col gap-3">
                    <label className="text-xl  text-teal-900" >Email</label>
                    <input onChange={(e)=> setEmail(e.target.value)} type="Email" className="border-2 h-8 border-teal-900 border-solid rounded-md w-[280px] pl-2 focus:outline-none" required placeholder='Email'/>
                </div>

                <div className="mt-3 flex flex-col gap-3">
                    <label className="text-xl  text-teal-900" >Password</label>
                    <input onChange={(e)=> setPassword(e.target.value)} type="Password" className="border-2 h-8 border-teal-900 border-solid rounded-md w-[280px] pl-2 focus:outline-none" required placeholder='Password'/>
                </div>
                {loading? <p>{spinner}</p>:<button  className="mt-5 w-20 h-8 bg-teal-900 text-white rounded-md" >Sign Up</button>} 
                <p className=" mt-5 text-[16px]  text-teal-900" >Already have account? <Link to="/">Sign In</Link></p>
            </form>
        </div>
    </div>
  )
}

export default Signup