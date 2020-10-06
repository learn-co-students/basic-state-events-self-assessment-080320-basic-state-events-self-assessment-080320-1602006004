import React, {useState} from 'react';
import * as myObjects from './objects';


export default function StatementCard(props){
    const [statement, alterStatement] = useState(props.statement);
    console.log(myObjects);

    const imgClickHandler = (e) => {
        alterStatement(!statement);
    }

    return(
        <>
            <h1>{statement? myObjects.yes["yes-statement"] : myObjects.no["no-statement"]}</h1>
            <img alt='' src={statement? myObjects.yes["yes-image"]: myObjects.no["no-image"]} onClick={imgClickHandler}/>
        </>
    )
}