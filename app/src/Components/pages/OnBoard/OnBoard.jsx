import React, {useState} from 'react';
import Description from "./Description";
import SignUpForm from "../../utils/Forms/SignUpForm";
import './OnBoard.css';
import ScheduleForm from "../../utils/Forms/ScheduleForm";

function OnBoard(props) {
    const [stage, setStage] = useState(2);
        return (
        <>
            {
                stage === 0 ?
                    <Description setStage={setStage}/> :
                stage === 1 ?
                    <SignUpForm setStage={setStage}/> :
                stage === 2 ?
                    <ScheduleForm setStage={setStage}/> : null
            }

        </>
    );
}

export default OnBoard;
