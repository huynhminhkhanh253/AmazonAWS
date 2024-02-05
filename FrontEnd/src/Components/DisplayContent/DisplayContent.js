
import { useState } from 'react';
import LeftSidePanel from './LeftSide/LeftSidePanel';
import RightSidePanel from './RightSide/RightSidePanel';


function DisplayContent(props) {
    const [istick, setIstick] = useState(false);
    const [istick2, setIstick2] = useState(false);
    const getData = (data) => {
        setIstick(data)
    }
    const getData2 = (data) => {
        setIstick2(data)
    }
    return (
        
        <div style={{display:"flex"}}>   
            <div>
                <LeftSidePanel getData = {getData} getData2 = {getData2} />
            </div>
            <div>
                <RightSidePanel istick = {istick} istick2 = {istick2} />      
            </div>          
        </div>
        
        
    );
}

export default DisplayContent;
