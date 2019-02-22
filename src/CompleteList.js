import React from 'react';
import './CompleteList.css'

const CompleteList = () => {
    return(
        <div className='completeList bg-light-red dib br3 pa6 w-30 ma1 grow bw2 shadow-5'>
            <p className="title tc f2 lh-title">Completed List</p>
            <ul class='list p10'>
                <li>Done Items</li>
            </ul>
        </div>
    );
}

export default CompleteList;