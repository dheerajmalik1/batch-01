import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Avatar from '@material-ui/core/Avatar'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
  header: {
    display: 'inline',
  },
  avatar: {
    margin: '10px 10px',
    float: 'right',
  },
}));

import './styles.css';

function Profile (props) {
  const classes = useStyles();

  return (
    <div>
      <AppBar className={classes.header}>
        <h3 className="profile-title">{props.profile.name}</h3>
        <Avatar className={classes.avatar} />
      </AppBar>
      <div className="profile-content">
        <div className="profile-left">
          <img className="profile-photo" src={props.profile.photoURL} />
          <h2>{props.profile.role}</h2>
          <p><b>Email:</b>{props.profile.email}</p>
          <br/>
          <p><b>Technologies:</b>{props.profile.technologies}</p>
        </div>
        <div className="profile-right">
          <h1>Summary</h1>
          <p className="profile-summary">{props.profile.summary}</p>
        </div>
      </div>
    </div>
  )
}

export default Profile;