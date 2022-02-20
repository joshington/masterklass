import React from 'react'
import {StyledInput} from './style';


const Input = ({...props}) => {
    return (
        <div>
            <StyledInput {...props} />
        </div>
    )
}

export default Input
