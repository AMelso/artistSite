import React from 'react'
import { Grid, Card, Icon, Image, Container } from 'semantic-ui-react'
import Bday from '../img/Bday.png'
import show2 from '../img/show2.png'
import Show_3 from '../img/Show_3.png'
import Show4 from '../img/Show4.png'
import Show5 from '../img/Show5.png'
import Show6 from '../img/Show6.png'



export const Events = () => (
    

  // Top left/right 30% height of page
  <div>
    <Grid stackable columns = {2} style={{height: '40vh'}}>

        {/* Top left column body height 30% from grid property */}
        <Grid.Column floated='left' >
        {/* Top Left */}

        <Container>
            <Grid columns={2} divided>
              <Grid.Row>
                <Grid.Column>
                  {/* leave blank for logo */}
                </Grid.Column>
                <Grid.Column>
                <Image src={Bday} />
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Container>
          
        </Grid.Column>

        {/* Top Right column height 30% */}
        <Grid.Column floated='right'>
          <Container>
            <Grid columns={2} divided>
              <Grid.Row>
                <Grid.Column>
                  {/* leave blank for head */}
                </Grid.Column>
                <Grid.Column>
                  <Image src={show2} />
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Container>

        </Grid.Column>

    </Grid>

    {/* Bottom right/left height 30% of page, 1/2 60 body */}
    <Grid stackable columns = {2} style={{height: '40vh'}}>

    {/* bottomleft column body height 30% from grid property */}
    <Grid.Column floated='left' >
    <Container>
    <br></br>
      <br></br>
            <Grid columns={2} divided>
              <Grid.Row>
                <Grid.Column>
                  <Image src={Show_3} />
                </Grid.Column>
                <Grid.Column>
                  <Image src={Show4} />
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Container>
      
    </Grid.Column>

    {/* bottom Right column height 30% */}
    <Grid.Column floated='right'>
    <Container>
      <br></br>
      <br></br>
      
            <Grid columns={2} divided>
              <Grid.Row>
                <Grid.Column>
                  <Image src={Show5} />
                </Grid.Column>
                <Grid.Column>
                  <Image src={Show6} />
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Container>
    </Grid.Column>

    </Grid>
  </div>
  )