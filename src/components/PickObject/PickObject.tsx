import { useStore } from "effector-react"
import { useState } from "react"
import styled from "styled-components"
import { $askAnswers, pickObject } from "../../store/askAnswers"
import GazpromName from "../UI/GazpromName/GazpromName"
import GradientBackground from "../UI/GradientBackground/GradientBackground"
import background from './img/background.jpg'
import backgroundHigh from './img/backgroundHigh.jpg'
import ObjectModal from "./ObjectModal"


const ObjectsWrapper = styled.div`
    overflow: hidden;
    width: 100%; 
    display: flex; 
    padding: 0 2%;
    box-sizing: border-box;
    height: 70%; 
    justify-content: space-between; 
    position: absolute; 
    bottom: 0;
`

const FakeObjectCard = styled.div`
    width: 25%;
    height: 10px;
`

const ObjectCard = styled.div`
    width: 22%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    position: relative;

    h1 {
        @media (max-width: 768px) {
            font-size: 18px;
        }
        font-size: 22px;
        display: flex;
        justify-content: center;
        align-items: center;
        color: white;
        font-weight: 400;
        text-align: center;
    }

    img {
        width: 100%;
    }
`


// const Eye = styled.img`
//     width: 40px;
//     height: 40px;
//     position: absolute;
//     left: 50%;
// `


const PickObject = () => {
    const answers = useStore($askAnswers)
    const [isVisible, setIsVisible] = useState(false)
    const [curAnswer, setCurAnswer] = useState(answers[0])

    const returnNormalAnswers = (answ: any[]) => {
        if(answ.length === 2) return [null, ...answ]
        else return answ
    }

    const modalHandler = (i?: number) => {
        if(typeof i === 'number') setCurAnswer(answers[i])
        if(isVisible === true) setIsVisible(false)
        else setIsVisible(true)
        if(typeof i === 'number') pickObject(answers[i].index)
    }



    return (
        <GradientBackground gradient={`url('${window.innerWidth < 1024? background : backgroundHigh}')`}>
            {
                isVisible? <>
                    <ObjectModal data={curAnswer} close={modalHandler}/>
                </>
                : 
                null
            }
            <GazpromName textOne="Идеальны для тебя:"  textTwo='Жми на иконки, чтобы выбрать объект и перейти к нему'/>
            <div style={{position: 'absolute', background: 'linear-gradient(180deg, #15B8AD -9.43%, rgba(21, 112, 184, 0.49) 41.3%, rgba(7, 29, 47, 0.7) 100%)', width: '100%', height: '100vh', zIndex: -1}}></div>
            <ObjectsWrapper>
                {returnNormalAnswers(answers).map((card: any, i: number) => {
                    if(card) return <ObjectCard onClick={() => modalHandler(returnNormalAnswers(answers)[0]? i : i-1)} key={card.image}>
                                        <img alt={card.name} src={card.image}></img>
                                        <h1>{card.name}</h1>
                                        {/* <Eye src={eye} alt='eye' /> */}
                                    </ObjectCard>
                    else return <FakeObjectCard></FakeObjectCard>
                })}
            </ObjectsWrapper>
        </GradientBackground>
    )
}

export default PickObject