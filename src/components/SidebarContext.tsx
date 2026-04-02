import { createContext, useContext, useState, ReactNode } from "react";

type SidebarPosition = "left" | "right";

interface SidebarContextType {
  position: SidebarPosition;
  togglePosition: () => void;
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

const SidebarContext = createContext<SidebarContextType | null>(null);

export const useSidebarPosition = () => {
  const ctx = useContext(SidebarContext);
  if (!ctx) throw new Error("useSidebarPosition must be used within SidebarProvider");
  return ctx;
};

export const SidebarProvider = ({ children }: { children: ReactNode }) => {
  const [position, setPosition] = useState<SidebarPosition>("left");
  const [isOpen, setIsOpen] = useState(false);

  const togglePosition = () => setPosition((p) => (p === "left" ? "right" : "left"));

  return (
    <SidebarContext.Provider value={{ position, togglePosition, isOpen, setIsOpen }}>
      {children}
    </SidebarContext.Provider>
  );
};
