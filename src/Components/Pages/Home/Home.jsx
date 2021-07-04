import React from 'react'
import './Home.css';
import studie2 from '../../../imges/studie2.jpeg'
import { Link } from 'react-router-dom'
import studie1 from '../../../imges/studie1.jpeg' 
import studie3 from '../../../imges/studie3.jpeg'
import brzik from '../../../imges/brzik.jpeg'





export default function Home() {




    return (
        <div className="HomeDiv">
            <div >

         <div className = "twodivs">
                <div className="chlid" >
                    <div className="HomeInfo" >
                        <p class='myInfo1' >Hi, im Nati.</p>
                        <h1 class='myInfo1'> Full stuck devaloper</h1>
                        <p class='myInfo1'> 25 years old ,  backend and frontend devaloper </p>
                        <br />


                        <Link className="InfoBtn" to="/files/NatiDESECV.pdf" target="_blank" download>Download my CV</Link>
                    </div>
                   
                </div>

            </div>    

                <div className="chlid">
                    <img src={studie2} alt="" class="firstPic" />
                </div>

                <div className="MyCards1">

                <div className = "allDivs">
                    <img width = '100%' height = '100%' style={{borderRadius:'30px', opacity: 0.5}} src={studie1} alt="" />
                    <p style = {{border :'2px solid white'}}> Me and colleague from my class learning hooks and learn how to use it.
                    </p>
                </div>
                
                <div className = "allDivs">
                    <img  width = '100%' height = '601px' style={{borderRadius:'30px' , opacity: 0.5}} src={studie3} alt="" />
                    <p style = {{border :'2px solid white'}}> Me and my team doing a presntion about props and UseContext expalanig and show how to use it.
                    </p >
                </div>

                
                <div className = "allDivs">
                    <img width = '100%'  height = '601px%' style={{borderRadius:'30px' , opacity: 0.5}}  src={brzik} alt="" />
                    <p style = {{border :'2px solid white'}} > Ran Barzik Presntion.
                    </p>
                </div>

                </div>


            </div>


        </div>

    )
}