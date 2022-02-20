import React,{useState} from 'react';
import styled from 'styled-components';


const Input = ({value, type,label,onChange,onFocus,onBlur,setRef,...props}) => {
    const [email, setEmail] = useState("bbosalj@gmail.com")
    const [focused, setFocused] = useState(false);
    const [error, setError] = useState(null);


    const handleOnFocus = () => {
        setFocused(true)
        onFocus()
    }

    const handleOnBlur = () => {
        setFocused(false)
        onBlur()
    }

    const validateValue = (val) => {
        if(type ==="email"){
            //very simple email validation
            if(val.indexOf("@") === -1){
                setError("email is invalid")
                //indexOf() mthd returns the position of the first occurrence of avalue in string
                //indexOf() mthd returns -1 if the value is not found.
                //indexOf() mthd is case sensitive
            }else{
                setError(null)
            }
        }
    }

    const handleOnChange = (val) => {
        validateValue(val)
        onChange(val)
    }
    const renderLabel = () => {
        if(label){
            //if we have an error
            if(error){
                return <label>{error}</label>
            }
            return <label>{label}</label>
        }
        label && <label>{label}</label>
    }
    
    const isFocused = focused || String(value).length || type === "date"

    return (
        <InputContainer>
            {renderLabel()}
            <input 
                value={email}
                type={type}
                onChange={e => handleOnChange(e.target.value)}
                onFocus={handleOnFocus}
                onBlur={handleOnBlur}
                ref={ref => setRef(ref)}
                {...props}
            />
        </InputContainer>
    )
}
Input.defaultProps = {
    type:"text",
    label:"",
    onChange:(text) => {console.error(`Missing onChnage prop:${text}`)},
    onFocus: () => {},
    onBlur:() => {},
    setRef: () => {}
}
const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: 15px 0;

    & > input {
        border: 1px solid #eee;
        border-radius: 0.25rem;
        border-color: gray;
        background-color: transparent;
        outline: none;
        padding: 12px 3px 12px 15px;
        font-size: 16px;
        transition: all 0.2s ease;
        z-index:500;
        color: gray;
        font-weight: bold;
    }
`;

export default Input;