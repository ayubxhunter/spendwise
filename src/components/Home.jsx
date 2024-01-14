import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  let navigate = useNavigate();

  const navigateToGoals = () => {
    navigate('/goals'); // Use the navigate function to go to the Goals page
  };

  return (
    <div className="flex flex-col h-screen">
      {/* Header Section */}
      <header className="flex items-center pl-8 pt-4">
        <img src="/SW.jpeg" alt="SpendWise Logo" className="h-12 w-12 mr-2" />
        <h1 className="text-2xl font-bold" style={{ color: '#004080' }}>SpendWise</h1>
      </header>

      {/* Main Content Area */}
      <div className="flex flex-1 px-8"> 
  {/* Left Content Container */}
  <div className="flex flex-col justify-center items-center w-4/12 text-center">
    <h2 className="text-4xl font-extrabold mb-6">Spend Smarter with <span style={{ color: '#004080' }}>SpendWise</span></h2>
    <p className="mb-6">Unlock the power of mindful spending with SpendWise, the budget tracker designed for the modern spender. Upload CSV files and let SpendWise reveal your financial habits, guiding you to your spending goals with clarity and ease. Set targets, track progress, and make your money work for you. Ready for a brighter financial future? Start with SpendWise.</p>
    <button
      className="bg-[#004080] text-white font-bold py-2 px-4 rounded mt-4"
      onClick={navigateToGoals} // Set the onClick to use navigateToGoals function
    >
      Begin Your Journey Today!
    </button>
  </div>

        {/* Right Image Container */}
        <div className="flex justify-center items-center w-8/12 ml-4">
          <img src="/Homepage.jpeg" alt="Budget Planning" className="max-w-full h-auto rounded-lg" />
        </div>
      </div>
    </div>
  );
};

export default Home;
