import React, { useState } from 'react'

const useForm = (todo) => {
    var[val,setval] = useState(todo);
  return [val,(event)=>{
    setval(
        {
            ...val,[event.target.name] :event.target.value
        }
  )
}]
}
export default useForm

