import React from 'react'

const SkillPic = ({ title, Icon, isActive, onClick }) => {
  return (
    
    <div
      className={`relative cursor-pointer transition-all duration-300 ease-in-out`}
      onClick={onClick}
    >
      <div className={`absolute inset-0 z-0 rounded-[0.65rem] shadow-glow ${isActive ? "animate-[spin_3s_linear_infinite]" : ""}`}></div>

      <div
        className={`relative z-10 border rounded-[0.65rem] p-[2.5rem] text-center backdrop-blur-sm transition-all duration-300 ease-in-out ${
          isActive
            ? "bg-gradient-purple"
            : "hover:bg-gradient-purple shadow-2xl"
        }`}
      >
        <div className="flex flex-col items-center justify-center">
          <Icon className="text-4xl" />
          <span>{title}</span>
        </div>
      </div>
    </div>
  );
};

export default SkillPic;

