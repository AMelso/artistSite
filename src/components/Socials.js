import React from 'react'
import { Button, Grid } from 'semantic-ui-react'


export const Socials = () => (
  <Grid>
    <Grid.Column floated='right' width={4}>
      <Button size='massive' circular color='facebook' icon='facebook'>
      </Button>
      <Button size='massive' circular color='twitter' icon='twitter'>
      </Button>
      <Button size='massive' circular color='instagram' icon='instagram'>
      </Button>
      <Button size='massive' circular color='youtube' icon='youtube'>
      </Button>
      </Grid.Column>
  </Grid>
)

