import React, { useEffect, useState } from 'react'
import { FaTrashCan } from "react-icons/fa6";
import { TiArrowSortedDown } from "react-icons/ti";
import { IoMdArrowDropright } from "react-icons/io";
import { CgAdd } from "react-icons/cg";
const Home = () => {

    useEffect(() =>{
      const storedData = localStorage.getItem("data");
      
      if(storedData){
        setItems(JSON.parse(storedData))
      }
    },[])

    const [items, setItems] = useState(
        [
            {
              "id": "1",
              "checked": true,
              "item": "HTML"
            }
        ]
    )
    const [options, setOptions] = useState('')
    const [selectOptions, setSelectOptions] = useState(false)
    const [newItem, setNewItem] = useState();
    const [completed, setCompleted] = useState(false);
    const [inCompleted, setInCompleted] = useState(false);
   
    const reverseItems = [...items].reverse()
    const filterCompleted = items.filter(item => item.checked === true)
    const filterIncompleted =  items.filter(item => item.checked === false)

    const handleAll = (e) =>{
     e.preventDefault();
     const item = e.target.textContent
     setOptions(item);
     setCompleted(false);
     setInCompleted(false);
     setSelectOptions(!selectOptions);
    }
    const handleCompleted = (e) =>{
        e.preventDefault();
        const item = e.target.textContent
        setOptions(item);
        setCompleted(true);
        setInCompleted(false);
        setSelectOptions(!selectOptions);
       }
    const handleIncompleted = (e) =>{
        e.preventDefault();
        const item = e.target.textContent
        setOptions(item);
        setCompleted(false);
        setInCompleted(true);
        setSelectOptions(!selectOptions);
       }

    const AddItem = (item) =>{
        if(item){
            const newid = items.length ? parseInt(items[items.length -1].id) + 1 : 1;
            const id=newid.toString();
            const addNewItem = {id, checked:false ,item}
            const listItem = [...items, addNewItem]
            setItems(listItem);
            setNewItem('')
            localStorage.setItem("data",JSON.stringify(listItem))
        }
    }
    

    const handleCheck = (id) => {
        const listItem=items.map((item) =>
        item.id===id ? {...item,checked:!item.checked} : item );
        setItems(listItem);
        localStorage.setItem("data",JSON.stringify(listItem))
      }

    const handleDelete = (id) =>{
        const listItem=items.filter((item) => item.id!==id);
        setItems(listItem);
        localStorage.setItem("data",JSON.stringify(listItem))
          }  

  

  return (
    <div className='Home'>

 {/* Add items */}
     <div className='AddList'>
        <div className="inputBtn">

            <input type="text"
            placeholder='Add the Task'
            value={newItem}
            onChange={(e)=> setNewItem(e.target.value)}
            required
             />


            <button onClick={(e) =>AddItem(newItem)}>
                 <span className='addIcon'><CgAdd /></span>
                  Add
            </button>
        </div>

         <div className='sideBar'>
             {!selectOptions ?
             <>
               <div>
                  {options ? options : "All"}
               </div>
               <span onClick={() =>setSelectOptions(!selectOptions)}><TiArrowSortedDown /></span>
             </> 
             : '' } 
             {selectOptions ?
            <div className='options'>
                <span onClick={handleAll}> <IoMdArrowDropright /> All</span>
                <span onClick={handleCompleted}> <IoMdArrowDropright /> Completed</span>
                <span onClick={handleIncompleted}> <IoMdArrowDropright /> Incompleted</span>
            </div> : ''
             }
         </div>
    </div>

{/* List items */}
{items ?
     <div className='Lists'>
            {!completed && !inCompleted ?
            <ul>
                {reverseItems.map((item) =>(

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

    </div>  : 
    <div>
        <h1>No Lists</h1>
    </div>
    }
</div> 


  )
}

export default Home