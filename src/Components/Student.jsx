import { useState } from 'react';
import Select from 'react-select';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
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

const Student = () => {
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
            .post('https://online-excel-heroku.herokuapp.com/student/create', {
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
                organizationId: 8,
            })
            .then((res) => {
                console.log(res.data);
            })
            .catch((err) => {
                console.log(err);
            });

        navigate('/students', { replace: true });
    };

    return (
        <div>
            <h1 className="student">Student information</h1>
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
                            defaultValue={universityName}
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
                            defaultValue={entranceYear}
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
                            defaultValue={graduationYear}
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
                            defaultValue={faculty}
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
                            defaultValue={speciality}
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
                            defaultValue={studyType}
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
                            defaultValue={academicType}
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
                            defaultValue={academicLevel}
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

export default Student;
