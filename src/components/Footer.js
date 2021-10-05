import React from 'react'
import { Grid, Image } from 'semantic-ui-react'
import { Socials } from './Socials'


export const Footer = () => (
    
  <div>
  <Grid stackable columns = {2} style={{height: '16vh'}}>

      {/* left column height 20% from grid property */}
      <Grid.Column floated='left' >
       
        
      </Grid.Column>

      {/* Right column height 20% */}
      <Grid.Column floated='right' width={9}>

        <Socials />

      </Grid.Column>

  </Grid>
  </div>
)