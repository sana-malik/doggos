import { TableView, TableHeader, TableBody, Row, Column, Cell } from '@adobe/react-spectrum'
import { getBreedAttribute, ProfileAttributes } from '../Breed';

function BreedTable(props: { breeds: any[]; setSelected: (item: any, selected: boolean) => void }) {
    const { breeds, setSelected } = props;
    const unit = 'imperial';
    const columns = ProfileAttributes;

    return <TableView
        selectionMode="multiple"
        selectionStyle="checkbox"
        density="regular"
        overflowMode="wrap"
    >
        <TableHeader>
            {columns.map(col => <Column key={'col-' + col.key}>{col.title}</Column>)}
        </TableHeader>
        <TableBody>
            {breeds.map(breed => <Row key={'row-' + breed.id}>
                {columns.map((col: { key: string; }) => <Cell key={col.key + '-' + breed.id}>{getBreedAttribute(breed, col.key, unit)}</Cell>)}
            </Row>)}
        </TableBody>
    </TableView>
}

export default BreedTable;