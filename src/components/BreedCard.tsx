import { ActionButton, Image, Checkbox, DialogTrigger, Well } from '@adobe/react-spectrum';
import Search from '@spectrum-icons/workflow/Search';
import BreedInfoDialog from './BreedInfoDialog';
import Breed from '../Breed';
import '../css/BreedCard.css';

function BreedCard(props: { breed: Breed, onChange: (selected: boolean) => void }) {
    const { breed, onChange } = props;

    return <Well width="size-3600">
        <Image
            src={breed.image.url}
            height="200px"
            objectFit="cover" />
        <div className="breed-name">{breed.name}</div>
        <div className="card-footer">
            <DialogTrigger isDismissable type="modal">
                <ActionButton aria-label="View breed details" isQuiet>
                    <Search /> View Details
                </ActionButton>
                <BreedInfoDialog breed={breed} />
            </DialogTrigger>
            <Checkbox isSelected={breed.selected} onChange={onChange}>Compare</Checkbox>
        </div>
    </Well >;
}

export default BreedCard;