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
    supabase.auth.onAuthStateChange((_event, session) => {
    setSession(session);
    console.log('Session changed:', session);
    })
    },[])

    const singInUser = async(email, password) =>{
        try{
            const { data, error } = await supabase.auth.signInWithPassword({
                email: email.toLowerCase(),
                password: password,
            }) 
            if (error){
                console.error('supabase Sign-in error: ', error.message)
                return {success: false, error: error.message}
            }
            console.log("sign in successful:", data)
            return { success: true, data}
        } catch (error){
            console.error("Error during sign-in:", error.message)
            return { success: false, error: `unexpected error occured please try again`}
        }
    }

    return(
        <AuthContext.Provider value={{session, singInUser}}>
            {children}
        </AuthContext.Provider>
    )
}


export const useAuth = () =>{
    return useContext(AuthContext)
}