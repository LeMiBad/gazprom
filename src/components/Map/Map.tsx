import styled from "styled-components"
import GazpromName from "../UI/GazpromName/GazpromName"
import GradientBackground from "../UI/GradientBackground/GradientBackground"
import back from './mapBack.png'
import rus from './rus.png'
import Mark1 from "./Mark1"
import Mark2 from "./Mark2"
import Mark3 from "./Mark3"
import Mark4 from "./Mark4"
import Mark5 from "./Mark5"
import Mark6 from "./Mark6"
import Mark7 from "./Mark7"
import { useEffect } from "react"
import { useStore } from "effector-react"
import { $competedObject } from './../../store/askAnswers'
import { setCurPage } from "../../store/page"
import { $lol, lolturn } from "../../store/lol"


const RussiaWrapper = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-end;
`

const Russia = styled.img`
    bottom: 0;
    left: 0;
    @media (min-width: 533px) and (max-width: 645px) {
        width: 525px;
    }
    @media (min-width: 645px) and (max-width: 768px) {
        width: 625px;
    }
    @media (min-width: 768px) and (max-width: 1024px) {
        width: 768px;
    }
    @media (min-width: 1024px) and (max-width: 1440px) {
        width: 1024px;
    }
    @media (min-width: 1440px) {
        width: 1024px;
    }
`
    
const MarkWrapper = styled.div`
    position: relative;
    svg {
        cursor: pointer;
    }
`

const Map = () => {
    const completed = useStore($competedObject)
    const lol = useStore($lol)


    useEffect(() => {
        let isCan = true
        let counter = 7

        if(completed.b === false) {
            isCan = false
            counter-=1
        }
        if(completed.z === false) {
            isCan = false
            counter-=1
        }
        if(completed.ch === false) {
            isCan = false
            counter -=1 
        }
        if(completed.h === false) {
            isCan = false
            counter -= 1
        }
        if(completed.k === false) {
            isCan = false
            counter -= 1
        }
        if(completed.u === false) {
            isCan = false
            counter -= 1
        }
        if(completed.o === false) {
            isCan = false
            counter -= 1
        }
        
        if(counter === 1 && !lol) {
            setCurPage(10)
            lolturn()
        }

        if(isCan) {
            setCurPage(9)
        }
    }, [completed])

    return (
        <GradientBackground gradient={`url('${back}')`}>
            <GazpromName/>
            <div style={{position: 'absolute', background: 'linear-gradient(-180deg, rgb(21, 184, 173) -13.59%, rgba(21, 112, 184, 0.49) 107.08%)', width: '100%', height: '100vh', zIndex: -1}}></div>
            <RussiaWrapper>
                <MarkWrapper>
                    <Russia alt="rus" src={rus}/>
                    <Mark1 vis/>
                    <Mark2 vis/>
                    <Mark3 vis/>
                    <Mark4 vis/>
                    <Mark5 vis/>
                    <Mark6 vis/>
                    <Mark7 vis/>
                </MarkWrapper>
            </RussiaWrapper>
        </GradientBackground>
    )
}

export default Map