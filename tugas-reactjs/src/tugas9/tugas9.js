import React, { useState } from "react";

const Tugas9 = () => {
    const [angka, setAngka] = useState(1);


    const handlerAngka = () => {
        setAngka(angka + 1)
    }

    return (
        <div className="App">
            <div className="box">
                <p>{angka}</p>
                <button onClick={handlerAngka}>Tambah</button>
                {angka >= 10 ? <span>state count sudah lebih dari 10</span> : ''}
            </div>
        </div>
    )
}

export default Tugas9;