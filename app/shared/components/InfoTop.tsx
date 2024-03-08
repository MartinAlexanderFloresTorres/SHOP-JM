import React from 'react';

interface InfoTopProps {
  children: React.ReactNode;
}

export default function InfoTop({ children }: InfoTopProps) {
  return <div className="bg-black text-white text-center px-4 py-2">{children}</div>;
}
