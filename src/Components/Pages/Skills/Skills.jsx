import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import { red } from '@material-ui/core/colors';
import './Skils.css';





const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    color: 'white'

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

      <h1 className="MyHeader" >Client : </h1>


      <div className="MyCards">

        <Card className={classes.root}>

          <CardHeader
            title="HTML"
          />

          <CardMedia
            className={classes.media}
            image="https://hackr.io/tutorials/learn-html-5/logo/logo-html-5?ver=1587977020"
            title="Paella dish"
          />


          <CardContent>
            <progress value={100} max={100}>
              100%
            </progress>
          </CardContent>

        </Card>


        <Card className={classes.root}>

          <CardHeader
            title="CSS"
          />

          <CardMedia
            className={classes.media}
            image="https://www.digitalst.co.il/files/upload/css3.png "
            title="Paella dish"
          />


          <CardContent>
            <progress value={100} max={100}>
              100%
            </progress>
          </CardContent>

        </Card>


        <Card className={classes.root}>

          <CardHeader
            title="JS"
          />

          <CardMedia
            className={classes.media}
            image="https://www.thecodecrypt.com/images/2020/01/08/js.png "
            title="Paella dish"
          />


          <CardContent>
            <progress value={100} max={100}>
              100%
            </progress>
          </CardContent>

        </Card>


        <Card className={classes.root}>


          <CardHeader
            title="TS"
          />

          <CardMedia
            className={classes.media}
            image="https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg "
            title="Paella dish"
          />


          <CardContent>
            <progress value={100} max={100}>
              100%
            </progress>
          </CardContent>

        </Card>


        <Card className={classes.root}>


          <CardHeader
            title="REACT JS"
          />

          <CardMedia
            className={classes.media}
            image="https://miro.medium.com/max/1400/1*CeuWv9fCjD1uTiTuKytnBQ.png "
            title="Paella dish"
          />


          <CardContent>
            <progress value={80} max={100}>
              100%
            </progress>
          </CardContent>

        </Card>

        <Card className={classes.root}>


          <CardHeader
            title="BOOSTRAP"
          />

          <CardMedia
            className={classes.media}
            image="https://commons.bmstu.wiki/images/b/b8/Bootstrap.png"
            title="Paella dish"
          />


          <CardContent>
            <progress value={100} max={100}>
              100%
            </progress>
          </CardContent>

        </Card>

        <Card className={classes.root}>


          <CardHeader
            title="MATERIAL-UI"
          />

          <CardMedia
            className={classes.media}
            image="https://cdn.worldvectorlogo.com/logos/material-ui.svg"
            title="Paella dish"
          />


          <CardContent>
            <progress value={100} max={100}>
              100%
            </progress>
          </CardContent>

        </Card>
      </div>

      <h1 className="MyHeader" >Server : </h1>

      <div className="MyCards">

        <Card className={classes.root}>


          <CardHeader
            title="ASP.NET"
          />

          <CardMedia
            className={classes.media}
            image="https://pbs.twimg.com/profile_images/1390448160934305793/ohii8Hxq.png"
            title="Paella dish"
          />


          <CardContent>
            <progress value={70} max={100}>
              100%
            </progress>
          </CardContent>

        </Card>


        <Card className={classes.root}>


          <CardHeader
            title="C#"
          />

          <CardMedia
            className={classes.media}
            image="https://www.avenga.com/wp-content/uploads/2020/11/C-Sharp.png"
            title="Paella dish"
          />


          <CardContent>
            <progress value={100} max={100}>
              100%
            </progress>
          </CardContent>

        </Card>


        <Card className={classes.root}>


          <CardHeader
            title="NODE.JS"
          />

          <CardMedia
            className={classes.media}
            image="https://hazelcast.com/wp-content/uploads/blog-archive/2016/04/node2.png"
            title="Paella dish"
          />


          <CardContent>
            <progress value={0} max={100}>
              100%
            </progress>
          </CardContent>

        </Card>


        <Card className={classes.root}>


          <CardHeader
            title="ADO.NET"
          />

          <CardMedia
            className={classes.media}
            image="https://cdn.hashnode.com/res/hashnode/image/upload/v1611314248973/8Lz0G2g6b.jpeg"
            title="Paella dish"
          />


          <CardContent>
            <progress value={0} max={100}>
              100%
            </progress>
          </CardContent>

        </Card>

      </div>

    </div>


  );
}

