import { DialogTrigger, ActionButton, Text, Flex } from '@adobe/react-spectrum'
import { Select } from 'antd';
import ComparisonDialog from './ComparisonDialog';

/* Displays comparison toolbar in Breed Grid */
function ComparisonDrawer(props: { breeds: any, setSelected: any }) {
    const { breeds, setSelected } = props;
    const { Option } = Select;
    const limit = 4;

    function onChange(selectedBreeds: any[]) {
        breeds.forEach((breed: any) => {
            if (selectedBreeds.includes(breed.name)) setSelected(breed, true)
            else setSelected(breed, false)
        });
    }

    const selectedBreeds = breeds.filter((breed: any) => breed.selected).map((breed: any) => breed.name);
    const options = breeds.map((breed: any) => {
        return <Option key={breed.id} value={breed.name}>{breed.name}</Option>
    });
    return <>
        <Flex gap="size-100">
            <div style={{ flex: "1" }}>
                <Select
                    mode="multiple"
                    allowClear
                    style={{ width: '100%' }}
                    placeholder={`Select up to ${limit} breeds to compare...`}
                    value={selectedBreeds}
                    onChange={onChange}
                    children={options}
                />
                {selectedBreeds.length > limit ? <Text>Please select up to {limit} breeds.</Text> : <></>}
            </div>
            <DialogTrigger type="fullscreen">
                <ActionButton isDisabled={selectedBreeds.length <= 1 || selectedBreeds.length > limit}>
                    Compare Breeds
                </ActionButton>
                {(close) => <ComparisonDialog
                    breeds={breeds.filter((breed: any) => selectedBreeds.includes(breed.name))}
                    close={close} />}
            </DialogTrigger>
        </Flex>
    </>;
}

export default ComparisonDrawer;