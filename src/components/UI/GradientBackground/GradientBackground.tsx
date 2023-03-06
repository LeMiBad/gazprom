import React from "react"
import styled from "styled-components"

interface GradientBackgroundProps {
    children?: any
    gradient: string
}

const WrapperForGradient = styled.div`
    position: relative;
    width: 100%;
    height: 100vh;
`

const Gradient = styled.div<{gradient: string}>`
    position: absolute;
    width: 100%;
    height: 100vh;
    background: ${props => props.gradient};
    background-size: cover;
    z-index: -3;
`




export const GradientBackground: React.FC<GradientBackgroundProps> = ({children, gradient}) => {
    return (
        <WrapperForGradient>
            <Gradient gradient={gradient}/>
            {children}
        </WrapperForGradient>
    )
}

export default GradientBackground