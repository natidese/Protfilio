import React,{  useContext } from 'react';
import Home from '../Pages/Home/Home';
import Contact from '../Pages/Contact/Contact';
import Portfolio from '../Pages/Portfolio/Portfolio';
import Skills from '../Pages/Skills/Skills';
import { Switch, Route } from "react-router-dom";
import {ThemeContext} from '../../Contetxt/Context';


export default function Routing() {
    const { ChangeMyTheme } = useContext(ThemeContext)
    return (
        <>
            <div className = {`App ${ChangeMyTheme ? "white":""}`}>
                <Switch >
                    <Route exact path="/" component={Home} />
                    <Route path="/Skills" component={Skills} />
                    <Route path="/Portfolio" component={Portfolio} />
                    <Route path="/Contact" component={Contact} />
                </Switch >
            </div>
        </>
    )
}
