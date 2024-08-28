import React from 'react'

const AddList = () => {
  return (
    <div className='AddList'>
        <div className="inputBtn">
            <input type="text"
            placeholder='Add the Task'
             />
            <button>Add</button>
        </div>
         <div className='sideBar'>
             All
         </div>
    </div>
  )
}

export default AddList