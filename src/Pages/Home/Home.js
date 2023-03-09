import React, { useContext } from 'react';
import Button from '../../Components/Button/Button';
import { AuthContext } from '../../Components/Contexts/Context';
import Spinner from '../../Components/Spinner/Spinner';

const Home = () => {
    const { user } = useContext(AuthContext)
    return (
        <>
            <Spinner></Spinner>
            <p>{user}</p>
            <Button classes={`w-56 h-50 boreder rounded`}>
                Hello
            </Button>
        </>
    );
};

export default Home;