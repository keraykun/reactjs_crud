import DeleteData from "./DeleteData";
import EditData from "./EditData";

export default function TableRow({index,data,datas,setDatas,update,setUpdate,setErrors}){
    
    return(
        <tr key={index}>
            <td className="px-4 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                {data.id}
            </td>
            <td className="px-4 py-4 text-sm text-gray-800 whitespace-nowrap">
                {data.name}
            </td>
            <td className="px-4 py-4 text-sm font-medium text-right whitespace-nowrap">
               <EditData id={data.id} name={data.name} update={update} setUpdate={setUpdate}/>
            </td>
            <td className="px-4 py-4 text-sm font-medium text-right whitespace-nowrap">
                <DeleteData setErrors={setErrors} id={data.id} datas={datas} setDatas={setDatas} setUpdate={setUpdate}/>
            </td>
        </tr>
    )
}