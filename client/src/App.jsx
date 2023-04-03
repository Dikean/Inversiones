import React, { useState }  from 'react';
import { Route, Routes } from 'react-router-dom';
import ThemeContext from './ThemeContext';
import { Sidebar, Navbar } from './components';
import { CampaignDetails, CreateCampaign, Home, Profile, About_us  } from './pages';


const App = () => {

  const [bgColor, setBgColor] = useState('#13131a');


  return (
    <ThemeContext.Provider value={{ bgColor, setBgColor }}>
    
    <div className="relative sm:-8 p-4  min-h-screen flex flex-row" style={{ backgroundColor: bgColor }}>
      <div className="sm:flex hidden mr-10 relative">
        <Sidebar />
      </div>

      <div className="flex-1 max-sm:w-full max-w-[1280px] mx-auto sm:pr-5">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/about_us" element={<About_us />} />
          <Route path="/create-campaign" element={<CreateCampaign />} />
          <Route path="/campaign-details/:id" element={<CampaignDetails />} />
        
        </Routes>
      </div>
    </div>
    </ThemeContext.Provider>
  )
}

export default App