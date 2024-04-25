import React from 'react'
import GlobeA from './GlobeAnimation';
import './globe.css';
function Globe(){
    return (
        <div className='GlobeAnimation'>
            <GlobeA className='SpinningGlobe'/>
            <div className='GlobeText'>
            <p>Random</p>
            <p>Ass</p>
            <p>Text</p>
        </div>
     </div>
    );
}
export default Globe;