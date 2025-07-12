// components/Container.tsx
import React from "react";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;  // <-- добавили пропс
}

export function Container({ children, className = "" }: ContainerProps) {
  return (
    <div className={`max-w-7xl mx-auto px-10 ${className}`}>
      {children}
    </div>
  );
}
