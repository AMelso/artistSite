import React from 'react'
import { Grid } from 'semantic-ui-react'
import { Socials } from './Socials'


export const Footer = () => (
    
  <>
  <Grid Column style={{height: '1vh'}}>
      <Grid.Column floated='right' width={6}>

        <Socials />

      </Grid.Column>

  </Grid>
  </>
)