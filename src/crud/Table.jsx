
import TableRow from '../crud/TableRow';

export default function Table({datas,setDatas,update,setUpdate,setErrors}){

    return(
        <table className="min-w-full divide-y border divide-gray-200">
        <thead className="bg-gray-50">
            <tr className='text-center'>
                <th scope="col" className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase">
                    ID
                </th>
                <th scope="col" className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase ">
                    Name
                </th>
                <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase "
                >
                    Edit
                </th>
                <th className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase " >
                    Delete
                </th>
            </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
         {datas.map((data,index)=>(
             <TableRow setErrors={setErrors} key={index} data={data} datas={datas} setDatas={setDatas} update={update} setUpdate={setUpdate}/>
          ))}
        </tbody>
    </table>
    )
}