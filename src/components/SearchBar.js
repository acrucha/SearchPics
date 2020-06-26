import React from 'react';

class SearchBar extends React.Component {

    state = { term: '' };
    
    onSubmitForm = e => {
        e.preventDefault();
        //para mandar esse valor term para o App, vamos ter que utilizar o props e chamar a propriedade que criamos
        //dentro da tag SearchBar no App. No caso, essa pripriedade tem o nome de onSubmit
        //então, faremos da seguinte forma:
        this.props.onSubmit(this.state.term);
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