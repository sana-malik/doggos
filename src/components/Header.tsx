import { Flex, Heading, Image, Text, DialogTrigger, 
  Dialog, Button, Divider, Content, View } from '@adobe/react-spectrum';
import logo from '../images/logo.png';

function Header() {
  return <View id="header" padding="5px" backgroundColor="gray-900">
    <Flex gap="size-150" alignItems="center">
      <Image src={logo} width="60px" alt="A good boy, sitting." />
      <Heading level={1} flex="1 0 0%">The Dog Catalog</Heading>
      <DialogTrigger type="popover">
        <Button variant="overBackground">About</Button>
        <Dialog>
          <Heading>About the Dog Catalog</Heading>
          <Divider />
          <Content>
            <Text>Made by Sana Malik<br />
              Credits:<br />
              <ul>
                <li>Data from <a href="https://thedogapi.com/">The Dog API</a></li>
                <li>Icon from <a href="https://thenounproject.com/">The Noun Project</a></li>
              </ul>
            </Text>
          </Content>
        </Dialog>
      </DialogTrigger>
    </Flex>
  </View>
}

export default Header;