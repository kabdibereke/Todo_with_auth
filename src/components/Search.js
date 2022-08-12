import {IoIosSearch} from 'react-icons/io'

const Search = ({setSearchText}) => {
  return (
        <div className='w-[280px] sm:w-[450px] pl-3 border-2 border-teal-900 border-solid rounded-md mt-3 flex  justify-start items-center flex-wrap'>
            <IoIosSearch size="30px"/>
            <input onChange={(e)=> setSearchText(e.target.value)} className='w-4/5 pl-2 focus:outline-none ' type="text" placeholder='Search TODO'/>
        </div>
  )
}

export default Search