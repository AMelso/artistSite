import React from 'react'
import {Grid} from 'semantic-ui-react'
import {Upcoming1} from './UpcomingEvents'




export const Home = () => (
    

  // Top left/right 30% height of page
  <div>
    <Grid stackable columns = {2} style={{height: '40vh'}}>

      {/* Top left column body height 30% from grid property */}
      <Grid.Column floated='left'>
      
          
      </Grid.Column>

      {/* Top Right column height 30% */}
      <Grid.Column floated='right'>
      
      </Grid.Column>

    </Grid>
    
    {/* Bottom right/left height 30% of page, 1/2 60 body */}
    <Grid stackable columns = {2} style={{height: '40vh'}}>

    {/* bottomleft column body height 30% from grid property */}
    <Grid.Column floated='left' >
      
      <Upcoming1 />
      
    </Grid.Column>

    {/* bottom Right column height 30% */}
    <Grid.Column floated='right'>
    
    </Grid.Column>

    </Grid>
  </div>
  )