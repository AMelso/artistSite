import { Image, Item, Header, Icon} from 'semantic-ui-react'
import Bday from '../img/Bday.png'
import show2 from '../img/show2.png'



export const Upcoming2 = () => (
  <Item.Group>
    <Header as='h3'>
      <Icon name="plug" />
      <Header.Content>Upcoming Events! </Header.Content>
    </Header>
    <Item>
      <Image size='medium' src={Bday} />

      <Item.Content>
        <Item.Header>
          <Icon name='birthday cake' />
          <b>Birthday Show</b>
        </Item.Header>

        <Item.Meta>
          October 9th
        </Item.Meta>
        <Item.Description>
          MaHall's <br></br>
          Lakewood, OH
        </Item.Description>
      </Item.Content>
    </Item>

    <Item>
      <Image size='medium' src={show2} />

      <Item.Content>
        <Item.Header>
          <Icon name='eye' />
          <b>Foul Play</b>
        </Item.Header>

        <Item.Meta>
          November 20th
        </Item.Meta>
        <Item.Description>
          Mulberrys <br></br>
          Cleveland, OH
        </Item.Description>
      </Item.Content>
    </Item>

   
  </Item.Group>
)