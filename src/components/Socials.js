import React from 'react'
import { Button, Grid } from 'semantic-ui-react'


export const Socials = () => (
  <Grid>
    <Grid.Column floated='right'>
      
      <Button size='massive' circular color='spotify' icon='spotify'
      onClick={ () => window.location.href='https://open.spotify.com/artist/2ZNIjCXA54WQXaPfLyam9a?si=Qdtu-zsKRXWTBT4tt3Jfyg'}>
      </Button>

      <Button size='massive' circular color='instagram' icon='instagram'
      onClick={ () => window.location.href='https://www.instagram.com/blossomreyn0lds/'}>
      </Button>
      
      <Button size='massive' circular color='facebook' icon='facebook'
      onClick={ () => window.location.href='https://www.facebook.com/blossomreyn0lds'}>
      </Button>
      
      <Button size='massive' circular color='twitter' icon='twitter'
      onClick={ () => window.location.href='https://twitter.com/blossomreyn0lds'}>
      </Button>
      
      <Button size='massive' circular color='youtube' icon='youtube'
      onClick={ () => window.location.href='https://www.youtube.com/channel/UCU9-vMakDewaOMq9PZ1PIIg'}>
      </Button>
      
      <Button size='massive' circular color='soundcloud' icon='soundcloud'
      onClick={ () => window.location.href='https://soundcloud.com/blossomreynolds'}>
      </Button>
      
      </Grid.Column>
  </Grid>
)

