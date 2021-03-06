import React, { useState } from 'react'
import classes from './Header.module.css'
import theme from '../../theme'
import { isMobile } from 'react-device-detect'
import { ProfileMenu } from '..'
import { useHistory } from 'react-router-dom'

const HomeHeader = () =>{
    const [menuOpen, setMenu] = useState(false)
    const history = useHistory()

    return(
        <div className={classes.header}>
            <text onClick={()=>history.push('/home')} style={theme.textVariants.boldBody}>BiteForce</text>
            {!isMobile? <text style={theme.textVariants.body}>Welcome, Amar Preet</text>:null}
            <div onClick={()=>setMenu(true)} style={{backgroundColor:theme.colors.gray}} className={classes.nameIcon}>
                <text style={theme.textVariants.button}>A</text>
                {menuOpen? <ProfileMenu open={menuOpen} setOpen={(b)=>setMenu(b)}/>:null}
            </div>
        </div>
    )
}

export default HomeHeader