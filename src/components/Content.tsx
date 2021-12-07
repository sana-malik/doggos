import { useEffect, useState } from 'react';
import { View } from '@adobe/react-spectrum';
import { Spin } from 'antd';
import BreedGrid from './BreedGrid';
import Breed from '../Breed';
import ErrorView from './ErrorView';

function Content() {
    const [breeds, setBreeds] = useState<Breed[]>();
    const [errorMessage, setErrorMessage] = useState<string>();

    useEffect(() => {
        fetch("https://api.thedogapi.com/v1/breeds")
            .then(response => {
                if (response.ok) return response.json();
                else throw new Error(`${response.status}`);
            })
            .then(res => {
                setErrorMessage(undefined);
                setBreeds(res)
            })
            .catch(e => {
                setBreeds(undefined);
                setErrorMessage(e.message)
            });
    }, []);

    function setSelected(item: Breed, selected: boolean) {
        item.selected = selected;
        setBreeds(breeds && [...breeds]);
    }

    return <View id="content">
        {
            (errorMessage && <ErrorView error={errorMessage} />) ||
            (breeds && <BreedGrid breeds={breeds} setSelected={setSelected} />) ||
            <View id="loading"><Spin size="large" /></View>
        }
    </View>;
}

export default Content;