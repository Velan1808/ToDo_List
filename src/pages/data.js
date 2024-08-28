<li >
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