import { createContext, useState, useContext, useEffect } from "react";
import supabase from "../src/supabase-client";


const AuthContext = createContext()

export const AuthContextProvider = ({ children }) =>{
    const [ session, setSession ] = useState(undefined)


    useEffect(()=>{
        async function getInitialSession(){
            try{
                const { data, error } = await supabase.auth.getSession()
                if(error) throw error
                console.log("Initial session:", data.session)
                setSession(data.session)
            }
            catch(error){
            console.error("Error getting initial session:", error.message)
        }
    } getInitialSession()
    },[])
    return(
        <AuthContext.Provider value={{session}}>
            {children}
        </AuthContext.Provider>
    )
}


export const useAuth = () =>{
    return useContext(AuthContext)
}