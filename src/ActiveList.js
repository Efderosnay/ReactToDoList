import React from 'react';
import './ActiveList.css';

const ActiveList = ({ addItems, removeItems}) => {
    return(
        <div className='activeList bg-light-red dib br3 pa6 w-30 ma2 grow bw2 shadow-5'>
            <p className="dolist f2 lh-title">Do List</p>
                    
                <form>  
                        <div>
                            <legend className='center'> 
                            <input
                                className='listName tc pa1 ba b--black bg-lightest-orange'
                                type='list title' 
                                placeholder='Name your list'
                            /> 
                            </legend>
                        </div>
                        <div>
                            <input class="mr2" type="checkbox" id="addItems" value="addItems"/>
                        </div>
                        <span className='itemName'>
                        <button className='delete' onClick={() => this.props.removeItems(this.props.id)}>X</button>
                        {/* {this.props.itemsName} */}
                        </span>
                </form>
                        
        </div>
    );
}
export default ActiveList;