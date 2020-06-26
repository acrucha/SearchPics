import React from 'react';

class SearchBar extends React.Component {

    state = { term: '' };
    
    onSubmitForm(e){
        e.preventDefault();
        console.log(this.state.term);
    }

    render(){
        return (
            <div className="ui segment">
                <form onSubmit={this.onSubmitForm} className="ui form">
                    <div className="field">
                        <label>Image Search</label>
                        <div className="ui icon input">
                            <input 
                                type="text" 
                                placeholder="Search..." 
                                value={this.state.term}
                                onChange={e => this.setState({ term: e.target.value })}
                            />
                            <i className="circular search link icon"/>
                        </div>          
                    </div>
                </form>
                
            </div>
        );
    }
}

export default SearchBar;