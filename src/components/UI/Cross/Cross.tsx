import { FC } from "react"

const Cross: FC<{func: () => void}> = ({func}) => {


    return <svg onClick={func} style={{cursor: 'pointer'}} width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M20.0248 2.07795L18.0494 0.102539L10.2712 7.88068L2.49317 0.102615L0.517756 2.07802L8.29581 9.85608L0.5177 17.6342L2.49311 19.6096L10.2712 11.8315L18.0494 19.6097L20.0248 17.6343L12.2466 9.85608L20.0248 2.07795Z" fill="#1570B8"/></svg>
}

export default Cross