import { useUserStore } from "../stores/useUserStore";
import { useEffect } from "react";

export const User = () => {
 const {userData, loading, error, fetchUserData } = useUserStore()

 useEffect(()=>{
    fetchUserData()
 }, [fetchUserData])

 if (loading) {
    return <div>Loading...</div>
 }

 if (error) {
    return <div>Error: {error}</div>
 }

 return userData? (
    <div>
        <h2>User</h2>
        <p>Name: {userData.name.first} {userData.name.last}</p>
        <img src={userData.picture.medium} alt='User'/>
    </div>
 ) : null
}