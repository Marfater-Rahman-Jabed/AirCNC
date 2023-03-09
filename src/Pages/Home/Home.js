import React, { useContext } from 'react';
import Button from '../../Components/Button/Button';
import { AuthContext } from '../../Components/Contexts/Context';
import SmallSpinner from '../../Components/Spinner/SmallSpinner';
import Spinner from '../../Components/Spinner/Spinner';
import NavBar from '../NavBar/NavBar';

const Home = () => {
    const { user } = useContext(AuthContext)
    return (
        <>
            {/* <NavBar></NavBar> */}
            <Spinner></Spinner>

            {/* <p>{user}</p> */}
            {/* <Button classes={`w-56 h-50 boreder rounded`}>
                <SmallSpinner></SmallSpinner>
            </Button> */}
        </>
    );
};

export default Home;