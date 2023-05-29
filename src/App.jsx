import React from 'react';
import './App.css';
import imageSrc from './3.png';
import imageSrc1 from './1.png';
import imageSrc2 from './2.png';

function App() {
  return (<>
  <div className=" flex w-full h-8 mb-10">

<div className=" text-gray-500 flex w-full h-4 justify-start font-medium font-serif"> SM-Easy </div>

<div className="flex w-full h-4 flex-row space-x-7 justify-end ">
  <div><button class="rounded-md ">About</button></div>
  <div><button class="rounded-md ">FAQ</button></div>
  <div><button class="rounded-md ">Contact Us</button></div>
  <div><button class="bg-green-800 p-1 text-white rounded-md ml-20">Decoleather</button></div>
</div>
</div>
  

    
    <div className="  w-full bg-white-200 h-full">

      

      <div className=" mb-20 text-4xl flex w-full h-16 justify-start border-b">Welcome to SM-Easy</div>

      <div className=" flex  w-full justify-center items-center ">
        <span className=" scale-[0.85] w-1/3  h-80 my-5 mr-10  shadow-lg rounded-lg p-5  flex flex-col items-center justify-center bg-gray-100 border ">
          <div><img  class="max-w-none" src={imageSrc} alt="Image" /></div>
          <div className="  text-center font-medium text-green-800 pt-20"> Point of Sale </div>
        </span>
        <span className="  scale-[0.85] w-1/3 my-5 mr-10  h-80 shadow-lg rounded-lg p-5 flex flex-col items-center justify-center bg-gray-100 border">
          <div className="text-center"><img class="max-w-none" src={imageSrc1} alt="Image"/></div>
          <div className=" text-center font-medium text-green-800 "> Decoleather Inventory </div>
        </span>
        <span className=" scale-[0.85] w-1/3 my-5 mr-10  h-80 shadow-lg rounded-lg p-5 flex flex-col items-center justify-center bg-gray-100 border">
          <div><img class="max-w-none" src={imageSrc2} alt="Image"/></div>
          <div className="  text-center font-medium text-green-800 pt-10"> Transactions History </div>
        </span>
      </div>






    </div>


    </>);
}

export default App