import styled from "styled-components"
import Char from "../UI/Char/Char"
import GradientBackground from "../UI/GradientBackground/GradientBackground"
import GreenButton from "../UI/GreenButton/GreenButton"
import back from "./back.png"

const StyledStartPage = styled.div`
    position: relative;
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    /* justify-content: space-around; */
    gap: 25px;
    box-sizing: border-box;
    padding-top: 5%;
    background: linear-gradient(180deg, #15B8AD -9.43%, rgba(21, 112, 184, 0.49) 41.3%, rgba(7, 29, 47, 0.7) 100%);
`

const Name = styled.div`
    z-index: 2;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: white;
    width: 100%;
    height: 5vh;
    box-sizing: border-box;
    div {
        height: 1px;
        background-color: white;
    }
    h1 {
        font-size: 20px;
        left: 6%;
        padding: 0 15px;
    }
    div:nth-child(1) {
        width: 5%;
    }
    div:nth-child(3) {
        flex: 1 1;
    }
`

const Main = styled.div`
    width: 100%;
    height: 85%;
    box-sizing: border-box;
    padding: 0 6%;
    display: flex;
    justify-content: space-between;
`

const Side = styled.div`
    width: 45%;
    display: flex;
    flex-direction: column;
    gap: 15px;
`

const InpiutWrapper = styled.div`
    position: relative;
    height: 35px;
`

const Input = styled.input`
    width: 100%;
    height: 100%;
    border: 0;
    outline: 0;
    padding-left: 5%;
    color: white;
    font-weight: 600;
    backdrop-filter: blur(6px);
    background-color: rgba(190, 228, 250, 0.3);
`

const FinalPage = () => {
    return (
        <GradientBackground gradient="linear-gradient(90deg, #00c3ff 0%, #096d94 46%, rgba(0,31,49,1) 91%)">
            <img style={{position: 'absolute', width: '100%', bottom: 0, height: '100%', zIndex: 0}} alt="fwe" src={back}></img>
            <StyledStartPage>
                <Name>
                    <div></div>
                    <h1>ГАЗСТРОЙПРОМ</h1>
                    <div></div>
                </Name>
                <Main>
                    <Side>
                        <h1 style={{color: 'white', fontSize: 16}}>Ура-ура, все локации пройдены и буквы собраны!</h1>
                        <Char chars={['И','Н','Н','О','В','А','Ц','И','И']}></Char>
                        <h1 style={{color: 'white', fontSize: 16, fontWeight: 500}}>Квест пройден — теперь можешь оставить свой номер ниже и участвовать в розыгрыше приза:</h1>
                        <InpiutWrapper>
                            <Input type={'number'}></Input>
                            <div style={{position: 'absolute', right: '1%', bottom: -40}}>
                                <GreenButton func={() => {}}>Отправить</GreenButton>
                            </div>
                        </InpiutWrapper>
                    </Side>
                    <Side>
                        <h1 style={{color: 'white', fontSize: 16, fontWeight: 600}}>Мы внедряем современные и технологичные инструменты во все сферы работы. Что если именно ты станешь участником нового инновационного проекта?</h1>
                        <GreenButton width={70} func={() => {}}>К вакансиям</GreenButton>
                    </Side>
                </Main>
            </StyledStartPage>
        </GradientBackground>
    )
}

export default FinalPage