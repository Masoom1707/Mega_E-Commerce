import React from 'react'

const Badge = (props) => {
  return (
    <span className={`status ${props.status == 'pending' && 'red'} ${props.status == 'confirm' && 'yellow'} ${props.status == 'delivered' && 'green'} `}>
        {props.status}
    </span>
  )
}

export default Badge