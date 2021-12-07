import { Dialog, Flex, Heading, Divider, Content, View, Text, Image } from '@adobe/react-spectrum';
import { getFlagEmoji } from '../utils';
import { getBreedAttribute, ProfileAttributes } from '../Breed';

function BreedInfoDialog(props: { breed: any }) {
    const { breed } = props;
    const { country_code } = breed;
    const unit = "imperial";

    const attributes = ProfileAttributes.map(attr => {
        return <Text><b>{attr.title}:</b> {getBreedAttribute(breed, attr.key, unit)}<br /></Text>
    });

    return <Dialog>
        <Heading>{breed.name} {country_code && getFlagEmoji(country_code)}</Heading>
        <Divider />
        <Content>
            <Flex gap="size-400" alignItems="start">
                <Image src={breed.image.url} flex="0 1 50%"/>
                <View children={attributes} />
            </Flex>
        </Content>
    </Dialog>
}

export default BreedInfoDialog;