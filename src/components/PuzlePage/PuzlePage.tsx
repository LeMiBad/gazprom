import { useEffect, useState } from "react"
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


function swapIfNeeded(col: number, i: number, area: Array<Array<{ left: number, top: number, img: string } | null>>): Array<Array<{ left: number, top: number, img: string } | null>> {
    const result = area.map(row => [...row]);
    const currentItem = result[col][i];

    if (currentItem === null) {
        return result;
    }

    if (col > 0 && result[col - 1][i] === null) {
        [result[col - 1][i], result[col][i]] = [currentItem, null];
        return result;
    }

    if (col < result.length - 1 && result[col + 1][i] === null) {
        [result[col + 1][i], result[col][i]] = [currentItem, null];
        return result;
    }

    if (i > 0 && result[col][i - 1] === null) {
        [result[col][i - 1], result[col][i]] = [currentItem, null];
        return result;
    }

    if (i < result[col].length - 1 && result[col][i + 1] === null) {
        [result[col][i + 1], result[col][i]] = [currentItem, null];
        return result;
    }

    return result;
}

const setterPosition = (arr: Array<Array<{ left: number, top: number, img: string } | null>>) => {
    const result = [...arr]

    arr.forEach((col, colI) => {
        col.forEach((item, i) => {
            if (item) {
                result[colI][i] = { ...item, top: colI * 25, left: i * 25 }
            }
        })
    })


    return result
}


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
    width: 270px; 
    height: 270px; 
    position: relative;
`


const ImgAbs = styled.img<{ top?: number, left?: number }>`
    width: 25%;
    height: 25%;
    position: absolute;
    ${props => props.left ? `left: ${props.left}%;` : ''};
    ${props => props.top ? `top: ${props.top}%;` : ''};
`

const needed = [sqr3, sqr5, sqr1, sqr8, sqr2, sqr7, sqr4, sqr6, null]

const PuzlePage = () => {
    const [isWin, setIsWin] = useState(false)
    const [area, setArea] = useState(
        [
            [
                {
                    img: sqr1,
                    left: 0,
                    top: 0
                },
                {
                    img: sqr2,
                    left: 25,
                    top: 0
                },
                {
                    img: sqr3,
                    left: 50,
                    top: 0
                },
                {
                    img: sqr4,
                    left: 75,
                    top: 0
                },
            ],
            [
                {
                    img: sqr5,
                    left: 0,
                    top: 25
                },
                {
                    img: sqr6,
                    left: 25,
                    top: 25
                },
                {
                    img: sqr7,
                    left: 50,
                    top: 25
                },
                {
                    img: sqr8,
                    left: 75,
                    top: 25
                },
            ],
            [
                {
                    img: sqr9,
                    left: 0,
                    top: 50
                },
                {
                    img: sqr10,
                    left: 25,
                    top: 50
                },
                {
                    img: sqr11,
                    left: 50,
                    top: 50
                },
                {
                    img: sqr12,
                    left: 75,
                    top: 50
                },
            ],
            [
                {
                    img: sqr13,
                    left: 0,
                    top: 75
                },
                {
                    img: sqr14,
                    left: 25,
                    top: 75
                },
                {
                    img: sqr15,
                    left: 50,
                    top: 75
                },
                null
            ],
        ]
    )


    useEffect(() => {
        setIsWin(needed.map(item => item? item : 'null').join('') === area.flat(1).map(item => item? item.img : 'null').join(''))
    }, [area, isWin])

    const handler = (col: number, i: number) => {
        setArea(setterPosition(swapIfNeeded(col, i, area)))
    }



    return (
        <GradientBackground gradient={`url('${back}')`}>
            <GameRule />
            <GazpromName textOne="???????????? ??????" />
            <div style={{ position: 'absolute', background: 'linear-gradient(180deg, #15B8AD -9.43%, rgba(21, 112, 184, 0.49) 41.3%, rgba(7, 29, 47, 0.7) 100%)', width: '100%', height: '100vh', zIndex: -1 }}></div>
            <Wrapper>
                <GameWrapper>
                    {area.map((col, colI) => col.map((item, i) => {
                        return item ? <ImgAbs onClick={() => handler(colI, i)} key={item.img} src={item.img} alt={'fw'} left={item.left} top={item.top}></ImgAbs>
                            : null
                    }))}
                </GameWrapper>
            </Wrapper>
            {
                isWin?
                <div style={{position: 'absolute', bottom: '5%', right: '5%'}}>
                    <GreenButton func={() => {setCurPage(3)}}>??????????????!</GreenButton>
                </div>
                :
                <div style={{position: 'absolute', bottom: '5%', right: '5%'}}>
                    <GreenButton inActive func={() => {}}>??????????????!</GreenButton>
                </div>
            }
        </GradientBackground>
    )
}

export default PuzlePage