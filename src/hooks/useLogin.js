import { useState } from 'react';
import axios from 'axios';

const useLogin = () => {
    const [userCredentials, setUserCredentials] = useState({
        email: '',
        password: '',
    });

    const handleInputChange = (e) => {
        setUserCredentials({
            ...userCredentials,
            [e.target.name]: e.target.value,
        });
    };

    const login = async () => {
        try {
            const response = await axios.post('http://localhost:8000/api/login', {
                email: userCredentials.email,
                password: userCredentials.password,
            });

            const token = response.data.token;

            // Store the token in local storage or state for subsequent requests
            localStorage.setItem('token', token);
            
            // Return a success message or token for further handling in components
            return { success: true, token };
        } catch (error) {
            console.error('Login Error:', error.response.data);
            return { success: false, error: error.response.data };
        }
    };

    return { userCredentials, handleInputChange, login };
};

export default useLogin;
