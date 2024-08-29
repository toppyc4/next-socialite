import React from "react";
import { useContext, createContext } from "react";

const Context = createContext({});

export const useAuth = () => useContext(Context);
