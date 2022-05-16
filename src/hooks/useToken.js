import { useEffect, useState } from "react"

const useToken = user => {
    const [token, setToken] = useState('')
    useEffect(()=>{
        console.log(user)
        const email = user?.user?.email
        console.log(email)
    },[user])
    return [token]

}
export default useToken