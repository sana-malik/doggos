import {
    TableView, ButtonGroup, Button, TableHeader, Image,
    Column, Row, Cell, TableBody, Divider, Dialog, Heading, Content
} from '@adobe/react-spectrum';
import { ProfileAttributes, getBreedAttribute } from '../Breed';

function ComparisonDialog(props: { breeds: any[], close: () => void }) {
    const { breeds, close } = props;
    const unit = "imperial";

    const headers = [<Column
        align="end"
        showDivider
        isRowHeader>Attribute
    </Column>].concat(breeds.map(breed => {
        return <Column><Image src={breed.image.url} height="200px" objectFit="cover" /></Column>
    }));

    const rows = ProfileAttributes.map(attr => {
        return <Row>
            {[<Cell>{attr.title}</Cell>].concat(breeds.map(breed => {
                return <Cell>{getBreedAttribute(breed, attr.key, unit)}</Cell>
            }))}
        </Row>
    })

    return <Dialog size="L">
        <Heading>Breed Comparison</Heading>
        <Divider />
        <Content>
            <TableView overflowMode="wrap" height="100%">
                <TableHeader children={headers} />
                <TableBody children={rows} />
            </TableView>
        </Content>
        <ButtonGroup>
            <Button variant="secondary" onPress={close}>
                Close
            </Button>
        </ButtonGroup>
    </Dialog>
}

export default ComparisonDialog;