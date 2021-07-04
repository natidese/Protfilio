import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import { red } from '@material-ui/core/colors';
import calProject from '../../../imges/CUL-PROJECT.jpeg'
import MovieProject from '../../../imges/Movies-project.jpeg'
import CarsProject from '../../../imges/CARS-PROJECT.jpeg'
import UserProject from '../../../imges/User-PROJECT.jpeg'
import './Portfolio.css';



const useStyles = makeStyles((theme) => ({
     root: {
          maxWidth: 345,
          color: 'white',
          height: 520,

     },
     media: {
          height: 100,
          paddingTop: '56.25%', // 16:9


     },
     expand: {
          transform: 'rotate(0deg)',
          marginLeft: 'auto',
          transition: theme.transitions.create('transform', {
               duration: theme.transitions.duration.shortest,
               color: 'white'

          }),
     },
     avatar: {
          backgroundColor: red[500],
          color: 'white'

     },
}));



export default function Skills() {
     const classes = useStyles();

     return (
          <div>
               <div>

                    <h1 className="MyHeader" >PROJECTS : </h1>


                    <div className="MyCards">

                         <Card className={classes.root}>

                              <CardHeader style={{ border: "2px solid white" }}
                                   title="CALCULATOR"
                              />

                              <CardMedia
                                   className={classes.media}
                                   image={calProject}
                              />


                              <CardContent className='cardInfo' style={{ border: "2px solid white", height: '63px' }}>
                                   In this project i made calculator Which can calculate .
                                   i used HTML and CSS and JavaScript.


                                   <button class="LinkBtn"><a href="https://github.com/natidese/JS-CALCULATOR" target= "_blank" class="btnToWebsite">Github Link</a> </button>
                                   <button class="LinkBtn"><a href="https://natidese.github.io/JS-CALCULATOR/"  target= "_blank" class="btnToWebsite">Go to website</a></button>
                              </CardContent>
                         </Card>



                         <Card className={classes.root}>

                              <CardHeader style={{ border: "2px solid white" }}
                                   title="MOVIE-WEBSITE"
                              />

                              <CardMedia
                                   className={classes.media}
                                   image={MovieProject}
                              />


                              <CardContent className='cardInfo' style={{ border: "2px solid white" , height: '63px' }}>
                                   In this project i made website of black main actors , you can find there Movise and series.
                                   i used HTML and CSS .

                                   
                                   <button class="LinkBtn">  <a href="https://github.com/natidese/FINEL-PROJECT" target= "_blank" class="btnToWebsite">Github Link</a>  </button>
                                   <button class="LinkBtn"> <a href="https://natidese.github.io/FINEL-PROJECT/" target= "_blank" class="btnToWebsite">Go to website</a> </button>
                              </CardContent>

                         </Card>

                         <Card className={classes.root}>

                              <CardHeader style={{ border: "2px solid white" }}
                                   title="Cars-search"
                              />

                              <CardMedia
                                   className={classes.media}
                                   image={CarsProject}
                              />


                              <CardContent className='cardInfo' style={{ border: "2px solid white" , height: '63px' }}>
                                   In this project i made website that you can search cars and its added to form
                                   i used HTML and CSS

                                   <button class="LinkBtn">  <a href="https://github.com/natidese/Classes-project/deployments/activity_log?environment=github-pages" target= "_blank" class="btnToWebsite">Github Link</a>  </button>
                                   <button class="LinkBtn"> <a href="https://natidese.github.io/Classes-project/" target= "_blank" class="btnToWebsite">Go to website</a> </button>
                              </CardContent>

                         </Card>

                         <Card className={classes.root}>

                              <CardHeader style={{ border: "2px solid white" }}
                                   title="User-Project"
                              />

                              <CardMedia
                                   className={classes.media}
                                   image={UserProject}
                              />


                              <CardContent className='cardInfo' style={{ border: "2px solid white" , height: '63px' }}>
                                   In this project i made website of table users and you can add more users to the table.
                                   i used HTML and CSS.

                                   <button class="LinkBtn">  <a href="https://github.com/natidese/FINEL-PROJECT" class="btnToWebsite" target= "_blank" >Github Link</a>  </button>
                                   <button class="LinkBtn"> <a href="https://natidese.github.io/Passover-Project/" target= "_blank" class="btnToWebsite">Go to website</a> </button>
                              </CardContent>


                         </Card>
                    </div>
               </div>
          </div>

     )
}