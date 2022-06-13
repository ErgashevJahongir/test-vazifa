import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from '../auth/Login';
import Registr from '../auth/Registr';
import Home from './Home';
import Layout from './Layout';
import Student from './Student';
import StudentEdit from './StudentEdit';
import StudentsTable from './StudentsTable';

const Root = () => {
    const [userId, setUserId] = useState('');
    const [studentId, setStudentId] = useState(null);
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home userId={userId} />} />
                <Route path="student" element={<Student />} />
                <Route
                    path="/edit"
                    element={<StudentEdit studentId={studentId} />}
                />
                <Route
                    path="students"
                    element={<StudentsTable setStudentId={setStudentId} />}
                />
                <Route
                    path="login"
                    element={<Login userId={userId} setUserId={setUserId} />}
                />
                <Route path="registr" element={<Registr />} />
            </Route>
        </Routes>
    );
};

export default Root;
