import styled from "styled-components"
import { setCurPage } from "../../store/page"
import GradientBackground from "../UI/GradientBackground/GradientBackground"
import GreenButton from "../UI/GreenButton/GreenButton"
import back from './../../img/union.png'
import backHigh from './../../img/unionHigh.png'

const StyledStartPage = styled.div`
    position: relative;
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    background: linear-gradient(90deg, #00c3ff 0%, rgba(9, 109, 148, 0.6) 46%, rgba(0,31,49,0) 91%);
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

const MainText = styled.p`
    box-sizing: border-box;
    color: white;
    font-size: 16px;
    @media (max-height: 320px) {
        font-size: 12px !important;
    }
    font-weight: 700;
    /* padding: 0 calc(5% + 15px); */
    width: 55%;
`

const Footer = styled.div`
    box-sizing: border-box;
    padding: 0 calc(5% + 15px);
    color:  white;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    p {
        font-size: 16px;
        width: 55%;
        font-weight: 600;
    }
    @media (max-height: 320px) {
        p {
            font-size: 12px;
        }
    }
`


const ButtonWrapper = styled.div`
    button {
        width: 220px !important;
    }
`


export const StartPage = () => {
    const buttonHandler = () => setCurPage(1)



    return (
        <GradientBackground gradient="linear-gradient(90deg, #00c3ff 0%, #096d94 46%, rgba(0,31,49,1) 91%)">
            <img style={{position: 'absolute', width: '100%', bottom: 0, height: '75%', zIndex: 0}} alt="fwe" src={window.innerWidth < 1024? back : backHigh}></img>
            <StyledStartPage>
                <Name>
                    <div></div>
                    <h1>ГАЗСТРОЙПРОМ</h1>
                    <div></div>
                </Name>
                
                <Footer>
                    <div style={{display: 'flex', flexDirection: 'column', gap: 15, justifyContent: 'flex-start'}}>
                        <MainText>Газстройпром богат на точки с месторождениями газа и нефти. Речь здесь не только о важных для страны объектах, но и о живописных ландшафтах и перспективных местах для работы.</MainText>
                        <p>Проходи мини-тест — узнай, какие объекты созданы специально для тебя! А после тебя ждёт полное погружение в завораживающие процессы на этих точках месторождений.</p>
                    </div>
                    <ButtonWrapper onClick={() => {ym(93030012,'reachGoal','start')}}>
                        <GreenButton width={210} func={buttonHandler}>Полный вперёд</GreenButton>
                    </ButtonWrapper>
                </Footer>
            </StyledStartPage>
        </GradientBackground>
    )
}

export default StartPage
