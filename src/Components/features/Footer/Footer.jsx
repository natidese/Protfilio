import React from 'react'
import './Footer.css';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';


export default function Footer() {
    return (
        <div>
                        <footer className="mainFooter" >
                <div>
                    <a href="https://www.facebook.com/nati.dese/" class="icon-block">
                        <FacebookIcon style={{ color: 'white' }} />
                    </a>

                    <a href="https://www.instagram.com/natidese/" class="icon-block">
                        <InstagramIcon style={{ color: 'white' }} />
                    </a>


                    <a href="https://www.linkedin.com/in/nati-dese-1a3baa20a/" class="icon-block">
                        <LinkedInIcon style={{ color: 'white' }} />
                    </a>

                    <a href="https://github.com/natidese" class="icon-block">
                        <GitHubIcon style={{ color: 'white' }} />
                    </a>
                    <div class="text-center p-3" style = {{color:'white'}}>
                        © 2021 Copyright:
                        <a class="text-dark" style = {{color:'white'}} href="/#">Nati Dese</a>
                    </div>
                </div>
            </footer>
        </div>
    )
}
