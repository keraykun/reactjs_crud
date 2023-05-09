export default function DeleteData({id,datas,setDatas,setUpdate,setErrors}){

    const handleDelete = () =>{
        const newlist = datas.filter((data) => data.id !== id)
        setDatas(newlist)
        setUpdate({id:'',name:''})
        setErrors('Data has been Deleted')
    }
    return(
        <button  className="text-red-500 hover:text-red-700" onClick={() => handleDelete(id)}>Delete</button>
    )
}