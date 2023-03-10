import { useStore } from "effector-react"
import { useEffect, useState } from "react"
import { createGlobalStyle } from "styled-components"
import { $curPage } from "../../store/page"
import AskPage from "../AskPage/AskPage"
import BadResolutionPage from "../BadResolutionPage/BadResolutionPage"
import ObjectPage from "../Objects/ObjectPage/ObjectPage"
import Map from "../Map/Map"
import PickObject from "../PickObject/PickObject"
import StartPage from "../StartPage/StartPage"
import PolzunokPage from "../PolzunokPage/PolzunokPage"
import PuzlePage from "../PuzlePage/PuzlePage"


const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
        user-select: none;
        overflow: hidden;
        @media (min-width: 1024px) {
            h1 {
                font-size: 32px !important;
            }
            
            p {
                font-size: 20px !important;
            }
        }
    }
`


export const App = () => {
    const curPage = useStore($curPage)
    const Pages = [<StartPage/>, <AskPage/>, <PickObject/>, <Map/>, <ObjectPage/>]
    const [isVertical, setIsVertical] = useState(window.innerHeight > window.innerWidth)

    useEffect(() => {
        window.onresize = () => {
            setIsVertical(window.innerHeight > window.innerWidth)
        }
    }, [])

    return (
        <>
            <GlobalStyles/>
            {isVertical? <BadResolutionPage></BadResolutionPage> 
            : 
            // Pages[curPage]}
            <PuzlePage/>}
        </>
    )
}

export default App