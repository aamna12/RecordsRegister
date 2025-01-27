import React,{useState} from 'react';


function AddField() {

    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [list,setList]=useState([]);

    const handleAddField=(e)=>{
        e.preventDefault();
        setList((prev)=>[...prev,{name,email}])
        setName("");
        setEmail("");
        console.log(list);
    }

    const handleDeleteField=(index)=>{
        setList((prev)=>prev.filter((_,i)=>i!==index
        ));
    }

  return (
    <>
    <div className="w-full flex justify-center gap-2 mt-10">
    <div className="relative">
      <input
        type="name"
        className="w-[250px] p-3 w-full border-[1px] border-gray-300 rounded-md 
                   focus:outline-none focus:border-2 focus:border-blue-500"
        id="name"
        placeholder=" " value={name} onChange={(e)=>setName(e.target.value)}
      />
      <label
        htmlFor="name"
        className="absolute left-3 top-[-10px] text-black text-md bg-white px-1"
      >
        Name
      </label>
    </div>
  
    <div className="relative">
      <input
        type="email"
        className="w-[250px] p-3 w-full border-[1px] border-gray-300 rounded-md 
                   focus:outline-none focus:border-2 focus:border-blue-500"
        id="email"
        placeholder=" " value={email} onChange={(e)=>setEmail(e.target.value)}
      />
      <label
        htmlFor="email"
        className="absolute left-3 top-[-10px] text-black text-md bg-white px-1"
      >
        Email
      </label>
    </div>
  
    {/* Button */}
    <button className="w-[50px] h-[50px] p-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 font-bold
    text-xl hover:scale-105"
     onClick={handleAddField}>
      +
    </button>
  </div>
  {list.length===0 ? "" :
  
  <div className='mt-10 bg-gray-100 h-screen mx-10'>
    <h3 className='font-bold text-indigo-950 text-center text-4xl underline m-[20px]'>Records List</h3>
    <div className='flex flex-col'>
        {
            list.map((field,index)=>(
                <div key={index} className='m-3 flex justify-around rounded-lg items-center bg-gray-300 p-3
                hover:border-2 hover:border-black hover:rounded-lg'>
                    <div>
                    <span className='text-2xl font-semibold text-blue-950  mr-1'>Name:</span>
                         <span className='text-xl font-semibold  text-black '>{field.name}</span>
                    </div>
                    <div>
                         <span className='text-2xl font-semibold text-blue-950  mr-1'>Email:</span>
                         <span className='text-xl font-semibold text-black '>{field.email}</span>
                    </div>
                    <button className='text-red-700 text-2xl font-semibold' onClick={()=>handleDeleteField(index)}>
                        <i class="fa-solid fa-xmark"></i></button>
                </div>
            ))
        }
    </div>
  </div>
}
  </>
  )
}

export default AddField
