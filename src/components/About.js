import React from 'react'
import { Grid, Card, Icon, Image, Container } from 'semantic-ui-react'
import Profile from '../img/Profile.png'




export const About = () => (
    

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
                  1
                </Grid.Column>
                <Grid.Column>

                <Card>
                  <Image src={Profile} wrapped ui={false} />
                  <Card.Content>
                    <Card.Header>Blossom Reynolds</Card.Header>
                    <Card.Meta>
                      <span className='date'>Joined in 1991?</span>
                    </Card.Meta>
                    <Card.Description>
                      Matthew is a musician living in Nashville.
                    </Card.Description>
                  </Card.Content>
                  <Card.Content extra>P
                    <a>
                      <Icon name='user' />
                      22 Friends
                    </a>
                  </Card.Content>
                </Card>


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
                 3
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
  </div>
  )