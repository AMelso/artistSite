import { Image, Item, Header, Icon, Conta} from 'semantic-ui-react'
import Bday from '../img/Bday.png'
import show2 from '../img/show2.png'



export const Upcoming1 = () => (
  <Item.Group>
    <Header as='h3'>
      <Icon name="plug" />
      <Header.Content><font size="+4">Upcoming Event!</font> </Header.Content>
    </Header>
    <Item>
      <Image size='large' src={Bday} />

      <Item.Content>
        <Item.Header>

        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Icon name='birthday cake' />
          <font size="+2"><strong><b><br></br>Birthday Show</b></strong></font>
        </Item.Header>

        <Item.Meta>
        <font size="+2"><b>October 9th</b></font>
        </Item.Meta>
        <Item.Description>
        <font size="+2"><b>MaHall's <br></br>
          Lakewood, OH</b></font>
        </Item.Description>
      </Item.Content>
    </Item>
  </Item.Group>
)