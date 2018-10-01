import React, { Component } from 'react';
import ReactPlayer from 'react-player';

export default class ResponsivePlayer extends Component {
    render () {
      return (
        <div className='player-wrapper embed-responsive embed-responsive-16by9'>
          <ReactPlayer 
            className='react-player embed-responsive-item'
            url='https://youtu.be/Flc0ogSQWRE'
            width='100%'
            height='100%'
            controls={true}
          />
        </div>
      )
    }
  }