import React from "react";
import BgImage from "../assets/warehouse1.jpg";

const Landing = () => {
 
  return( 
  <div className="flex flex-col min-h-screen bg-gray-100">
    <header className="bg-white shadow">
      <div className="flex items-center justify-between px-6 py-3 mx-auto max-w-7xl sm:px-6">
        <h1 className="text-3xl font-bold text-gray-700">StockEasy</h1>
        <button className="p-2 px-5 bg-orange-700 text-slate-950 hover:text-slate-200 rounded-2xl">
          <a href="/login">Login</a>
        </button>
      </div>
    </header>
    <main className="flex-grow" style={{background: `url(${BgImage})`, backgroundRepeat:"no-repeat", width:'100%'}}>
      <div className="py-6 mx-auto max-w-7xl sm:px-6 lg:px-8">
       <div className="px-4 py-6 sm:px-0">
       <div className="flex items-center justify-center border-4 border-gray-200 border-dashed rounded-lg h-96">
          <h3 className="text-2xl font-bold text-slate-700">
            {" "}
            WAREHOUSE DEPARTMENT{" "}</h3>
        </div>
       </div>
      </div>
    </main>
    <footer className="mt-8 bg-white shadow">
      <div className="px-4 py-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <p className="text-center text-gray-500">&copy; 2024 StockEasy Inventory Managment System. All Rights Reserved</p>
      </div>
    </footer>
  </div>
  );
};

export default Landing;
