import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { Button, Table, Label, TextInput, Checkbox } from "flowbite-react";

const Tugas13 = () => {
    const [data, setData] = useState(null);
    const [fetchStatus, setFetchStatus] = useState(true);
    const [input, setInput] = useState(
        {
            name: "",
            course: "",
            score: 0
        }
    )

    const [currentId, setCurrentId] = useState(-1)

    useEffect(() => {
        if (fetchStatus === true) {
            axios.get("https://backendexample.sanbercloud.com/api/student-scores")
                .then((res) => {
                    let result = res.data.map((e) => {
                        console.log(e)
                        let {
                            course,
                            id,
                            name,
                            score,

                        } = e

                    })
                    setData(res.data)
                })
                .catch((err) => {
                    console.log(err)
                    alert(err);
                })
            setFetchStatus(false)
        }
    }, [fetchStatus, setFetchStatus])

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

    const handleSubmit = (event) => {
        event.preventDefault()
        let { name, course, score } = input

        if(currentId === -1) {
            //create data
            axios.post('https://backendexample.sanbercloud.com/api/student-scores', { name, course, score })
            .then((res) => {
                console.log(res)
                setFetchStatus(true)
            })

        } else {
            //update data
           axios.put(`https://backendexample.sanbercloud.com/api/student-scores/${currentId}`, {name, course, score})
            .then((res) => {
                setFetchStatus(true)
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
        // console.log(idData);
        setCurrentId(idData);

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

    return (
        <>
            <Table className="w-3/5 m-auto text-left text-gray-500 shadow-xl rounded-2xl bg-white mt-20">
                <Table.Head className="bg-purple-500 text-white">
                    <Table.HeadCell>
                        NO
                    </Table.HeadCell>
                    <Table.HeadCell>
                        NAMA
                    </Table.HeadCell>
                    <Table.HeadCell>
                        MATA KULIAH
                    </Table.HeadCell>
                    <Table.HeadCell>
                        NILAI
                    </Table.HeadCell>
                    <Table.HeadCell>
                        INDEX NILAI
                    </Table.HeadCell>
                    <Table.HeadCell>
                        ACTION
                    </Table.HeadCell>
                    <Table.HeadCell>
                        <span className="sr-only">
                            Edit
                        </span>
                    </Table.HeadCell>
                </Table.Head>
                <Table.Body className="divide-y">
                    {
                        data !== null && data.length !== 0 && data.map((e, index) => {
                            return <Table.Row key={e.id} className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                    {index + 1}
                                </Table.Cell>
                                <Table.Cell>
                                    {e.name}
                                </Table.Cell>
                                <Table.Cell>
                                    {e.course}
                                </Table.Cell>
                                <Table.Cell>
                                    {e.score}
                                </Table.Cell>
                                <Table.Cell>
                                    {handleIndexScore(e.score)}
                                </Table.Cell>
                                <Table.Cell>
                                    <div className="inline-flex">
                                        <Button onClick={handleEdit} value={e.id} color="warning">
                                            Edit
                                        </Button>
                                        <Button onClick={handleDelete} value={e.id} color="failure">
                                            Delete
                                        </Button>
                                    </div>
                                </Table.Cell>
                            </Table.Row>
                        })
                    }
                </Table.Body>
            </Table>
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
                    <Button type="submit">
                        Submit
                    </Button>
                </form>
            </div>
        </>
    )

}

export default Tugas13;