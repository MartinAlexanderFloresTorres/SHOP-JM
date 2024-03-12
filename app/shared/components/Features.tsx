import React from 'react';

export default function Features() {
  return (
    <div className="flex items-center justify-center bg-black text-white select-none">
      <div className="flex-1 px-6 py-4 text-center">
        <h2 className="font-bold uppercase text-sm">Facil</h2>
      </div>
      <div className="flex-1 px-6 py-4 text-center border-r border-l border-white border-opacity-20">
        <h2 className="font-bold uppercase text-sm">Sencillo</h2>
      </div>
      <div className="flex-1 px-6 py-4 text-center">
        <h2 className="font-bold uppercase text-sm">Rapido</h2>
      </div>
    </div>
  );
}
