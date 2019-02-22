import React, {Component} from 'react';
import './items.css';

class Items extends Component {

    UserInput = React.createRef();
    handleOnSubmit= (event)=> {
        event.preventDefault();
        this.props.addItems(this.UserInput.current.value);
        event.currentTarget.reset();       
    }
    render() {
    return (
        <div className='tc'>           
            <form onSubmit={this.handleSubmit}>
                <input type="text"
                ref = {this.UserInput} 
                placeholder= "Enter Items"/>
                <input type = "submit" value = "Add Items"/>
            </form>            
        </div>
    );
}
}
export default Items;