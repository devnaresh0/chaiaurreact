import React, { useEffect, useState } from 'react'
function Github() {
    const [data,setdata] = useState([])
    useEffect( () => {
        fetch('https://api.github.com/users/hiteshchoudhary').then(response => response.json()).then(
            data=> {
                console.log(data);
                setdata(data)

                
            }
        )
       

    },[])
  return (
    <div className='text-center m-4 first-line:bg-gray-500 text-white p-4 text-3xl'>Github Followers:
   {data.followers} 
   <img  src={data.avatar_url} alt='Git picture' width={300}/>
    </div>
  )
}

export default Github
export const githubInfoLoader =async() => {
  const response = await  fetch('https://api.github.com/users/hiteshchoudhary')
  return response.json()
}