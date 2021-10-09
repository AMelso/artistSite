import React from 'react'
import { Button, Container, Form, Divider, Grid, Segment } from 'semantic-ui-react'

export const Contact = () => (
  // Top left/right 30% height of page
  <div>
    <Grid stackable columns = {3} style={{height: '10vh'}}>

        {/* Top left column body height 30% from grid property */}
        <Grid.Column floated='left' >
        
          
        </Grid.Column>

        <Grid.Column floated='right'>
        
        </Grid.Column>

        {/* Top Right column height 30% */}
        <Grid.Column floated='right'>
        
        </Grid.Column>
      

    </Grid>

    {/* Bottom right/left height 30% of page, 1/2 60 body */}
    <Grid stackable columns = {3} style={{height: '70vh'}}>

    {/* bottomleft column body height 30% from grid property */}
    <Grid.Column floated='left' >
    
      
    </Grid.Column>

    <Grid.Column>
        

          <Container textAlign='center'><font size="+3">Get in Contact!</font></Container>
        
          <Divider />
          
          <Form>
            <Form.Field>
              <label>Name</label>
              <input placeholder='Name' />
            </Form.Field>
            <Form.Field>
              <label>Email</label>
              <input placeholder='Email' />
            </Form.Field>
            <Form.TextArea 
              label='Inquiry' 
              placeholder="What's on your mind?" 
              />
            <Button type='submit'>Submit</Button>
          </Form>


        </Grid.Column>

    {/* bottom Right column height 30% */}
    <Grid.Column floated='right'>
    
    </Grid.Column>

    </Grid>
  </div>
  
  
)


