import React from 'react';
import ActiveList from './ActiveList';

const List = ({items}) => {
    return(
        <div> 
            {
                items.map((user, i) =>{
                    return(
                        <ActiveList 
                        
                        />  
                    )
       
               
                })
            }
        </div>
    );
}

export default List;