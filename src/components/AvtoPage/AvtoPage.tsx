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
import { setCharModal } from "../../store/CharModal"

interface ICar {
    car: JSX.Element
    counter: number
    type: string | null
}

interface SettedCar {
    car: JSX.Element
    counter: number
    type: string | null
    left: number
    top: number
    width: number
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

const Сell = styled.div<{top: number, left: number, rowI: number, color?: string}>`
    width: 20%;
    height: 100%;
    top: ${props => props.top}%;
    left: ${props => props.left}%;
    /* transition: 0.3s; */
    background-color: ${props => props.color};
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
    const [last, setLast] = useState('00')
    const [pickedAvto, setPickedAvto] = useState<ICar>({car: <></>, counter: 0, type: null})
    const [cars, setCars] = useState([{car: <BigAvto/>, counter: 2, type: 'big'}, {car: <MiddleAvto/>, counter: 4, type: 'middle'}, {car: <SmallAvto/>, counter: 4, type: 'small'}])
    const [isShake, setIsShake] = useState(false)
    const [settedCars, setSettedCars] = useState<SettedCar[]>([])

    const reload = () => {
        setPickedAvto({car: <></>, counter: 0, type: null})
        setArea(areaCell.map(row => {
            return row.map(item => {
                item.color = 'null'
                return item
            })
        }))
        setCars([{car: <BigAvto/>, counter: 2, type: 'big'}, {car: <MiddleAvto/>, counter: 4, type: 'middle'}, {car: <SmallAvto/>, counter: 4, type: 'small'}])
        setSettedCars([])
    }

    useEffect(() => {
        let isCan = true

        cars.forEach(car => {
            if(car.counter) isCan = false
        })

        if(isCan) setIsWin(true)
    }, [cars])


    const placeCar = (car: ICar, rowI: number, cellI: number) => {
        const newCars = [...settedCars]
        const newArea = [...area]
        const oldPlacers = [...cars]
        let width = car.type === 'big'? 60 : car.type === 'middle'? 40 : 20

        
        newCars.push({...car, top: rowI * 25, left: cellI * 20, width})


        for(let i = 0; i < newArea.length; i++) {
            if(i === rowI) {
                let close = width/20
                for(let j = cellI; j < cellI + close; j++) {
                    newArea[i][j].color = 'picked'
                }
            }
        }

        const newPlacers = oldPlacers.map(placer => {
            if(placer.type === car.type) return {...placer, counter: placer.counter -1} 
            else return placer
        })

        setCars(newPlacers)
        setArea(newArea)
        setSettedCars(newCars)
    }


    useEffect(() => {
        window.addEventListener('touchstart', () => {
            setIsShake(true)
        })
        window.addEventListener('touchend', () => {
            setIsShake(false)
        })
    }, [])


    const paint = (cords: {rowI: number, i: number}[], color: string) => {
        const newArea = [...area]

        cords.forEach(cord => {
            const y = cord.rowI
            const x = cord.i

            newArea[y][x].color = color

            setArea(newArea)
        })
    }


    const PickAvto = (avto: ICar) => {
        if(avto.type === pickedAvto.type) setPickedAvto({car: <></>, counter: 0, type: null})
        else if(avto.counter) setPickedAvto(avto)
    }


    const touchCell = (e: React.TouchEvent<HTMLDivElement>) => {
        const X = e.changedTouches[0].clientX
        const Y = e.changedTouches[0].clientY
        const cell = document.elementFromPoint(X, Y)?.tagName === 'DIV'? document.elementFromPoint(X, Y) : null


        setArea(areaCell)
        if(!pickedAvto.type) return
        
        if(cell?.tagName === 'DIV' && cell.classList.length) {
            const rowI = cell.getAttribute('data-cords')?.split(',')[0]
            const i = cell.getAttribute('data-cords')?.split(',')[1]


            
            if(last !== `${rowI}${i}`) {
                setArea(area.map(row => {
                    return row.map(cell => {
                        if(cell.color === 'picked') {
                            return cell
                        }
                        else return {...cell, color: 'null'}
                    })
                }))
                setLast(`${rowI}${i}`)
                return
            }


            if(pickedAvto.type === 'small' && rowI && i && area[+rowI][+i].color !== 'picked') {
                paint([{rowI: +rowI, i: +i}], 'positive')
            }
            if(pickedAvto.type === 'big' && rowI && i) {
                if(area[+rowI][+i + 2] && area[+rowI][+i + 2].color !== 'picked' && area[+rowI][+i + 1] && area[+rowI][+i + 1].color !== 'picked' && area[+rowI][+i].color !== 'picked' ) {
                    paint([{rowI: +rowI, i: +i}, {rowI: +rowI, i: +i + 1}, {rowI: +rowI, i: +i + 2}], 'positive')
                }
                else if((!area[+rowI][+i + 2] || area[+rowI][+i + 2].color === 'picked') && area[+rowI][+i + 1] && area[+rowI][+i + 1].color !== 'picked' && area[+rowI][+i].color !== 'picked' ) {
                    paint([{rowI: +rowI, i: +i}, {rowI: +rowI, i: +i + 1}], 'danger')
                }
                else if((!area[+rowI][+i + 2] || area[+rowI][+i + 2].color === 'picked') && (!area[+rowI][+i + 1] || area[+rowI][+i + 1].color === 'picked') && area[+rowI][+i].color !== 'picked' ) {
                    paint([{rowI: +rowI, i: +i}], 'danger')
                }
            }
            if(pickedAvto.type === 'middle' && rowI && i) {
                if(area[+rowI][+i + 1] && area[+rowI][+i + 1].color !== 'picked' && area[+rowI][+i].color !== 'picked' ) {
                    paint([{rowI: +rowI, i: +i}, {rowI: +rowI, i: +i + 1}], 'positive')
                }
                else if(!area[+rowI][+i + 1] || area[+rowI][+i + 1].color === 'picked') {
                    paint([{rowI: +rowI, i: +i}], 'danger')
                }
            }
        }
    }


    const end = (e: React.TouchEvent<HTMLDivElement>) => {
        const X = e.changedTouches[0].clientX
        const Y = e.changedTouches[0].clientY
        const cell = document.elementFromPoint(X, Y)?.tagName === 'DIV'? document.elementFromPoint(X, Y) : null

        if(!pickedAvto.type) return

        if(cell?.tagName === 'DIV' && cell.classList.length) {
            const rowI = cell.getAttribute('data-cords')?.split(',')[0]
            const i = cell.getAttribute('data-cords')?.split(',')[1]

            if(pickedAvto.type === 'small' && rowI && i && area[+rowI][+i].color !== 'picked') {
                placeCar(pickedAvto, +rowI, +i)
            }
            if(pickedAvto.type === 'big' && rowI && i) {
                if(area[+rowI][+i + 2] && area[+rowI][+i + 2].color !== 'picked' && area[+rowI][+i + 1] && area[+rowI][+i + 1].color !== 'picked' && area[+rowI][+i].color !== 'picked' ) {
                    placeCar(pickedAvto, +rowI, +i)
                }
            }
            if(pickedAvto.type === 'middle' && rowI && i) {
                if(area[+rowI][+i + 1] && area[+rowI][+i + 1].color !== 'picked' && area[+rowI][+i].color !== 'picked' ) {
                    placeCar(pickedAvto, +rowI, +i)
                }
            }
        }

        setArea(area.map(row => {
            return row.map(cell => {
                if(cell.color === 'picked') {
                    return cell
                }
                else return {...cell, color: 'null'}
            })
        }))
    }


    return (
        <GradientBackground gradient={`url('${back}')`}>
            <GameRule />
            <GazpromName textOne="Омский НПЗ" />
            <AvtoWrapper>
                {cars.map(car => {
                    return <AvtoCard key={car.counter + car.type} onClick={() => PickAvto(car)}>
                        {car.car}
                        <AutoCounter>{car.counter}</AutoCounter>
                    </AvtoCard>
                })}
            </AvtoWrapper>
            <PickedAuto anim={isShake}>
                {pickedAvto.car}
            </PickedAuto>
            <div style={{ position: 'absolute', background: 'linear-gradient(180deg, #15B8AD -9.43%, rgba(21, 112, 184, 0.49) 41.3%, rgba(7, 29, 47, 0.7) 100%)', width: '100%', height: '100vh', zIndex: -1 }}></div>
            <Wrapper>
                <GameWrapper onTouchEnd={(e) => end(e)} onTouchMove={(e) => touchCell(e)}>
                    {area.map((row, rowI) => {
                        return <Row>
                            {row.map((cell, cellI) => {
                                const color = cell.color === 'positive'? '#15b87780' : cell.color === 'danger'? '#d02c2c5a' : cell.color === 'picked'? '#15B8AD80' : 'rgba(256, 256, 256, 0.3)'
                                return <Сell color={color} data-cords={cell.id} rowI={cell.id[0]} key={cell.id[0]+cell.id[1]} left={cell.left} top={cell.top}></Сell>
                            })}
                        </Row>
                    })}
                    {settedCars.map(car => {
                        if(car.type !== 'small') return <div style={{position: 'absolute', width: `${car.width}%`, left: `${car.left}%`, top: `${car.top}%`, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                                                            {car.car}
                                                        </div>
                        else return <div style={{position: 'absolute', width: `${car.width}%`, left: `${car.left}%`, top: `${car.top}%`, display: 'flex', justifyContent: 'center', alignItems: 'center', height: '20%'}}>
                                        {car.car}
                                    </div>
                    })}
                </GameWrapper>
            </Wrapper>
                {
                    isWin?
                    <div style={{position: 'absolute', bottom: '5%', right: '5%'}}>
                        <GreenButton func={() => {setCharModal()}}>Красота!</GreenButton>
                    </div>
                    :
                    <div style={{position: 'absolute', bottom: '5%', right: '5%'}}>
                        <GreenButton inActive func={() => {}}>Красота!</GreenButton>
                    </div>
                }
                <div style={{position: 'absolute', bottom: '20%', right: '5%'}}>
                    <GreenButton func={reload}>Обнулить</GreenButton>
                </div>
        </GradientBackground>
    )
}   

export default AvtoPage