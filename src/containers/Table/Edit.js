import React from 'react';

const Edit = (props) => {
    let params = new URLSearchParams(props.location.search);
    let id = params.get('id');
    return(
        <>
            <h6>Edit</h6>
            <div>{id}</div>
        </>
    )
}

export default Edit;