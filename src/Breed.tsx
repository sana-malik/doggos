type Breed = {
    bred_for: string,
    breed_group?: string,
    country_code?: string,
    origin?: string,
    height: { imperial: string, metric: string },
    id: number,
    image: { id: string, width: number, height: number, url: string },
    life_span: string,
    name: string,
    reference_image_id: string,
    temperament: string,
    weight: { imperial: string, metric: string },
    selected?: boolean
}

export function getBreedAttribute(breed: any, attr: string, unit: string) {
    if (attr === 'height') {
        return breed[attr][unit] + '"';
    } else if (attr === 'weight') {
        return breed[attr][unit] + ' lbs';
    } else return breed[attr] || "Unknown";
}

export const ProfileAttributes = [
    {
        key: 'name',
        title: 'Name'
    },
    {
        key: 'breed_group',
        title: 'Breed Group'
    },
    {
        key: 'bred_for',
        title: 'Bred For'
    },
    {
        key: 'origin',
        title: 'Origin'
    },
    {
        key: 'height',
        title: 'Height'
    },
    {
        key: 'weight',
        title: 'Weight'
    },
    {
        key: 'life_span',
        title: 'Lifespan'
    },
    {
        key: 'temperament',
        title: 'Temperament'
    },
];

export default Breed;