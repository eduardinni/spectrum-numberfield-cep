import {
  Provider,
  defaultTheme,
  Button,
  NumberField,
  Tabs,
  TabList,
  TabPanels,
  Item,
} from '@adobe/react-spectrum';

function App() {
  return (
    <Provider theme={defaultTheme} colorScheme="dark">
      <Tabs aria-label="testing tabs">
        <TabList>
          <Item key="button">Button</Item>
          <Item key="numberfield">NumberField</Item>
        </TabList>
        <TabPanels>
          <Item key="button">
            <Button variant="cta" onPress={() => alert('Hey there!')}>
              button
            </Button>
          </Item>
          <Item key="numberfield">
            <NumberField label="Width" defaultValue={1024} minValue={0} />
          </Item>
        </TabPanels>
      </Tabs>
    </Provider>
  );
}

export default App;
