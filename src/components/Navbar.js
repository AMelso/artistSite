import React from 'react'
import { Grid, Menu } from 'semantic-ui-react'
import { NavLink} from 'react-router-dom'

export const Navbar = () => {
  
  return (
    <Grid>
      <Grid.Column>
        <Menu inverted compact color="pink" size="massive" floated="right">
          <Menu.Menu position='right'>

            <Menu.Item
              as={NavLink} exact to="/"
              name='Home'
            >
            </Menu.Item>

            <Menu.Item
              as={NavLink} exact to="/Events"
              name='Events'
            >
            </Menu.Item>

            <Menu.Item
              as={NavLink} exact to="/About"
              name='About'
            >
            </Menu.Item>


            {/* <Menu.Item
              as={NavLink} exact to="/Music"
              name='Music'
            >
            </Menu.Item> */}


            <Menu.Item
              as={NavLink} exact to="/Videos"
              name='Videos'
            >
            </Menu.Item>

            <Menu.Item
              as={NavLink} exact to="/Contact"
              name='Contact'
            >
              Contact
            </Menu.Item>


          </Menu.Menu>
        </Menu>
      </Grid.Column>
    </Grid>
  )
}
