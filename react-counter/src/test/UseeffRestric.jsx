import React, { useEffect, useState } from 'react'

export default function UseeffRestric() {
    const [num, setNum] = useState(1);
    useEffect(() => {
        let int=setInterval(() => (
            setNum(num+1)
        ), 1000)
        if (num > 5) {
            clearInterval(int)
        }
    },[])
  return (
    <div>
      {num}
    </div>
  )
}
