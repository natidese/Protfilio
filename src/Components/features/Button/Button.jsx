import React , {useContext} from 'react'
import {ThemeContext} from '../../../Contetxt/Context'

export default function Button() {
    const {ChangeTheme} = useContext(ThemeContext)
    return (
        <div>
            <button onClick = {()=>{ChangeTheme()}}>Change MY Theme</button> 
        </div>
    )
}


