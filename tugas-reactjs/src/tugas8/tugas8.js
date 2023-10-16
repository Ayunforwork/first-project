import React from 'react';

const Tugas8 = (props) => {
    return (
        <div className='App'>
        <div className="box">
            <h1>Data diri peserta kelas Reactjs</h1>
            <ul>
                <li><strong>Nama Lengkap: </strong>{props.name}</li>
                <li><strong>Batch: </strong>{props.batch}</li>
                <li><strong>Email: </strong>{props.email}</li>
            </ul>
        </div>
        </div>
    )
}

export default Tugas8;