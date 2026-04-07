import { createContext, useContext, useState, ReactNode } from "react";

type SidebarPosition = "left" | "right";
type NavMode = "header" | "sidebar";

interface SidebarContextType {
  position: SidebarPosition;
  togglePosition: () => void;
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  navMode: NavMode;
  toggleNavMode: () => void;
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
  const [navMode, setNavMode] = useState<NavMode>("header");

  const togglePosition = () => setPosition((p) => (p === "left" ? "right" : "left"));
  const toggleNavMode = () => setNavMode((m) => (m === "header" ? "sidebar" : "header"));

  return (
    <SidebarContext.Provider
      value={{ position, togglePosition, isOpen, setIsOpen, navMode, toggleNavMode }}
    >
      {children}
    </SidebarContext.Provider>
  );
};
