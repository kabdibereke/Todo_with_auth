import { UserAuth } from '../context/AuthContext'

import {  useNavigate } from 'react-router-dom'

const Logout = () => {
    const {logout} = UserAuth()
    const navigate = useNavigate()
    const handleLogOut = async()=> {
        try {
          await logout()
          navigate('/')
        }catch (e) {
          console.log(e.message)
        }
    }
  return (
    <button onClick={handleLogOut} className="w-20 h-8 bg-teal-900 text-white rounded-md"> Log Out</button>
  )
}

export default Logout