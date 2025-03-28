import React from 'react';
import Health from './ui/Health';
import Armor from './ui/Armor';
import Money from './ui/Money';
import Name from './ui/Name';
import Bars from './ui/Bars';
import Ammo from './ui/Ammo';

const Base: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row px-5 md:px-10 py-5 md:py-10 text-app-text font-inter font-bold hud-container">
      <div className="flex flex-col md:flex-row justify-between items-end md:gap-10">
        <div className="flex flex-col-reverse">
          <div className="flex flex-col-reverse gap-2">
            <Health />
            <Armor />
          </div>
          <Money />
          <Name />
        </div>
        <Bars />
        <Ammo />
      </div>
    </div>
  );
};

export default Base;