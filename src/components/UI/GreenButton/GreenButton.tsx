import React from "react"
import styled from "styled-components"

interface ButtonProps {
    func: () => void
    children: string
    inActive?: boolean
    width?: number
    big?: boolean
}

const Button = styled.button<{width?: number, big?: boolean}>`
    border: 0;
    background: linear-gradient(270deg, #1570B8 0%, #15B8AD 110.36%);
    color: white;
    ${props => props.width? `width: ${props.width}%;` : ''}
    font-weight: 500;
    font-family: "Roboto Condensed";
    box-sizing: border-box;
    padding: 1vh 4vw;
    cursor: pointer;
    height: 50px;
    font-size: 15px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    :hover {
        background: linear-gradient(270deg, #1b82d6 -78.05%, #18dacd 110.36%);
    }
`

const GreyButton = styled.button<{width?: number}>`
    border: 0;
    ${props => props.width? `width: ${props.width}%;` : ''}
    background: #BEE4FA4D;
    backdrop-filter: blur(5px);
    color: white;
    font-weight: 500;
    font-family: "Roboto Condensed";
    box-sizing: border-box;
    padding: 1vh 3vw;
    cursor: pointer;
    height: 50px;
`

export const GreenButton: React.FC<ButtonProps> = ({func, children, inActive, width, big}) => {
    if(inActive) return <GreyButton width={width} onClick={func}>{children}</GreyButton>
    return <Button big={big? true : false} width={width} onClick={func}>{children}</Button>
}

export default GreenButton