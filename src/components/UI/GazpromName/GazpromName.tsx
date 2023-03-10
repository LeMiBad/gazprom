import styled from "styled-components"


interface GazpromNameProps {
    textOne?: string
    textTwo?: string
}


const Wrapper = styled.div`
    position: absolute;
    display: flex;
    z-index: 500;
    gap: 50px;
    left: 0;
    top: 10%;
`

const StyledGazpromName = styled.h1`
    color: white;
    background-color: #bee4fa4d;
    backdrop-filter: blur(3px);
    box-sizing: border-box;
    padding: 0 10px;
    height: 43px;
    @media (max-width: 768px) {
        font-size: 22px;
    }
    @media (max-height: 320px) {
        font-size: 20px;
    }
    display: flex;
    justify-content: center;
    align-items: center;
`

const TextOne = styled.p`
    color: white;
    font-size: 24px;
    @media (max-height: 320px) {
        font-size: 20px;
    }
    font-weight: 700;
`

const TextTwo = styled.p`
    color: white;
    font-size: 20px;
    font-weight: 500;
`

const GazpromName: React.FC<GazpromNameProps> = ({textOne, textTwo}) => {
    return (
        <Wrapper>
            <StyledGazpromName>ГАЗСТРОЙПРОМ</StyledGazpromName>
            {
                textOne && textTwo? 
                <div style={{display: 'flex', flexDirection: 'column', gap: 10}}>
                    <TextOne>{textOne}</TextOne>
                    {textOne? <TextTwo>{textTwo}</TextTwo> : null}
                </div>
                :
                textOne?
                <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                    <TextOne>{textOne}</TextOne>
                </div>
                :
                null
            }
        </Wrapper>
    )
}

export default GazpromName