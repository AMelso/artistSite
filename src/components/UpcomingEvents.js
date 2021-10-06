import { Image, Item, Header, Icon} from 'semantic-ui-react'
import Bday from '../img/Bday.png'
import show2 from '../img/show2.png'



export const Upcoming1 = () => (
  <Item.Group>
    <Header as='h3'>
      <Icon name="plug" />
      <Header.Content>Upcoming Event! </Header.Content>
    </Header>
    <Item>
      <Image size='large' src={Bday} />

      <Item.Content>
        <Item.Header>
          <Icon name='birthday cake' />
          <strong><b>Birthday Show</b></strong>
        </Item.Header>

        <Item.Meta>
          <b>October 9th</b>
        </Item.Meta>
        <Item.Description>
          <b>MaHall's <br></br>
          Lakewood, OH</b>
        </Item.Description>
      </Item.Content>
    </Item>
  </Item.Group>
)