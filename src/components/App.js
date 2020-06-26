import React from 'react';
import axios from 'axios';

import SearchBar from './SearchBar';

class App extends React.Component {

    state = { images: [] };

    onSearchSubmit = async (term) => {
        const response = await axios
            .get( 'https://api.unsplash.com/search/photos' , {
                params: { query: term },
                headers: {
                    Authorization:
                        'Client-ID r9NqnLidh5pkV_v2kROB_joPV0-2yDN7QF7seahjHJI'
                }
            });
        this.setState({ images: response.data.results });
    }

    render(){
        return (
            <div className="ui container"style={{ marginTop: '10px' }}>
                <SearchBar onSubmit={this.onSearchSubmit}/>
                <br />
                Found {this.state.images.length} images!
             </div>
        );
    }   
}

export default App;
