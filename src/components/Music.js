import React from 'react'
import { Grid, Embed, Container, Divider, Icon } from 'semantic-ui-react'

export const Music = () => (
    

  // Top left/right 30% height of page
  <div>
    <font size="+2">
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
                <Embed
                    
                    autoplay={true}
                    brandedUI
                    color='white'
                    hd={false}
                    url="https://soundcloud.com/blossomreynolds/the-feelin-prod-king-theta-iof"
                    icon="play circle"
                    
                  />
                  {/* Text container */}
                  <Container textAlign='center'>
                    <Divider />
                    <p>
                    <b> Familiar Face - 2021 </b>
                    </p>
                      </Container>
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
                  4
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
                   5
                </Grid.Column>
                <Grid.Column>
                    6
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
                    
                  7

                </Grid.Column>
                <Grid.Column>
                  8
                      
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Container>
    </Grid.Column>

    </Grid>
    </font>
  </div>
  )