import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component {
    state = { 
        term: ''
    };

    handleChange = (event) => {
        this.setState({
          term: event.target.value,
        });
      };
    
      handleSubmit = (event) => {
        event.preventDefault();
        this.props.handleFormSubmit(this.state.term);
      };
      
    render() { 
        return ( 
            <div className = "searching">
                <form onSubmit = {this.handleSubmit}>
                    <div>
                        <label htmlFor = "video-search">Video Search</label>
                        <input onChange = {this.handleChange} name = 'video-search' type = "text" value = {this.state.term} />
                        <button type = "submit">Search Now!</button>
                    </div>
                </form>
            </div>
         );
    }
}
 
export default SearchBar;