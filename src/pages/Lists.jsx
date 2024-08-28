import React from 'react'
import { FaTrashCan } from "react-icons/fa6";
import '../App.css'

const Lists = (items, handleCheck, handleDelete, completed, inCompleted, filterCompleted, filterIncompleted) => {
  return (
    <div className='Lists'>
     {!completed && !inCompleted ?
    <ul>
           {items.map((item) =>(

               <li key={item.id}>
                   <div className='task'>
                          <input type='checkbox'
                          onChange={(e) =>handleCheck(item.id)}
                          checked={item.checked}
                          />
      
                          <label className={item.checked ? "active" : ''}>{item.item}</label>
                      </div>
                      <button onClick={(e) =>handleDelete(item.id)}><FaTrashCan />
                      </button>
              </li> 
              ))}   
    </ul> :  '' 
}

   {completed && !inCompleted ? 
   <ul>
   {filterCompleted.map((item) =>(
       <li key={item.id}>
           <div className='task'>
                  <input type='checkbox'
                  onChange={(e) =>handleCheck(item.id)}
                  checked={item.checked}
                  />

                  <label className={item.checked ? "active" : ''}>{item.item}</label>
              </div>
              <button onClick={(e) =>handleDelete(item.id)}><FaTrashCan />
              </button>
      </li> 
      ))}   
</ul>
   : ''}

   {!completed && inCompleted ? 
   <ul>
   {filterIncompleted.map((item) =>(
       <li key={item.id}>
           <div className='task'>
                  <input type='checkbox'
                  onChange={(e) =>handleCheck(item.id)}
                  checked={item.checked}
                  />

                  <label className={item.checked ? "active" : ''}>{item.item}</label>
              </div>
              <button onClick={(e) =>handleDelete(item.id)}><FaTrashCan />
              </button>
      </li>   
      ))}   
</ul>
   : ''}
    </div>
  )
}

export default Lists