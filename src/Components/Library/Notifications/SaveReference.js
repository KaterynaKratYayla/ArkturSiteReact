import React from "react";

const SaveReference = ({customer_reference}) => {
    return (
        <div>
            {/* <div>Hi there!</div> */}
            <div>Your Customer Reference: <span style={{fontSize:'17px',
                                                        fontFamily:'Arial Narrow',
                                                        color:'#4D4B4B',
                                                        fontWeight:'bold'}}>
                {customer_reference} </span>
            </div>
        </div>
    );
};

export default SaveReference;
