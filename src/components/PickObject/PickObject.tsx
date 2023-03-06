import { useStore } from "effector-react"
import { useState } from "react"
import styled from "styled-components"
import { $askAnswers } from "../../store/askAnswers"
import GazpromName from "../UI/GazpromName/GazpromName"
import GradientBackground from "../UI/GradientBackground/GradientBackground"
import background from './img/background.png'
import ObjectModal from "./ObjectModal"


const ObjectsWrapper = styled.div`
    width: 100%; 
    display: flex; 
    height: 70%; 
    justify-content: space-between; 
    position: absolute; 
    bottom: 0;
`

const ObjectCard = styled.div`
    width: 25%;
    @media (max-width: 768px) {
        font-size: 14px;
    }
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    position: relative;

    h1 {
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


    const modalHandler = (i?: number) => {
        if(typeof i === 'number') setCurAnswer(answers[i])
        if(isVisible === true) setIsVisible(false)
        else setIsVisible(true)
    }


    return (
        <GradientBackground gradient={`url('${background}')`}>
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
                {answers.map((card: any, i: number) => <ObjectCard onClick={() => modalHandler(i)} key={card.image}>
                        <img alt={card.name} src={card.image}></img>
                        <h1>{card.name}</h1>
                        {/* <Eye src={eye} alt='eye' /> */}
                    </ObjectCard>
                )}
            </ObjectsWrapper>
        </GradientBackground>
    )
}

export default PickObject