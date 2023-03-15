import { useState } from "react"
import styled from "styled-components"
import { setCurPage } from "../../store/page"
import GameRule from "../GameRule/GameRule"
import GazpromName from "../UI/GazpromName/GazpromName"
import GradientBackground from "../UI/GradientBackground/GradientBackground"
import GreenButton from "../UI/GreenButton/GreenButton"
import back from './back.png'
import sqr1 from './sqr1.png'
import sqr2 from './sqr2.png'
import sqr3 from './sqr3.png'
import sqr4 from './sqr4.png'
import sqr5 from './sqr5.png'
import sqr6 from './sqr6.png'
import sqr7 from './sqr7.png'
import sqr8 from './sqr8.png'
import sqr9 from './sqr9.png'
import sqr10 from './sqr10.png'
import sqr11 from './sqr11.png'
import sqr12 from './sqr12.png'
import sqr13 from './sqr13.png'
import sqr14 from './sqr14.png'
import sqr15 from './sqr15.png'
import sqr16 from './sqr16.png'
import sqr17 from './sqr17.png'
import sqr18 from './sqr18.png'
import sqr19 from './sqr19.png'
import sqr20 from './sqr20.png'

import sqrwin1 from './sqrwin1.png'
import sqrwin2 from './sqrwin2.png'
import sqrwin3 from './sqrwin3.png'
import sqrwin4 from './sqrwin4.png'
import sqrwin5 from './sqrwin5.png'
import sqrwin6 from './sqrwin6.png'
import sqrwin7 from './sqrwin7.png'
import sqrwin8 from './sqrwin8.png'
import sqrwin9 from './sqrwin9.png'
import sqrwin12 from './sqrwin12.png'
import sqrwin13 from './sqrwin13.png'
import sqrwin14 from './sqrwin14.png'
import sqrwin16 from './sqrwin16.png'
import sqrwin17 from './sqrwin17.png'
import { setCharModal } from "../../store/CharModal"



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
`


const ImgCard = styled.img<{top: number, left: number, rotate: number}>`
    width: 20%;
    height: 25%;
    top: ${props => props.top}%;
    left: ${props => props.left}%;
    transition: 0.3s;
    transform: rotate(${props => props.rotate}deg);
    position: absolute;
`




const TrubaPage = () => {
    const [isWin, setIsWin] = useState(false)

    const [area, setArea] = useState(
        [
            {
                img: isWin? sqrwin1 : sqr1,
                left: 0,
                top: 0,
                rotate: 90
            },
            {
                img: sqr2,
                left: 20,
                top: 0,
                rotate: 180
            },
            {
                img: sqr3,
                left: 40,
                top: 0,
                rotate: 90
            },
            {
                img: sqr4,
                left: 60,
                top: 0,
                rotate: 270
            },
            {
                img: sqr5,
                left: 80,
                top: 0,
                rotate: 90
            },
            {
                img: sqr6,
                left: 0,
                top: 25,
                rotate: 360
            },
            {
                img: sqr7,
                left: 20,
                top: 25,
                rotate: 90
            },
            {
                img: sqr8,
                left: 40,
                top: 25,
                rotate: 270
            },
            {
                img: sqr9,
                left: 60,
                top: 25,
                rotate: 270
            },
            {
                img: sqr10,
                left: 80,
                top: 25,
                rotate: 270
            },
            {
                img: sqr11,
                left: 0,
                top: 50,
                rotate: 90
            },
            {
                img: sqr12,
                left: 20,
                top: 50,
                rotate: 360
            },
            {
                img: sqr13,
                left: 40,
                top: 50,
                rotate: 90
            },
            {
                img: sqr14,
                left: 60,
                top: 50,
                rotate: 270
            },
            {
                img: sqr15,
                left: 80,
                top: 50,
                rotate: 90
            },
            {
                img: sqr16,
                left: 0,
                top: 75,
                rotate: 180
            },
            {
                img: sqr17,
                left: 20,
                top: 75,
                rotate: 360
            },
            {
                img: sqr18,
                left: 40,
                top: 75,
                rotate: 180
            },
            {
                img: sqr19,
                left: 60,
                top: 75,
                rotate: 180
            },
            {
                img: sqr20,
                left: 80,
                top: 75,
                rotate: 270
            },
        ]
    )



    const rotateHandler = (i: number) => {
        if(isWin) return

        const newArr = [...area]

        if(newArr[i].rotate === 360) newArr[i].rotate = 0
        else newArr[i].rotate += 90

        let isNowWin = true

        if(![180, 360, 0].includes(newArr[0].rotate)) {
            isNowWin = false
        }
        if(![180, 360, 0].includes(newArr[1].rotate)) {
            isNowWin = false
        }
        if(newArr[2].rotate !== 360) {
            isNowWin = false
        }
        if(![360, 270, 0].includes(newArr[3].rotate)) {
            isNowWin = false
        }
        if(![360, 180].includes(newArr[4].rotate)) {
            isNowWin = false
        }
        if(![360, 270, 0].includes(newArr[5].rotate)) {
            isNowWin = false
        }
        if(newArr[6].rotate !== 360) {
            isNowWin = false
        }
        if(![0, 180, 360].includes(newArr[7].rotate)) {
            isNowWin = false
        }
        if(![0, 180, 360].includes(newArr[8].rotate)) {
            isNowWin = false
        }
        if(![0, 180, 360].includes(newArr[11].rotate)) {
            isNowWin = false
        }
        if(![360, 0].includes(newArr[12].rotate)) {
            isNowWin = false
        }
        if(![360, 0].includes(newArr[13].rotate)) {
            isNowWin = false
        }
        if(![0, 180, 360].includes(newArr[15].rotate)) {
            isNowWin = false
        }
        if(![360, 0].includes(newArr[16].rotate)) {
            isNowWin = false
        }

        if(isNowWin) {
            setIsWin(isNowWin)
            newArr[0].img = sqrwin1
            newArr[1].img = sqrwin2
            newArr[2].img = sqrwin3
            newArr[3].img = sqrwin4
            newArr[4].img = sqrwin5
            newArr[5].img = sqrwin6
            newArr[6].img = sqrwin7
            newArr[7].img = sqrwin8
            newArr[8].img = sqrwin9
            newArr[11].img = sqrwin12
            newArr[12].img = sqrwin13
            newArr[13].img = sqrwin14
            newArr[15].img = sqrwin16
            newArr[16].img = sqrwin17
        }
        else {
            setArea(newArr)
        }

    }


    const buttonHandler = () => {
        setCurPage(3)
        setCharModal()
    }

    return (
        <GradientBackground gradient={`url('${back}')`}>
            <GameRule />
            <GazpromName textOne="Чаяндинское НГКМ" />
            <div style={{ position: 'absolute', background: 'linear-gradient(180deg, #15B8AD -9.43%, rgba(21, 112, 184, 0.49) 41.3%, rgba(7, 29, 47, 0.7) 100%)', width: '100%', height: '100vh', zIndex: -1 }}></div>
            <Wrapper>
                <GameWrapper>
                    {area.map((card, i) => {
                        return <ImgCard onClick={() => rotateHandler(i)} rotate={card.rotate} src={card.img} top={card.top} left={card.left}></ImgCard>
                    })}
                    <div style={{color: 'white', fontSize: 24, fontWeight: 600, position: 'absolute', left: '-10%', bottom: 0}}>A</div>
                    <div style={{color: 'white', fontSize: 24, fontWeight: 600, position: 'absolute', right: '-10%', top: 0}}>B</div>
                </GameWrapper>
            </Wrapper>
            {
                isWin?
                <div style={{position: 'absolute', bottom: '5%', right: '5%'}}>
                    <GreenButton func={buttonHandler}>Красота!</GreenButton>
                </div>
                :
                <div style={{position: 'absolute', bottom: '5%', right: '5%'}}>
                    <GreenButton inActive func={() => {}}>Красота!</GreenButton>
                </div>
            }
        </GradientBackground>
    )
}

export default TrubaPage