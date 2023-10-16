import React, { useState } from "react";
import { useEffect, useContext } from "react";
import axios from "axios";
import { Label, TextInput } from "flowbite-react";
import { GlobalContext } from "../context/GlobalContext";
import { useParams } from "react-router-dom";

const Tugas15Form = () => {
    const { idData } = useParams()

    const { state, handleFunction } = useContext(GlobalContext);
    const {
        data, setData,
        input, setInput,
        currentId, setCurrentId,
        fetchStatus, setFetchStatus
    } = state

    const {
        handleIndexScore,
        handleInput,
        handleSubmit,
        handleDelete,
        handleEdit
    } = handleFunction

    useEffect(() => {
       if (idData !== undefined) {
        axios.get(`https://backendexample.sanbercloud.com/api/student-scores/${idData}`)
            .then((res) => {
                let data = res.data

                setInput(
                    {
                        name: data.name,
                        course: data.course,
                        score: data.score
                    }
                )
            })
       }

       return () => {
        setInput({
            name: "",
            course: "",
            score: "",
        })
    }

    }, [fetchStatus, setFetchStatus])

    

    return (
        <>
            <div className="w-3/5 mt-20 container mx-auto">
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <div>
                        <div className="mb-2 block">
                            <Label
                                htmlFor="name:"
                                value="name"
                            />
                        </div>
                        <TextInput
                            onChange={handleInput}
                            value={input.name}
                            name="name"
                            type="text"
                            required={true}
                        />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label
                                htmlFor="course:"
                                value="course"
                            />
                        </div>
                        <TextInput
                            onChange={handleInput}
                            value={input.course}
                            name="course"
                            type="text"
                            required={true}
                        />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label
                                htmlFor="score"
                                value="score"
                            />
                        </div>
                        <TextInput
                            onChange={handleInput}
                            value={input.score}
                            name="score"
                            type="number"
                            required={true}
                        />
                    </div>
                    <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Submit</button>
                </form>
            </div>
        </>
    )

}

export default Tugas15Form;