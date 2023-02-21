import { useState } from "react"
import styled from "styled-components"
import GazpromName from "../UI/GradientBackground/GazpromName"
import GradientBackground from "../UI/GradientBackground/GradientBackground"
import GreenButton from "../UI/GreenButton/GreenButton"
import ask from './../../img/ask.png'
import zeter from './../../img/zeter.png'
import shest from './../../img/shest.png'
import polukrug from './../../img/polukrug.png'



const Wrapper = styled.div`
    position: relative;
    display: flex;
    width: 100%;
    height: 100%;
`

const LeftSide = styled.div`
    width: 50%;
    height: 100%;
    border-right: 0.5px solid white;
    box-sizing: border-box;
`

const RightSide = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    p:nth-child(1) {
        border: 0;
    }
`

const Answer = styled.p<{picked: boolean}>`
    flex: 1 1;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: left;
    padding: 0 23%;
    color: white;
    font-weight: 600;
    border-top: 1px solid white;
    box-sizing: border-box;
    cursor: pointer;
    ${props => props.picked? 'background: linear-gradient(90deg, #1570B8 0%, rgba(21, 184, 173, 0.31) 100%);' : ''}
`

const current = [
    {
        ask: 'Перед тобой выбор: уехать на пару дней в новые края. Что ты предпочтешь?',
        answers: ['пожалуй, выберу что-то ближе к Востоку', 'люблю морозы: Северное сияние и прочие чудеса можно увидеть!', 'мне главное, чтобы рядом была водная гладь'],
        img: zeter
    },
    {
        ask: 'Кто любит мегаполис, а кто — уютные маленькие города. В каждом городе свой ритм жизни, как и на каждом предприятии свой ритм работы. Какие масштабы тебе по душе?',
        answers: ['лучше что-то более скромное, но уютное и не менее перспективное', 'я за большие масштабы, но в меру', 'вижу себя исключительно на самых прославленных в СМИ предприятиях'],
        img: shest
    },
    {
        ask: 'Тебе выпала возможность быть поставщиком ценного и популярного товара. Какую тактику ты выберешь?',
        answers: ['буду поставлять только по внутренним каналам, никакого экспорта за границу!', 'выберу тактику «и нашим, и вашим» и буду поставлять как внутри страны, так и зарубеж'],
        img: polukrug
    },
]

const AskPage = () => {
    const [pickAnswer, setPickAnswer] = useState(-1)
    const [cur, setCur] = useState(0)

    const pickHandler = (index: number) => {
        if(index === pickAnswer) setPickAnswer(-1)
        else setPickAnswer(index)
    }

    const buttonHandler = () => {
            setCur(cur+1)
    }

    console.log(31)
    return (
        <GradientBackground gradient={`url('${ask}')`}>
            <GazpromName/>
            <div style={{position: 'absolute', background: 'linear-gradient(225deg, #1bdbce -10.52%, rgba(21, 112, 184, 0) 100%)', width: '100%', height: '100vh', zIndex: -1}}></div>
            <Wrapper>
                <LeftSide></LeftSide>
                <RightSide>
                    {current[cur].answers.map((answer, i) => {
                        return <Answer picked={i === pickAnswer? true : false} key={i} onClick={() => pickHandler(i)}>{answer}</Answer>
                    })}
                </RightSide>
                {pickAnswer !== -1? 
                    <div style={{position: 'absolute', left: 0, bottom: '5vh'}}>
                        <GreenButton func={buttonHandler}>Далее</GreenButton>
                    </div> 
                    : 
                    null
                }
                <p style={{fontWeight: 700, position: 'absolute', left: '8%', top: '45vh', width: '30%', color: 'white', fontSize: 26}}>{current[cur].ask}</p>
                <img style={{position: 'absolute', left: 0, bottom: 0, width: '45%', zIndex: -1}} alt="" src={current[cur].img} />
            </Wrapper>
        </GradientBackground>
    )
}

export default AskPage