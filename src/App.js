
import './App.css';
import './index.css'
import Table from './crud/Table';
import AddData from './crud/AddData';
import { useState } from 'react';
import uuid from 'react-uuid';
import UpdateData from './crud/UpdateData';

function App() {
  

  const [errors,setErrors] = useState(null);
  const [datas,setDatas] = useState([
    {
      id:uuid(),
      name:'kevin'
    },

  ])

  const [update,setUpdate] = useState({id:null,name:''});


  return (
    <div className="App">
       <div className="container m-w-50 mx-auto mt-10">
            {errors? <div className='text-white p-3 bg-red-500'>{errors}</div>:''}
            <AddData datas={datas} setDatas={setDatas} setErrors={setErrors}/>
            <div id="showEdit" className="my-2 hidden">
              <UpdateData setErrors={setErrors} datas={datas} setDatas={setDatas} update={update} setUpdate={setUpdate}/>
            </div>
            <Table setErrors={setErrors} update={update} setUpdate={setUpdate} datas={datas} setDatas={setDatas} />
       </div>
    </div>  
  );
}

export default App;
