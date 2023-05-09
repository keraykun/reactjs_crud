

export default function UpdateData({update,setUpdate,datas,setDatas,setErrors}){

    const handleSubmit = (event) => {
        event.preventDefault()
        const name = event.target.elements.name.value;

        if(name===''){
            setErrors('Field are required')
        }else{
            setErrors('')
            const newlist = datas.map((li) => (
                li.id===update.id ? {...li,id:update.id,name:name} : li
            ))
            setDatas(newlist)
        }
    }
    
    return(
       <>
        <form id="resetForm" onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
           <div className="mb-4">
           <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
               Update Data
           </label>
           <input value={update.name} onChange={(e)=>setUpdate({id:update.id,name:e.target.value})} name="name" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username"/>
           </div>
           <div>
               <button className="bg-blue-500 py-2 px-4 rounded-md text-white hover:bg-blue-600">Update</button>
           </div>
       </form>
    </>
    )
}