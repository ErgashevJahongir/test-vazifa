import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { Form, Table, Typography } from 'antd';
import 'antd/dist/antd.min.css';
import './../Styles/studentsTable.css';
import './../Styles/students.css';

const originData = [];

const StudentsTable = ({ setStudentId }) => {
    const [form] = Form.useForm();
    const [data, setData] = useState(originData);

    let navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => {
            setInterval(() => {
                axios
                    .post(
                        'https://online-excel-heroku.herokuapp.com/student/list'
                    )
                    .then((res) => {
                        let table = res.data.data.data;
                        setData(table);
                    })
                    .catch((err) => {
                        console.log(err);
                    });
            }, 5000);
        }, 1000);
    }, []);

    const Edited = (id) => {
        setStudentId(id);
        navigate('/edit');
    };

    const Delete = (id) => {
        axios
            .delete(
                `https://online-excel-heroku.herokuapp.com/student/delete/${id}`
            )
            .catch((err) => {
                console.log(err);
            });

        axios
            .post('https://online-excel-heroku.herokuapp.com/student/list')
            .then((res) => {
                let table = res.data.data.data;
                setData(table);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const columns = [
        {
            title: 'Name',
            dataIndex: 'fullName',
            key: 'fullName',
            width: 150,
            fixed: 'left',
        },
        {
            title: 'University Name',
            dataIndex: 'universityName',
            key: 'universityName',
            width: 150,
        },
        {
            title: 'Faculty',
            dataIndex: 'faculty',
            key: 'faculty',
            width: 100,
        },
        {
            title: 'Speciality',
            dataIndex: 'speciality',
            key: 'speciality',
            width: 100,
        },
        {
            title: 'Entrance Year',
            dataIndex: 'entranceYear',
            key: 'entranceYear',
            width: 100,
        },
        {
            title: 'Graduation Year',
            dataIndex: 'graduationYear',
            key: 'graduationYear',
            width: 105,
        },
        {
            title: 'Study Type',
            dataIndex: 'studyType',
            key: 'studyType',
            width: 110,
        },
        {
            title: 'Academic Type',
            dataIndex: 'academicType',
            key: 'academicType',
            width: 135,
        },
        {
            title: 'Diploma Serial',
            dataIndex: 'diplomaSerial',
            key: 'diplomaSerial',
            width: 135,
        },
        {
            title: 'Diploma Registration Number',
            dataIndex: 'diplomaRegistrationNumber',
            key: 'diplomaRegistrationNumber',
            width: 135,
        },
        {
            title: 'Given Date',
            dataIndex: 'givenDate',
            key: 'givenDate',
            width: 100,
        },
        {
            title: 'Academic Level',
            dataIndex: 'academicLevel',
            key: 'academicLevel',
            width: 135,
        },
        {
            title: 'Appendix Number',
            dataIndex: 'appendixNumber',
            key: 'appendixNumber',
            width: 135,
        },
        {
            title: 'operation',
            dataIndex: 'operation',
            width: 130,
            fixed: 'right',
            render: (_, record) => {
                return (
                    <>
                        <Typography.Link onClick={() => Edited(record.id)}>
                            Edit
                        </Typography.Link>
                        <Typography.Link
                            className="delete"
                            onClick={() => Delete(record.id)}
                        >
                            Delete
                        </Typography.Link>
                    </>
                );
            },
        },
    ];

    return (
        <>
            <div className="table">
                <Link to="/student" className="create">
                    Student create
                </Link>
                <h2 className="students">Students Table</h2>
                <Form form={form} component={false}>
                    <Table
                        bordered
                        dataSource={data}
                        columns={columns}
                        rowClassName="editable-row"
                        scroll={{
                            x: 'calc(700px + 50%)',
                            y: 600,
                        }}
                    />
                </Form>
            </div>
        </>
    );
};

export default StudentsTable;
