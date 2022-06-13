import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { Form, Table, Typography } from 'antd';
import Select from 'react-select';
import 'antd/dist/antd.css';
import './../Styles/studentsTable.css';
import './../Styles/students.css';

const optionsUniver = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
];

const optionsFaculty = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
];

const optionsSpeciality = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
];

const optionsStudyType = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
];

const optionsAcademicType = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
];

const optionsAcademicLevel = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
];

const optionsEntranceYear = [
    { value: '2017', label: '2017' },
    { value: '2018', label: '2018' },
    { value: '2019', label: '2019' },
    { value: '2020', label: '2020' },
    { value: '2021', label: '2021' },
];

const optionsGraduationYear = [
    { value: '2020', label: '2020' },
    { value: '2021', label: '2021' },
    { value: '2022', label: '2022' },
    { value: '2023', label: '2023' },
    { value: '2024', label: '2024' },
];

let isEdited = false;
let editId = null;
let son = 0;

export const StudentEdit = ({ studentId }) => {
    const [data, setData] = useState(null);

    console.log(data);
    console.log(editId);

    const [fullName, setFullName] = useState('');
    const [diplomaSerial, setDiplomaSerial] = useState('');
    const [diplomaRegistrationNumber, setDiplomaRegistrationNumber] =
        useState('');
    const [givenDate, setGivenDate] = useState('');
    const [appendixNumber, setAppendixNumber] = useState('');

    const [universityName, setUniversityName] = useState(null);
    const [entranceYear, setEntranceYear] = useState(null);
    const [graduationYear, setGraduationYear] = useState(null);
    const [faculty, setFaculty] = useState(null);
    const [speciality, setSpeciality] = useState(null);
    const [studyType, setStudyType] = useState(null);
    const [academicType, setAcademicType] = useState(null);
    const [academicLevel, setAcademicLevel] = useState(null);

    let navigate = useNavigate();

    useEffect(() => {
        axios
            .get(
                `https://online-excel-heroku.herokuapp.com/student/get/${editId}`
            )
            .then((res) => {
                let table = res.data.data.data;
                setData(table);
                setUniversityName(table.universityName);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    son++;

    if (son === 6) {
        setFullName(data.fullName);
        setDiplomaSerial(data.diplomaSerial);
        setDiplomaRegistrationNumber(data.diplomaRegistrationNumber);
        setGivenDate(data.givenDate);
        setAppendixNumber(data.appendixNumber);

        setUniversityName(data.universityName);
        setEntranceYear(data.entranceYear);
        setGraduationYear(data.graduationYear);
        setFaculty(data.faculty);
        setSpeciality(data.speciality);
        setStudyType(data.studyType);
        setAcademicType(data.academicType);
        setAcademicLevel(data.academicLevel);
    }

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        if (id === 'fullName') {
            setFullName(value);
        }
        if (id === 'diplomaSerial') {
            setDiplomaSerial(value);
        }
        if (id === 'diplomaRegistrationNumber') {
            setDiplomaRegistrationNumber(value);
        }
        if (id === 'givenDate') {
            setGivenDate(value);
        }
        if (id === 'appendixNumber') {
            setAppendixNumber(value);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios
            .post('https://online-excel-heroku.herokuapp.com/student/update', {
                fullName: fullName,
                universityName: universityName.value,
                entranceYear: entranceYear.value,
                graduationYear: graduationYear.value,
                faculty: faculty.value,
                speciality: speciality.value,
                studyType: studyType.value,
                academicType: academicType.value,
                diplomaSerial: diplomaSerial,
                diplomaRegistrationNumber: diplomaRegistrationNumber,
                givenDate: givenDate,
                academicLevel: academicLevel.value,
                appendixNumber: appendixNumber,
                organizationId: 10,
            })
            .then((res) => {
                console.log(res.data);
            })
            .catch((err) => {
                console.log(err);
            });

        isEdited = false;
    };

    return (
        <div>
            <h1>Student information</h1>
            <div className="form">
                <div className="form-body">
                    <div className="fullname">
                        <label className="form__label" htmlFor="fullName">
                            Full Name:{' '}
                        </label>
                        <input
                            className="form__input"
                            required
                            type="text"
                            id="fullName"
                            placeholder="Full Name"
                            value={fullName}
                            onChange={(e) => handleInputChange(e)}
                        />
                    </div>
                    <div className="universityName">
                        <label htmlFor="universityName" className="form__label">
                            University Name:{' '}
                        </label>
                        <Select
                            defaultValue={optionsUniver[0]}
                            onChange={setUniversityName}
                            options={optionsUniver}
                            id="universityName"
                        />
                    </div>
                    <div className="entranceYear">
                        <label htmlFor="entranceYear" className="form__label">
                            Entrance Year
                        </label>
                        <Select
                            defaultValue={optionsEntranceYear[0]}
                            onChange={setEntranceYear}
                            options={optionsEntranceYear}
                            id="entranceYear"
                        />
                    </div>
                    <div className="graduationYear">
                        <label htmlFor="graduationYear" className="form__label">
                            Graduation Year
                        </label>
                        <Select
                            defaultValue={optionsGraduationYear[0]}
                            onChange={setGraduationYear}
                            options={optionsGraduationYear}
                            id="graduationYear"
                        />
                    </div>
                    <div className="faculty">
                        <label className="form__label" htmlFor="faculty">
                            Faculty Name:{' '}
                        </label>
                        <Select
                            defaultValue={optionsFaculty[0]}
                            onChange={setFaculty}
                            options={optionsFaculty}
                            id="faculty"
                        />
                    </div>
                    <div className="speciality">
                        <label className="form__label" htmlFor="speciality">
                            Speciality Name:{' '}
                        </label>
                        <Select
                            defaultValue={optionsSpeciality[0]}
                            onChange={setSpeciality}
                            options={optionsSpeciality}
                            id="speciality"
                        />
                    </div>
                    <div className="studyType">
                        <label className="form__label" htmlFor="studyType">
                            Study Type:{' '}
                        </label>
                        <Select
                            defaultValue={optionsStudyType[0]}
                            onChange={setStudyType}
                            options={optionsStudyType}
                            id="studyType"
                        />
                    </div>
                    <div className="academicType">
                        <label className="form__label" htmlFor="academicType">
                            Academic Type:{' '}
                        </label>
                        <Select
                            defaultValue={optionsAcademicType[0]}
                            onChange={setAcademicType}
                            options={optionsAcademicType}
                            id="academicType"
                        />
                    </div>
                    <div className="diplomaSerial">
                        <label className="form__label" htmlFor="diplomaSerial">
                            Diploma Serial:{' '}
                        </label>
                        <input
                            className="form__input"
                            required
                            type="text"
                            id="diplomaSerial"
                            placeholder="Diploma Serial"
                            value={diplomaSerial}
                            onChange={(e) => handleInputChange(e)}
                        />
                    </div>
                    <div className="diplomaRegistrationNumber">
                        <label
                            className="form__label"
                            htmlFor="diplomaRegistrationNumber"
                        >
                            Diploma Registration Number:{' '}
                        </label>
                        <input
                            className="form__input"
                            required
                            type="text"
                            id="diplomaRegistrationNumber"
                            value={diplomaRegistrationNumber}
                            placeholder="Diploma Registration Number"
                            onChange={(e) => handleInputChange(e)}
                        />
                    </div>
                    <div className="givenDate">
                        <label className="form__label" htmlFor="givenDate">
                            Given Date:{' '}
                        </label>
                        <input
                            className="form__input"
                            required
                            type="date"
                            id="givenDate"
                            value={givenDate}
                            placeholder="Given Date"
                            onChange={(e) => handleInputChange(e)}
                        />
                    </div>
                    <div className="academicLevel">
                        <label className="form__label" htmlFor="academicLevel">
                            Academic Level:{' '}
                        </label>
                        <Select
                            defaultValue={optionsAcademicLevel[0]}
                            onChange={setAcademicLevel}
                            options={optionsAcademicLevel}
                            id="academicLevel"
                        />
                    </div>
                    <div className=" ">
                        <label className="form__label" htmlFor="appendixNumber">
                            Appendix Number:{' '}
                        </label>
                        <input
                            type="string"
                            required
                            id="appendixNumber"
                            className="form__input"
                            placeholder="Appendix Number"
                            value={appendixNumber}
                            onChange={(e) => handleInputChange(e)}
                        />
                    </div>
                </div>

                <div className="footer">
                    <button
                        type="submit"
                        className="btn"
                        onClick={(e) => handleSubmit(e)}
                    >
                        Create Student
                    </button>
                </div>
            </div>
        </div>
    );
};

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
        isEdited = true;
        editId = id;
    };

    const Delete = (id) => {
        axios
            .delete(
                `https://online-excel-heroku.herokuapp.com/student/delete/${id}`
            )
            .catch((err) => {
                console.log(err);
            });

        let newData = data.filter((item) => item.id !== id);
        setData(newData);
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

    if (isEdited) {
        return <StudentEdit />;
    }

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
                            y: 500,
                        }}
                    />
                </Form>
            </div>
        </>
    );
};

export default StudentsTable;
