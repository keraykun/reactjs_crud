



export default function EditData({id,name,update,setUpdate}){

  
    const handlUpdate = () =>{

        setUpdate({
            id:id,
            name:name
        })
        // const newlist = datas.filter((data) => data.id !== id)
        // setDatas(newlist)
        document.getElementById('showEdit').style.display='inline'
    }
    return(
        <button  className="text-green-500 hover:text-green-700" onClick={() => handlUpdate(id)}>Edit</button>
    )
}