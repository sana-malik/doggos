import { Divider, Flex } from '@adobe/react-spectrum'
import Breed from '../Breed'
import BreedCard from './BreedCard'
import ComparisonDrawer from './ComparisonDrawer'
import '../css/BreedGrid.css'

function BreedGrid(props: { breeds: Breed[], setSelected: any }) {
    const { breeds, setSelected } = props;

    const breedCards = breeds.map((breed: Breed) => {
        return <BreedCard
            breed={breed}
            key={breed.id}
            onChange={(selected: boolean) => setSelected(breed, selected)} />
    });

    return <Flex direction="column" height="100%">
        <ComparisonDrawer breeds={breeds} setSelected={setSelected} />
        <Divider size="M" margin="size-100" />
        <Flex id="main-breed-grid" wrap gap="size-100" justifyContent="space-evenly">
            {breedCards}
        </Flex>
    </Flex>;
}

export default BreedGrid;