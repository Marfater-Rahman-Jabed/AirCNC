import React from 'react';
import Button from '../../Components/Button/Button';
import Spinner from '../../Components/Spinner/Spinner';

const Home = () => {
    return (
        <>
            <Spinner></Spinner>
            <Button classes={`w-56 h-50 boreder rounded`}>
                Hello
            </Button>
        </>
    );
};

export default Home;