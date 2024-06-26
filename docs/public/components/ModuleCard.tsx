import React, { FC } from 'react';

interface ModuleCardProps {
  image: string;
  title: string;
  description: string;
  link: string;
}

const ModuleCard: FC<ModuleCardProps> = ({ image, title, description, link }) => (
  <button 
    className="w-full md:max-w-6xl lg:max-w-6xl mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden m-4 focus:outline-none transform hover:scale-105 hover:bg-gray-200 dark:hover:bg-gray-700 transition-transform duration-500 ease-in-out transition-background-color hover:duration-500"
    onClick={() => window.location.href = link}
  >
    <div className="md:flex">
      <div className="md:flex-shrink-0">
        <img className="h-48 w-full object-cover md:w-48" src={image} alt="Module image"/>
      </div>
      <div className="p-8 flex flex-col justify-center text-center md:text-left">
        <div className="lowercase tracking-wide text-sm text-indigo-500 dark:text-indigo-300 font-semibold">{title}</div>
        <p className="mt-2 text-gray-500 dark:text-gray-300 md:w-full">{description}</p>
      </div>
    </div>
  </button>
);

export default ModuleCard;