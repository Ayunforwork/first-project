import React, { useState } from "react";
import { useEffect, useContext } from "react";
import axios from "axios";
import { Button, Table } from "flowbite-react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../context/GlobalContext";

const Tugas15List = () => {
    const { state, handleFunction } = useContext(GlobalContext);
    const {
        data,
        setData,
        input,
        setInput,
        currentId,
        setCurrentId,
        fetchStatus,
        setFetchStatus
    } = state

    const {
        handleIndexScore,
        handleInput,
        handleSubmit,
        handleDelete,
        handleEdit
    } = handleFunction


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
   



    return (
        <>
            <Link to='/create'><button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Create Data</button></Link>
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

        </>
    )
}

export default Tugas15List;