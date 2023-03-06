import React from "react"
import styled from "styled-components"

interface ButtonProps {
    func: () => void
    children: string
}

const Button = styled.button`
    border: 0;
    background: linear-gradient(270deg, #1570B8 -78.05%, #15B8AD 110.36%);
    color: white;
    font-weight: 600;
    box-sizing: border-box;
    padding: 1vh 3vw;
    cursor: pointer;
    height: 50px;
    :hover {
        background: linear-gradient(270deg, #1b82d6 -78.05%, #18dacd 110.36%);
    }
`

export const GreenButton: React.FC<ButtonProps> = ({func, children}) => {
    return <Button onClick={func}>{children}</Button>
}

export default GreenButton