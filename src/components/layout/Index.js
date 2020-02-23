import React from 'react';
import Tracks from '../tracks/Tracks';
import Search from '../tracks/Search';
import { Switch } from 'react-router-dom';


const Index = () => {
    return (
       <React.Fragment>
           <Search />
           <Tracks />
       </React.Fragment>
    )
}
export default Index;
