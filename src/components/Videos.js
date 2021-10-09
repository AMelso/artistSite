import React from 'react'
import { Grid, Embed, Container, Divider } from 'semantic-ui-react'
import FamililarFace from '../img/FamiliarFace.png'
import Feelin from '../img/Feelin.png'
import backnforth from '../img/backnforth.png'
import demons from '../img/demons.png'
import Weekend from '../img/Weekend.png'




export const Videos = () => (
    

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
                  {/* Spot 2 */}
                  <Embed
                    autoplay={true}
                    brandedUI
                    color='white'
                    hd={false}
                    id='tCs3tSCv4UM'
                    placeholder={FamililarFace}
                    source='youtube'
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
                  {/* area 4 */}
                  <Embed
                      autoplay={false}
                      brandedUI
                      color='white'
                      hd={false}
                      id='ypmviIUkOdE'
                      placeholder={Feelin}
                      source='youtube'
                    />
                    {/* Text container */}
                    <Container textAlign='center'>
                    <Divider />
                    <p>
                    <b> The Feelin' - 2021 </b>
                    </p>
                      </Container>
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
                   <Embed
                        autoplay={false}
                        brandedUI
                        color='blue'
                        hd={false}
                        id='N3MjIzI2Kz0'
                        placeholder={Weekend}
                        source='youtube'
                      />
                      {/* Text container */}
                      <Container textAlign='center'>
                        <Divider />
                        <p>
                        <b> Whole Weekend Wasted EP - 2018</b>
                        </p>
                      </Container>
                </Grid.Column>
                <Grid.Column>
                    <Embed
                        autoplay={false}
                        brandedUI
                        color='white'
                        hd={false}
                        id='Udz7bARlzX0'
                        placeholder={backnforth}
                        source='youtube'
                      />
                      {/* Text container */}
                      <Container textAlign='center'>
                        <Divider />
                        <p>
                        <b> Back N Forth - 2020 </b>
                        </p>
                      </Container>
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
                    
                  {/* 7 */}

                </Grid.Column>
                <Grid.Column>
                  <Embed
                        autoplay={false}
                        brandedUI
                        color='blue'
                        hd={false}
                        id='fxaYb4X7RsA'
                        placeholder={demons}
                        source='youtube'
                        
                      />
                      {/* Text container */}
                      <Container textAlign='center'>
                        
                        <p>
                         <b> Demons - 2018</b>
                        </p> 
                      </Container>
                      
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Container>
    </Grid.Column>

    </Grid>
    </font>
  </div>
  )