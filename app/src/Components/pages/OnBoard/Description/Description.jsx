import React, {useEffect,useState} from 'react';
import {NavLink} from "react-router-dom";
import Button from "../../../utils/Button";
import PropTypes from 'prop-types';

function Description({setStage}) {
    const [display, setDisplay] = useState(false);

    useEffect(() => {
        setTimeout(() => setDisplay(true), 3000)
    },[display]);

    return (
        <>
            <div className="desc-txt desc-anim">
                <img src="images/po001happy.png" height="100" alt="happy-po"/> <br/>
                I'm PO.<br/>
                Your <b>Personal Organizer</b>.<br/>
                I can assist you by creating <b>custom schedules</b>,
                that will change and adapt according to your behavior. The goal is to achieve the most suitable experience for you.
            </div>
            <div>
                {
                    display ?
                        <Button onClick={() => setStage(1)}
                                value={'Sounds Cool >'}
                                css={'bot-line desc-anim'}
                        />
                        :
                        null
                }

            </div>
        </>
    );
}

export default Description;

Description.propTypes = {
    setStage: PropTypes.func
};
