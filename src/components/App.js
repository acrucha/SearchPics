import React from 'react';
import axios from 'axios';

import SearchBar from './SearchBar';

class App extends React.Component {

    onSearchSubmit(term){
        axios.get( 'https://api.unsplash.com/search/photos' , {
            params: { query: term },
            headers: {
                Authorization:
                    'Client-ID r9NqnLidh5pkV_v2kROB_joPV0-2yDN7QF7seahjHJI'
            }
        }).then( response => {
            console.log(response.data.total);
        });
    }

    render(){
        return (
            <div className="ui container"style={{ marginTop: '10px' }}>
                <SearchBar onSubmit={this.onSearchSubmit}/>
             </div>
        );
    }   
}

export default App;
