import React, { useEffect, useState } from "react"
import styled, { keyframes } from "styled-components"
import { setCurPage } from "../../store/page"
import GameRule from "../GameRule/GameRule"
import GazpromName from "../UI/GazpromName/GazpromName"
import GradientBackground from "../UI/GradientBackground/GradientBackground"
import GreenButton from "../UI/GreenButton/GreenButton"
import back from './back.png'
import {areaCell} from './area'
import BigAvto from "./BigAvto"
import MiddleAvto from "./MiddleAvto"
import SmallAvto from "./SmallAvto"


const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    box-sizing: border-box;
    padding-top: 10%;
    padding-bottom: 2%;
    justify-content: center;
    align-items: flex-end;
    overflow: hidden;
`

const GameWrapper = styled.div`
    width: 300px; 
    height: 240px; 
    position: relative;
    display: flex;
    flex-direction: column;
`

const Row = styled.div`
    display: flex;
    height: 25%;
`

const Сell = styled.div<{top: number, left: number, positive?: boolean, danger?: boolean, picked?: boolean}>`
    width: 20%;
    height: 100%;
    top: ${props => props.top}%;
    left: ${props => props.left}%;
    transition: 0.3s;
    background-color: ${props => props.positive? '#15b87780' : props.danger? '#d02c2c5a' : props.picked? '#15B8AD80' : 'rgba(256, 256, 256, 0.3)'};
    outline: 0.1px solid white;
    /* position: absolute; */
`

const AvtoWrapper = styled.div`
    position: absolute;
    bottom: 10px;
    left: 10px;
    display: flex;
    flex-direction: column-reverse;
    align-items: flex-end;
    gap: 15px;
`

const AvtoCard = styled.div`
    display: flex;
    align-items: flex-end;
    gap: 5px;
`

const AutoCounter = styled.div`
    color: white;
    font-weight: 600;
`

const AvtoAnim = keyframes`
    0%, 100% {
        transform: translate3d(0, 0, 0);
    }
    10%, 30%, 50%, 70%, 90% {
        transform: translate3d(-5px, 0, 0) rotate3d(0, 0, 1, -5deg);
    }
    20%, 40%, 60%, 80% {
        transform: translate3d(5px, 0, 0) rotate3d(0, 0, 1, 5deg);
    }
`

const PickedAuto = styled.div<{anim?: boolean}>`
    position: absolute;
    width: 100px;
    height: 100px;
    right: 5%;
    bottom: 30%;
    display: flex;
    animation: ${props => props.anim? AvtoAnim : null} 1.5s infinite;
    align-items: center;
`


const AvtoPage = () => {
    const [isWin, setIsWin] = useState(false)
    const [area, setArea] = useState(areaCell)
    const [pickedAvto, setPickedAvto] = useState(<BigAvto/>)
    const [cars, setCars] = useState([{car: <BigAvto/>, counter: 1}, {car: <MiddleAvto/>, counter: 3}, {car: <SmallAvto/>, counter: 2}])
    const [isShake, setIsShake] = useState(false)


    useEffect(() => {
        window.addEventListener('touchstart', () => {
            setIsShake(true)
        })
        window.addEventListener('touchend', () => {
            setIsShake(false)
        })
    }, [])


    const PickAvto = (img: React.ReactElement) => {
        if(img === pickedAvto) setPickedAvto(<></>)
        else setPickedAvto(img)
    }
    

    const touch = () => {
        
    }


    return (
        <GradientBackground gradient={`url('${back}')`}>
            <GameRule />
            <GazpromName textOne="Омский НПЗ" />
            <AvtoWrapper>
                {cars.map(car => {
                    return <AvtoCard key={car.counter} onClick={() => PickAvto(car.car)}>
                        {car.car}
                        <AutoCounter>{car.counter}</AutoCounter>
                    </AvtoCard>
                })}
            </AvtoWrapper>
            <PickedAuto anim={isShake}>
                {pickedAvto}
            </PickedAuto>
            <div style={{ position: 'absolute', background: 'linear-gradient(180deg, #15B8AD -9.43%, rgba(21, 112, 184, 0.49) 41.3%, rgba(7, 29, 47, 0.7) 100%)', width: '100%', height: '100vh', zIndex: -1 }}></div>
            <Wrapper>
                <GameWrapper>
                    {area.map(row => {
                        return <Row>
                            {row.map(cell => {
                                return <Сell key={cell.left + cell.top} left={cell.left} top={cell.top}></Сell>
                            })}
                        </Row>
                    })}
                    <div style={{position: 'absolute', left: 10}}>
                        <BigAvto></BigAvto>
                    </div>
                    <div style={{position: 'absolute', left: 0, top: '25%'}}>
                        <MiddleAvto></MiddleAvto>
                    </div>
                    <div style={{position: 'absolute', left: 0, top: '55%'}}>
                        <SmallAvto></SmallAvto>
                    </div>
                </GameWrapper>
            </Wrapper>
            {
                isWin?
                <div style={{position: 'absolute', bottom: '5%', right: '5%'}}>
                    <GreenButton func={() => {setCurPage(3)}}>Красота!</GreenButton>
                </div>
                :
                <div style={{position: 'absolute', bottom: '5%', right: '5%'}}>
                    <GreenButton inActive func={() => {}}>Красота!</GreenButton>
                </div>
            }
        </GradientBackground>
    )
}   

export default AvtoPage