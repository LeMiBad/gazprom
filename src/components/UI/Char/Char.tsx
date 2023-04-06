import { FC } from "react"
import styled from "styled-components"


const StyledChar = styled.h1`
    background-color: #ffffff2d;
    border: 0.3px solid #FFFFFF;
    color: white;
    font-size: 22px;
    @media (min-width: 1024px){
        font-size: 50px !important;
    }
`


const Char: FC<{chars: Array<string>}> = ({chars}) => {
    return (
        <>
            <div style={{display: 'flex'}}>
                {chars.map(char => <StyledChar>{char}</StyledChar>)}
            </div>
        </>
    )
}

export default Char