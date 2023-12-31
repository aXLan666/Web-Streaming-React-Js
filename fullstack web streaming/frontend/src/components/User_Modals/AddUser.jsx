import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


function AddUser() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confPassword, setConfPassword] = useState("");
    const [role, setRole] = useState("");
    const [msg, setMsg] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const saveUser = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:5009/users", {
                name: name,
                email: email,
                password: password,
                confPassword: confPassword,
                role: role,
            });
            window.location.reload()
        } catch (error) {
            if (error.response) {
                setMsg(error.response.data.msg);
            }
        }
    };


    const handleInputChange = (event) => {
        setConfPassword(event.target.value);
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <>

            <div id="ModalTambahDataUser" tabIndex="-1" aria-hidden="true" className="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
                <div className="relative w-full max-w-2xl max-h-full">
                    <div className="relative bg-white rounded-lg shadow dark:bg-gray700">
                        <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray600">
                            <h3 className="text-xl font-semibold text-gray900 dark:text-white">
                                Tambah Data User
                            </h3>
                            <button type="button" className="text-gray400 bg-transparent hover:bg-gray200 hover:text-gray900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray600 dark:hover:text-white" data-modal-hide="ModalTambahDataUser">
                                <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                <span className="sr-only">Close modal</span>
                            </button>
                        </div>
                        <div className="p-6 space-y-6">

                            <form onSubmit={saveUser} >
                                <p className="has-text-centered">{msg}</p>
                                <div className='mb-2'>
                                    <input type="text" placeholder="Name" className="input input-bordered input-success w-full max-w-mix" value={name} onChange={(e) => setName(e.target.value)} />
                                </div>
                                <div className='mb-2'>
                                    <input type="text" placeholder="Email" className="input input-bordered input-success w-full max-w-mix" value={email} onChange={(e) => setEmail(e.target.value)} />
                                </div>
                                <div className='mb-2'>
                                    <input type="text" placeholder="Password" className="input input-bordered input-success w-full max-w-mix" value={password} onChange={(e) => setPassword(e.target.value)} />
                                </div>
                                <div className="relative mb-2">
                                    <input
                                        type={showPassword ? 'text' : 'password'}
                                        placeholder="confPassword"
                                        value={confPassword}
                                        onChange={((e) => setConfPassword(e.target.value), handleInputChange)}
                                        className="input input-bordered input-success w-full max-w-mix"
                                    />
                                    <button
                                        type="button"
                                        onClick={togglePasswordVisibility}
                                        className="absolute left-[590px] top-1/2 transform -translate-y-1/2 bg-transparent border-none focus:outline-none"
                                    >
                                        {showPassword ? (
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth="1.5"
                                                stroke="currentColor"
                                                className="w-6 h-6"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                                                />
                                            </svg>
                                        ) : (
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth="1.5"
                                                stroke="currentColor"
                                                className="w-6 h-6"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                                                />
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                                />
                                            </svg>
                                        )}
                                    </button>
                                </div>
                                <div className='field mb-2'>
                                    <div className='control'>
                                        <select className='select select-bordered w-full max-w-mix text-lg' value={role}
                                            onChange={(e) => setRole(e.target.value)}>
                                            <option value="User">User</option>
                                            <option value="Admin">Admin</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="flex items-center p-6 space-x-2 border-t border-gray200 rounded-b dark:border-gray600">
                                    <button className='btn btn-primary mt-2' type="submit">
                                        Save
                                    </button>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default AddUser;