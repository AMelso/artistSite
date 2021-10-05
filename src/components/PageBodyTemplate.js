import React from 'react'
import { Grid, Image } from 'semantic-ui-react'


export const PageBodyTemplate = () => (
    

  // Top left/right 30% height of page
  <div>
    <Grid stackable columns = {2} style={{height: '37vh'}}>

        {/* Top left column body height 30% from grid property */}
        <Grid.Column floated='left' >
        Top Left
          
        </Grid.Column>

        {/* Top Right column height 30% */}
        <Grid.Column floated='right'>
        Top Right
        </Grid.Column>

    </Grid>

    {/* Bottom right/left height 30% of page, 1/2 60 body */}
    <Grid stackable columns = {2} style={{height: '36vh'}}>

    {/* bottomleft column body height 30% from grid property */}
    <Grid.Column floated='left' >
    Bottom Left
      
    </Grid.Column>

    {/* bottom Right column height 30% */}
    <Grid.Column floated='right'>
    Bottom Right
    </Grid.Column>

    </Grid>
  </div>
  )