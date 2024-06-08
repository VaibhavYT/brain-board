import React from 'react'

interface UserIdProps{
    params:{
        userId : string;
     }
}

const UserIdPage = ({
    params,
}:UserIdProps) => {
  return (
    <div>
        User ID : {params.userId}
    </div>
  )
}

export default UserIdPage