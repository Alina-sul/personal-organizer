import React, {useState} from 'react';
import Description from "./Description";
import SignUpForm from "./SignUpForm";
import './OnBoard.css';

function OnBoard(props) {
    const [stage, setStage] = useState(1);
        return (
        <>
            {
                stage === 0 ?
                    <Description setStage={setStage}/> :
                stage === 1 ?
                    <SignUpForm setStage={setStage}/> :
                stage === 2 ?
                    <SignUpForm setStage={setStage}/> : null
            }

        </>
    );
}

export default OnBoard;
