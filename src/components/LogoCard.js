import React,{useState,Component} from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

//lets start with creating a checkbox container

const CheckboxContainer = styled.div`
    display:inline-block; //display on same line as contents.
    vertical-align: middle;
`;

const Icon = styled.svg`
    fill:none;
    stroke: white;
    stroke-width: 2px;
`;

//hide checkbox visually but remain accessible to screen readers.
const HiddenCheckbox = styled.input.attrs({type:'checkbox'})`
    border:0;
    clip:rect(0 0 0 0);
    clip-path: inset(50%);
    height:1px;
    margin:-1px;
    overflow: hidden;
    padding:0;
    position:absolute;
    white-space:nowrap;
    width:1px;
`
const StyledCheckbox = styled.div`
    display:inline-block;
    width:16px;
    height:16px;
    background: ${props => (props.checked ? 'salmon':'papayawhip')};
    border-radius: 3px;
    transition:all 150ms;

    ${HiddenCheckbox}:focus + &{
        box-shadow:0 0 0 3px pink;
    }
    ${Icon}{
        visibility:${props => (props.checked ? 'visible':'hidden')}
    }
`;

const Checkbox = ({className, checked, ...props}) => (
    <CheckboxContainer className={className}>
        <HiddenCheckbox checked={checked} {...props} />
        <StyledCheckbox checked={checked}>
            <Icon viewBox="0 0 24 24">
                <polyline points="20 6 9 17 4 12" />
            </Icon>
        </StyledCheckbox>
    </CheckboxContainer>
)

//const LogoCard 
const LogoCard = ({customIcon,cardText}) => {
    const [checked, setChecked] = useState(false);
    const handleCheckboxChange = event => {
        setChecked({checked:event.target.checked})
    }
    return(
        <LogoContainer>
            <span>
                {customIcon}
            </span>
            <span>
                {cardText}
            </span>    
                
            <Checkbox 
                checked={checked}
                onChange={handleCheckboxChange}
            />
        </LogoContainer>
    )
}
LogoCard.propTypes = {
    customIcon:PropTypes.element,
    cardText:PropTypes.string,
}

const LogoContainer = styled.div`
    display:flex;
    flex-direction:row;
    justify-content: space-between;
    align-items:center;
    //border-color:white;
    width:300px;
    height:90px;
    color:white;
    background-color: dark-grey;

`;

export default LogoCard;

// const Container = styled.div`
//     display:flex;
//     flex-direction: row;
//     justify-content:space-around;
// `;