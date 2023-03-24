import styled from "styled-components"
import { setCurPage } from "../../store/page"
import GradientBackground from "../UI/GradientBackground/GradientBackground"
import GreenButton from "../UI/GreenButton/GreenButton"
import back from './back.png'

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
    font-size: 15px;
    @media (max-height: 320px) {
        font-size: 12px !important;
    }
    font-weight: 500;
    padding: 0 calc(5% + 15px);
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
    button:nth-child(1) {
        background: #BEE4FA4D;
    }
`


export const NextPage = () => {
    return (
        <GradientBackground gradient="linear-gradient(90.45deg, #1570B8 23.72%, #080f1e 100%)">
            <img style={{position: 'absolute', width: '100%', bottom: 0, height: '90%', zIndex: 0}} alt="fwe" src={back}></img>
            <StyledStartPage>
                <Name>
                    <div></div>
                    <h1>ГАЗСТРОЙПРОМ</h1>
                    <div></div>
                </Name>


                <div style={{display: 'flex', flexDirection: 'column', gap: 15}}>
                    <MainText><span style={{fontWeight: 600}}>«Газстройпром» уже стал тебе немного ближе.</span> Но это было лишь одно из крупнейших месторождений и малая частица секретного слова!</MainText>
                    <MainText><span style={{fontWeight: 600}}>Ты уже можешь перейти к вакансиям. Либо продолжи знакомство с компанией, собрав все буквы для участия в розыгрыше! К карьере вернёшься в конце квеста ;)</span></MainText>
                </div>
                
                <Footer>
                    <GreenButton func={() => setCurPage(9)}>К вакансиям</GreenButton>
                    <GreenButton func={() => setCurPage(2)}>Продолжить игру</GreenButton>
                </Footer>
            </StyledStartPage>
        </GradientBackground>
    )
}

export default NextPage