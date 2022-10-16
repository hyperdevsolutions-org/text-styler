import React,{useEffect, useState} from 'react'
import {AiOutlineCloudDownload} from 'react-icons/ai'
import {MdOutlinePhotoSizeSelectActual} from 'react-icons/md'
import {FiEdit2} from 'react-icons/fi'


const AdminDashboard = () => {
    
    let iFrame;
      
        
     useEffect(()=>{
        iFrame=document.getElementById("iframe");
        if(!iFrame)
        return ;
        else{
          iFrame  =document.getElementById("iframe").contentWindow.document;
        }
     })
   
    const [word,setWord]=useState('')
  
    const [values,setValues]=useState({
        htmlValue:'',
        cssValue:'',
        jsValue:''
    })
    const handleChange=(e)=>{
        setValues({...values,[e.target.name]:e.target.value})
        console.log(values)
        console.log(iFrame);
        
        iFrame.open()
    iFrame.writeln(
        word+
        values.htmlValue +
        '<style>' +
        values.cssValue +
        '</style>' +
        '<script>' +
        values.jsValue +
        '</script>'
    )
    iFrame.close()
    }

    const handleInput=(e)=>{
      setWord(e.target.value)
      iFrame.open()
      iFrame.writeln(
          e.target.value
      )
      iFrame.close()
      }
    


  return (
    <div className='mt-20 mb-8'>
    <div className='mt-20 flex flex-row justify-center items-center'>
        <div className='flex flex-column justify-center items-center w-3/4 mx-20'>
        <iframe
        loading='eager'
        id="iframe"
        title="output"
        className="px-8 text-center py-12 w-full text-sm text-gray-900 bg-white border-dashed border-2 border-black  " 
        >
      </iframe>
     </div>
        </div>
        <div className='flex mt-4 flex-row justify-center items-center'>
        <div className='flex flex-column justify-center items-center w-2/6'>
        <button type="button" className="text-white w-full bg-gray-800 text-md hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300  rounded-md  px-5 py-2.5 mr-2 mb-2 inline-flex items-center text-center justify-center gap-2">
            <AiOutlineCloudDownload/>
            Download As PNG Image</button>
        </div>
        </div>
        <div className='flex mt-4 flex-row justify-center items-center'>
        <div className='flex flex-column justify-between gap-x-4 items-center w-3/4'>
        <div className='w-1/3'>
        <textarea name='htmlValue' onInput={handleChange} rows="2" className="block p-2.5 w-full text-sm text-gray-900  rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 " placeholder="HTML Code"></textarea>        
        </div>
        <div className='w-1/3'>
        <textarea name='cssValue' onInput={handleChange}  rows="2" className="block p-2.5 w-full text-sm text-gray-900 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 " placeholder="CSS Code(important)"></textarea>        
        </div>
        <div className='w-1/3'>
        <textarea name='jsValue' onInput={handleChange}  rows="2" className="block p-2.5 w-full text-sm text-gray-900 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 " placeholder="JS Code"></textarea>        
        </div>
        </div>
        </div>
        <div className='flex mt-4 flex-row justify-center items-center '>
        <div className='flex flex-column justify-center gap-x-2  items-center w-3/4 '>
        {/* <div className='w-1/3'>
        <div className="flex justify-center items-center w-full">
        <label htmlFor="dropzone-file" className="flex flex-col justify-center items-center w-full h-64  rounded-lg border-2 border-gray-300 border-dashed cursor-pointer dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
        <div className="flex flex-col justify-center items-center pt-5 pb-6 ">
           <MdOutlinePhotoSizeSelectActual fontSize={80}/>
            <p className="text-sm text-gray-500 dark:text-gray-400">Drag and Drop or Click to upload a Photo</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">Style thumbnail</p>
        </div>
        <input id="dropzone-file" type="file" className="hidden"/>
    </label>
   </div> 
   </div> */}
      <div className='w-2/4 space-y-2 h-64'>
      <div className="relative">
        <div className="flex absolute inset-y-0 right-0 items-center pl-3 pointer-events-none">
           <span className=' bg-gray-300 w-16 text-sm h-10 text-center py-2.5'>0/60</span> 
        </div>
      <input type="text"  
      className="border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Title" required/>
      </div>
       <input type="text"  
      className="border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Add Tag" required/>
       <span className='text-xs text-gray-400 font-medium '>*Press Enter or comma to add tag(Maximum 3 tags)</span>
       <input type="text"  
      className="border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Preview Word" 
      onChange={handleInput}
      required/>
       <textarea  rows="3" className="block p-2.5 w-full text-sm text-gray-900 rounded-sm border border-gray-300 focus:ring-blue-500 focus:border-blue-500 " placeholder="CSS Code(important)"></textarea>        
       <textarea  rows="3" className="block p-2.5 w-full text-sm text-gray-900 rounded-sm border border-gray-300 focus:ring-blue-500 focus:border-blue-500 " placeholder="Description (optional)"></textarea>        
       <button type="button" className="text-white  w-full bg-gray-800 text-md hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300  rounded-md  px-5 py-2.5 mr-2 !mb-2 inline-flex items-center text-center justify-center gap-2">
            <FiEdit2/>
            Upload</button>
      </div>
      
      
      {/* <div className='w-1/3 h-64 '>
      <h4>Background Options</h4>
     <h6 className='mt-6 text-center'>Background Color</h6>
     <span className='text-xs mx-2 text-gray-500'>Click the dark square to activate the color picker</span>
    <div className='mt-2'>
    <label htmlFor="default-toggle" className="inline-flex relative items-center cursor-pointer">
    <input type="checkbox" value="" id="default-toggle" className="sr-only peer"/>
    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
    <span className="ml-3  text-sm  ">Gradient Background</span>
    </label>
    </div>
    <span className='text-sm'>Font Family</span> 
    <input type="text"  className=" border border-gray-300 text-gray-900 text-sm rounded-xl mt-3 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="default" required/>
      </div> */}
        </div>
        </div>
        </div>
 
  )
}

export default AdminDashboard