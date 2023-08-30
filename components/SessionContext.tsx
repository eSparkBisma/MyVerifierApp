// import React, {createContext, useContext, useEffect, useState} from 'react';
// import AsyncStorage from '@react-native-async-storage/async-storage';

// interface SessionContextType {
//   isLoggedIn: boolean;
//   setLoggedIn: (loggedIn: boolean) => void;
// }

// const SessionContext = createContext<SessionContextType | undefined>(undefined);

// interface SessionProviderProps {
//   children: React.ReactNode;
// }

// export const SessionProvider: React.FC<SessionProviderProps> = ({children}) => {
//   const [isLoggedIn, setLoggedIn] = useState(false);

//   useEffect(() => {
//     async function loadSession() {
//       try {
//         const value = await AsyncStorage.getItem('@session');
//         if (value !== null) {
//           setLoggedIn(JSON.parse(value));
//         }
//       } catch (error) {
//         console.error('Error loading session:', error);
//       }
//     }

//     loadSession();
//   }, []);

//   // useEffect(() => {
//   //   async function saveSession() {
//   //     try {
//   //       await AsyncStorage.setItem('@session', JSON.stringify(isLoggedIn));
//   //     } catch (error) {
//   //       console.error('Error saving session:', error);
//   //     }
//   //   }

//   //   saveSession();
//   // }, [isLoggedIn]);

//   return (
//     <SessionContext.Provider value={{isLoggedIn, setLoggedIn}}>
//       {children}
//     </SessionContext.Provider>
//   );
// };

// export function useSession() {
//   const context = useContext(SessionContext);
//   if (context === undefined) {
//     throw new Error('useSession must be used within a SessionProvider');
//   }
//   return context;
// }
