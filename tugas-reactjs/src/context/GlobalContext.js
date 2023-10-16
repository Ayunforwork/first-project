import React, { createContext, useState } from "react";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

export const GlobalContext = createContext()

export const GlobalProvider = (props) => {
    const navigate = useNavigate()
    const [data, setData] = useState(null);
    const [input, setInput] = useState(
        {
            name: "",
            course: "",
            score: 0
        }
    )

    const [currentId, setCurrentId] = useState(-1)
    const [fetchStatus, setFetchStatus] = useState(true);
    let state = {
        data,
        setData,
        input,
        setInput,
        currentId,
        setCurrentId,
        fetchStatus,
        setFetchStatus,
    }

    
    const handleInput = (event) => {
        let name = event.target.name
        let value = event.target.value

        if (name === "name") {
            setInput({ ...input, name: value })
        } else if (name === "course") {
            setInput({ ...input, course: value })
        } else if (name === "score") {
            setInput({ ...input, score: value })
        }
    }

    const handleIndexScore = (param) => {
        if (param >= 80) {
            return "A"
        } else if (param >= 70 && param < 80) {
            return "B"
        } else if (param >= 60 && param < 70) {
            return "C"
        } else if (param >= 50 && param < 60) {
            return "D"
        } else {
            return "E"
        }
    }



    const handleSubmit = (event) => {
        event.preventDefault()
        let { name, course, score } = input

        if (currentId === -1) {
            //create data
            axios.post('https://backendexample.sanbercloud.com/api/student-scores', { name, course, score })
                .then((res) => {
                    console.log(res)
                    setFetchStatus(true)
                    navigate('/tugas15')
                })
                .catch((err) => {
                    alert(err)
                    console.log(err)
                })

        } else {
            //update data
            axios.put(`https://backendexample.sanbercloud.com/api/student-scores/${currentId}`, { name, course, score })
                .then((res) => {
                    setFetchStatus(true)
                    navigate('/tugas15')
                })
                .catch((err) => {
                    alert(err)
                    console.log(err)
                })
        }

        setCurrentId(-1)

        setInput({
            name: "",
            course: "",
            score: "",
        })
    }

    const handleDelete = (event) => {
        let idData = parseInt(event.currentTarget.value)

        axios.delete(`https://backendexample.sanbercloud.com/api/student-scores/${idData}`)
            .then((res) => {
                setFetchStatus(true)
            })
    }

    const handleEdit = (event) => {
        let idData = parseInt(event.currentTarget.value)
        setCurrentId(idData);
        navigate(`/edit/${idData}`)
    }

    let handleFunction = {
        handleIndexScore,
        handleInput,
        handleSubmit,
        handleDelete,
        handleEdit,
        // handleChange,
        // handleLogin
    }


    return (
        <GlobalContext.Provider value={{ state, handleFunction }}>
            {props.children}
        </GlobalContext.Provider>
    )

}