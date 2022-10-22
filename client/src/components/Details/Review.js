import React from 'react'

function Review({comment}) {
  return (
    <div className='text-sm'>     
       <strong>{comment?.split(":")[0]}</strong> :
              {comment?.split(":")[1]}
    </div>

  )
}

export default Review