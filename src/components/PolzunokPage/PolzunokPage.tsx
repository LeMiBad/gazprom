import { useEffect, useState } from "react"
import styled from "styled-components"
import GameRule from "../GameRule/GameRule"
import GazpromName from "../UI/GazpromName/GazpromName"
import GradientBackground from "../UI/GradientBackground/GradientBackground"
import GreenButton from "../UI/GreenButton/GreenButton"
import back from './back.jpg'
import modal1 from './modal1.jpg'
import modal2 from './modal2.jpg'
import modal3 from './modal3.jpg'
import PolzunokModal from "./PolzunokModal"

function formatNumber(numberString: string): string {
    const number = parseInt(numberString);
    const formattedNumber = number.toLocaleString().replace(/,/g, " ");
    return formattedNumber;
}

const Wrapper = styled.div`
    margin: 0 auto;
    width: 80%;
    height: 100%;
    box-sizing: border-box;
    padding-top: 17%;
    padding-bottom: 15%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    overflow: hidden;
`

const Ask = styled.p`
    max-width: 100%;
    color: white;
    font-size: 16px;
    font-weight: 700;
`


const RangeInput = styled.input`
    width: 100%;
    height: 20px;
    @media (min-width: 1024px) and (max-width: 1440px) {
        height: 100px !important;
    }
    margin: 0;
    -webkit-appearance: none;

    &::-webkit-slider-runnable-track {
        width: 100%;
        height: 20px;
        @media (min-width: 1024px) and (max-width: 1440px) {
            height: 100px !important;
        }
        background-color: rgba(190, 228, 250, 0.67);
    }

    &::-webkit-slider-thumb {
        -webkit-appearance: none;
        width: 20px;
        height: 20px;
        @media (min-width: 1024px) and (max-width: 1440px) {
            height: 100px !important;
            width: 10%  !important;
        }
        background: linear-gradient(270deg, #1570B8 -10.32%, #15B8AD 110.36%);
        padding-top: 10px;
        cursor: pointer;
    }
`;

const RangeWrapper = styled.div`
    width: 100%;
    position: relative;
`

const MinMaxRange = styled.div<{right: boolean}>`
    position: absolute; 
    ${props => props.right? 'right' : 'left'}: 0px;
    bottom: -20px; 
    color: white;
    font-weight: 600;
`


const asks = [
    {
        text: 'Сколько единиц техники в арсенале Газстройпрома?',
        min: 5000,
        max: 30000,
        step: 500,
        need: '20 000',
        img: modal1
    },
    {
        text: 'На сколько в компании застрахованы вахтовые работники?',
        min: 50000,
        max: 1000000,
        step: 10000,
        need: '1 000 000',
        img: modal2
    },
    {
        text: 'Сколько человек работает в Газстройпроме?',
        min: 0,
        max: 100000,
        step: 10000,
        need: '90 000',
        img: modal3
    },
]



const PolzunokPage = () => {
    const [rangeValue, setRangeValue] = useState('100')
    const [curAsk, setCurAsk] = useState(0)
    const [modal, setModal] = useState(false)


    useEffect(() => {
        setRangeValue(String(asks[curAsk].max - ((asks[curAsk].max - asks[curAsk].min) / 2)))
    }, [curAsk])

    const buttonHandler = () => {
        // if(curAsk === 2) {
        //     setCharModal()
        //     setCurPage(3)
        // }
        setModal(true)
    }



    return (
        <>
            <GradientBackground gradient={`url('${back}')`}>
                {
                    modal? <PolzunokModal chunk={asks[curAsk].step} curAsk={curAsk} setCurAsk={setCurAsk} neededNum={asks[curAsk].need} img={asks[curAsk].img} num={+rangeValue} setModal={setModal} /> : null
                }
                <GameRule />
                <GazpromName textOne="Харасавэйское ГКМ" />
                <div style={{ position: 'absolute', background: 'linear-gradient(180deg, #15B8AD -9.43%, rgba(21, 112, 184, 0.49) 41.3%, rgba(7, 29, 47, 0.7) 100%)', width: '100%', height: '100vh', zIndex: -1 }}></div>
                <Wrapper>
                    <Ask>{asks[curAsk].text}</Ask>
                    <div style={{color: 'white', fontWeight: 600, fontSize: 22}}>{formatNumber(rangeValue)}</div>
                    <RangeWrapper>
                        <RangeInput value={rangeValue} onChange={(e) => {setRangeValue(e.currentTarget.value)}} type="range" min={`${asks[curAsk].min}`} max={`${asks[curAsk].max}`} step={`${asks[curAsk].step}`}></RangeInput>
                        <MinMaxRange right={false} style={{position: 'absolute', left: 0, bottom: '-20px'}}>{asks[curAsk].min}</MinMaxRange>
                        <MinMaxRange right style={{position: 'absolute', right: 0, bottom: '-20px'}}>{asks[curAsk].max}</MinMaxRange>
                    </RangeWrapper>
                    <div style={{position: 'absolute', right: '5%', bottom: '5%'}}>
                        <GreenButton func={buttonHandler}>Правильно?</GreenButton>
                    </div>
                </Wrapper>
            </GradientBackground>
        </>
    )
}

export default PolzunokPage