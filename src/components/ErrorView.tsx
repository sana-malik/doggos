import { IllustratedMessage, Heading, Content } from '@adobe/react-spectrum';
import NotFound from '@spectrum-icons/illustrations/NotFound';

function ErrorView(props: { error: string}) {
    const { error } = props;
    return <IllustratedMessage>
        <NotFound />
        <Heading>{error}</Heading>
        <Content>An error occured while fetching breeds.</Content>
    </IllustratedMessage>
}

export default ErrorView;