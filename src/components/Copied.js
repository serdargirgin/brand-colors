import React, {useState} from 'react'
import { getContrastYIQ } from '../helpers'

const Copied = ({color}) => {
    return (
        <div className='copied' style={{'--bgColor': `#${color}`,'--textColor':`${getContrastYIQ(color)}`}}>
          Copied <b>#{color} </b> to Clipboard!
        </div>
    )
}

export default Copied