import { useRef } from "react";
import uuid from 'react-uuid';

export default function AddData({datas,setDatas,setErrors}){

    const nameRef = useRef()

    function handleSubmit(event) {    
        event.preventDefault();
        const name = event.target.elements.name.value;

        if(name===''){
            setErrors('Field Required')
        }else{
            setErrors('')
            const newlist = {
                id: uuid(),
                name,
            }
            setDatas((prevList)=> {
                return prevList.concat(newlist)
            })
            nameRef.current.value = ""
        }
    }


    return(
        <div className="my-2">
             <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                    Add Data
                </label>
                <input name="name" ref={nameRef} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username"/>
                </div>
                <div>
                    <button className="bg-green-500 py-2 px-4 rounded-md text-white hover:bg-green-600">Add</button>
                </div>
            </form>
        </div>
    )
}