import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { Button, Table } from "flowbite-react";

const Tugas11 = () => {
    const [data, setData] = useState(null);

    useEffect(() => {

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


    }, [])

    //console.log(data);
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

    return (
        <>
            <Table className="w-1/2 m-auto text-left text-gray-500 shadow-xl rounded-2xl bg-white mt-20 mb-20">
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
                                        <Button color="light">
                                            Edit
                                        </Button>
                                        <Button color="failure">
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

export default Tugas11;