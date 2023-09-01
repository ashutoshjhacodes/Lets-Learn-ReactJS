import { useEffect,useState } from "react";

const useOnlineStatus=()=>{
    const [onLineStatus,setOnLineStatus]=useState(true);
    //check if online
    useEffect(()=>{
        window.addEventListener("offline",()=>{
            setOnLineStatus(false);

        })
        window.addEventListener("online",()=>{
            setOnLineStatus(true);
        })
    },[])
    //boolean values
    return useOnlineStatus;
}
export default useOnlineStatus;