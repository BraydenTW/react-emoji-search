import Container from './components/Container'
import React, { useEffect} from 'react';
import { keepTheme } from './utils/theme';

function App()
{
    useEffect(() =>
    {
        keepTheme()
    });

    return (
        <Container />
    );
}

export default App;
