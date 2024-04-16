// Create a store with a state that matches User.jsx:
// userData, loading, error, fetchUserData
import { create } from "zustand";

export const useUserStore = create (set => ({
    userData: null,
    loading: false,
    error: null,
 
fetchUserData: async () => {
    set({loading:true, error:null})
    try {
        const res = await fetch('https://randomuser.me/api/')
        if(!res.ok){
            throw new Error("Fetching didn't work")
        }
        const data = await res.json()
        console.log(data.results[0])
        set({userData:data.results[0]})
    } catch (error) {
        console.log("Error:",error)
        set({error: error})
    } finally{
        set({loading: false})
    }
}
}))
