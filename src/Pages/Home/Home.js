import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../Components/Button/Button';
import ExpCard from '../../Components/Card/ExpCard';
import HomeCard from '../../Components/Card/HomeCard';
import { AuthContext } from '../../Components/Contexts/Context';
import SearchForm from '../../Components/Form/SearchForm';
import SmallSpinner from '../../Components/Spinner/SmallSpinner';
import Spinner from '../../Components/Spinner/Spinner';
import NavBar from '../NavBar/NavBar';

const Home = () => {
    const { user } = useContext(AuthContext)
    const [loading, setLoading] = useState(false);
    const [allexp, setAllExp] = useState([]);

    useEffect(() => {
        fetch(`ExpData.json`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setAllExp(data)
            })
    }, [])


    return (

        <div className='  lg:flex md:flex justify-center gap-4 mt-8 md:px-4 lg:px-10'>
            <div >
                <SearchForm></SearchForm>
            </div>
            <div className='flex-1'>
                <div >
                    <div className='flex justify-between px-5 mt-8'>
                        <p className='font-bold'>Home</p>
                        <Link to='/coming-soon' className='font-semibold'>See All</Link>
                    </div>
                    <div className='flex flex-wrap'>
                        {
                            [...Array(6)].map((exp, i) => <HomeCard key={i}></HomeCard>)
                        }
                    </div>
                </div>
                <div >
                    <div className='flex justify-between px-5 mt-8'>
                        <p className='font-bold'>Experience</p>
                        <Link to='/coming-soon' className='font-semibold'>See All</Link>
                    </div>
                    <div className='flex flex-wrap'>
                        {
                            allexp.map((exp, i) => <ExpCard key={i} exp={exp}></ExpCard>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;