import React from 'react'
import {Link} from 'react-router-dom'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'

const NotFound = () => {
  return (
    <Card className="not-found">
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          Page not found :(
        </Typography>
        <Typography variant="body2" component="p">
          Maybe the page you are looking for has been removed, or you typed in
          the wrong URL
        </Typography>
      </CardContent>
      <CardActions>
        <Link to="#" className="waves-effect waves-green">
          Go back
        </Link>
        <Link to="/" className="waves-effect waves-green">
          Go to homepage
        </Link>
      </CardActions>
    </Card>
  )
}

export default NotFound
