import { createContext } from "react";

const CurrentUserContext = createContext();
CurrentUserContext.displayName = 'Name';

export default CurrentUserContext;

// provider consumer == publisher subscriber