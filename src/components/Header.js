import React from 'react'
import { Grid, Image } from 'semantic-ui-react'
import { Navbar } from './Navbar'
import Logo from '../img/Logo.png'

export const Header = () => (
    

  <Grid stackable columns = {2} style={{height: '12vh'}}>

      {/* left column height 20% from grid property */}
      <Grid.Column floated='left' >
       <div>
        {/* Logo */}
        <Image src={Logo} size='medium' circular />
        </div>
      </Grid.Column>

      {/* Right column height 20% */}
      <Grid.Column floated='right' width={8}>

        < Navbar />

      </Grid.Column>

  </Grid>
)
