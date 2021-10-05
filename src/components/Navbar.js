import React from 'react'
import { Grid, Menu } from 'semantic-ui-react'
import { NavLink} from 'react-router-dom'

export const Navbar = () => {
  
  return (
    <Grid>
      <Grid.Column>
      <Menu inverted compact color="pink" size="massive" floated="left">
          <Menu.Menu position='left'>
            <Menu.Item
              
              name='Blossom Reynolds'
            />
          </Menu.Menu>
        </Menu>
        <Menu inverted compact color="pink" size="massive" floated="right">
          <Menu.Menu position='right'>
            <Menu.Item
              as={NavLink} exact to="/"
              name='Home'
            />
            <Menu.Item
              as={NavLink} exact to="/Music"
              name='Music'
            />
            <Menu.Item
              as={NavLink} exact to="/Videos"
              name='Videos'
            />
            <Menu.Item
              as={NavLink} exact to="/About"
              name='About'
            />
            <Menu.Item
              as={NavLink} exact to="/Book"
              name='Book'
            />
          </Menu.Menu>
        </Menu>
      </Grid.Column>
    </Grid>
  )
}