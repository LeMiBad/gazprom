import axios from "axios"
import { useEffect, useState } from "react"
import styled from "styled-components"
import Char from "../UI/Char/Char"
import LOGOTIP from "../UI/GazpromName/LOGOTIP"
import GradientBackground from "../UI/GradientBackground/GradientBackground"
import GreenButton from "../UI/GreenButton/GreenButton"
import back from "./back.jpg"
import Check from "./check"

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
    height: 30px;
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
    ::placeholder {
        color: #ffffff91;
    }
`

const CheckWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
    margin-top: 10px;
    p {
        font-size: 8px;
        color: white;
    }
`

const CheckInp = styled.div`
    border: 1px solid;
    box-sizing: border-box;
    border-image: linear-gradient(270deg, #1570B8 0%, #15B8AD 100%) 3;
    outline: none;
    background: rgba(190, 228, 250, 0.3);
    min-width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
`

const ButtonWrapper = styled.div`
    position: absolute; 
    right: 0%; 
    bottom: -90px;
    @media (min-width: 1024px) {
        bottom: -120px;
    }
`

const FinalPage = () => {
    const [isPicked, setIsPicked] = useState(false)
    const [phone, setPhone] = useState("");
    const [isCan, setIsCan] = useState(false)

    useEffect(() => {
        if(isPicked && phone.length === 16) {
            setIsCan(true)
        }
        else setIsCan(false)
    }, [isPicked, phone])

    const pickHandler = () => setIsPicked(isPicked? false : true)

    function handleChange(event: React.ChangeEvent<HTMLInputElement>): void {
        const input = event.target.value.replace(/\D/g, ""); // удаляем все нецифровые символы
        const match = input.match(/^(\d{1})(\d{3})(\d{3})(\d{2})(\d{2})$/); // проверяем соответствие формату
    
        if (match) {
          setPhone(`+7(${match[2]})${match[3]}-${match[4]}-${match[5]}`); // форматируем номер телефона
        } else {
          setPhone(input); // сохраняем введенные символы без изменений
        }
    }


    const phoneSend = () => {
        ym(93030012,'reachGoal','phone')
        axios.get(`https://gaz.vercel.app/phone?number=${phone}`)
    }
    


    return (
        <GradientBackground gradient="linear-gradient(90deg, #00c3ff 0%, #096d94 46%, rgba(0,31,49,1) 91%)">
            <img style={{position: 'absolute', width: '100%', bottom: 0, height: '100%', zIndex: 0}} alt="fwe" src={back}></img>
            <StyledStartPage>
                <Name>
                    <div></div>
                    <LOGOTIP pad={1.5}/>
                    <div></div>
                </Name>
                <Main>
                    <Side>
                        <h1 style={{color: 'white', fontSize: 12}}>Ура-ура, все локации пройдены и буквы собраны!</h1>
                        <Char chars={['И','Н','Н','О','В','А','Ц','И','И']}></Char>
                        <h1 style={{color: 'white', fontSize: 14, fontWeight: 500}}>Квест пройден — теперь можешь оставить свой номер ниже и участвовать в розыгрыше приза:</h1>
                        <InpiutWrapper>
                            <Input placeholder="+7(ХХХ)XХ–ХХ" value={phone} onChange={(e) => handleChange(e)}></Input>
                            <CheckWrapper>
                                <CheckInp onClick={pickHandler}>
                                    {isPicked && <Check/>}
                                </CheckInp>
                                <p>Я согласен на обработку <a target={"_blank"} href="https://fut.ru/personal_data_policy/" style={{color: "white", textDecoration: 'underline'}}>персональных данных</a> и получение информационных сообщений</p>
                            </CheckWrapper>
                            <ButtonWrapper>
                                {isCan? <a style={{color: 'white', textDecoration: "none"}} href="https://vk.com/gsp_start"><GreenButton func={phoneSend}>Отправить</GreenButton></a> : <GreenButton inActive func={() => {}}>Отправить</GreenButton>}
                            </ButtonWrapper>
                        </InpiutWrapper>
                    </Side>
                    <Side>
                        <h1 style={{color: 'white', fontSize: 16, fontWeight: 600}}>Мы внедряем современные и технологичные инструменты во все сферы работы. Что если именно ты станешь участником нового инновационного проекта?</h1>
                        <a target={"_blank"} style={{color: 'white', textDecoration: "none"}} href="https://vk.com/gsp_start"><GreenButton width={70} func={() => {ym(93030012,'reachGoal','final-link')}}>К вакансиям</GreenButton></a>
                    </Side>
                </Main>
            </StyledStartPage>
        </GradientBackground>
    )
}

export default FinalPage
