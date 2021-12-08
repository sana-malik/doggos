import { defaultTheme, Flex, Provider } from '@adobe/react-spectrum';
import Header from './components/Header';
import Content from './components/Content';
import './css/App.css';

function App() {
  return (
    <Provider theme={defaultTheme} height="100%">
      <Flex direction="column" height="100%">
        <Header />
        <Content />
      </Flex>
    </Provider >
  );
}

export default App;
