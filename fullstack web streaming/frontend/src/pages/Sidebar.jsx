import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { LogOut, reset, getMe } from "../features/AuthSlice.js";
import { useEffect } from "react";

function Sidebar() {

    const dispacth = useDispatch();
    const navigate = useNavigate();
    const { isError, user } = useSelector((state => state.auth));

    useEffect(() => {
        dispacth(getMe());
    }, [dispacth]);

    useEffect(() => {
        if (isError) {
            navigate("/");
        }
        if (user && user.role !== "Admin") {
            navigate("/Home")
        }
    }, [isError, user, navigate]);

    const logout = () => {
        dispacth(LogOut());
        dispacth(reset());
        navigate("/");
    }

    return (
        <>
            <nav id="Sidebar" className="fixed top-0 z-50 w-full fill-current border-b border-gray200 dark:bg-gray800 dark:border-gray700">
                <div className="px-3 py-3 lg:px-5 lg:pl-3">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center justify-start">
                            <button
                                data-drawer-target="logo-sidebar"
                                data-drawer-toggle="logo-sidebar"
                                aria-controls="logo-sidebar"
                                type="button"
                                className="inline-flex items-center p-2 text-sm text-gray500 rounded-lg sm:hidden hover:bg-gray100 focus:outline-none focus:ring-2 focus:ring-gray200 dark:text-gray400 dark:hover:bg-gray700 dark:focus:ring-gray600"
                            >
                                <span className="sr-only">Open sidebar</span>
                                <svg
                                    className="w-6 h-6"
                                    aria-hidden="true"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        clipRule="evenodd"
                                        fillRule="evenodd"
                                        d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                                    ></path>
                                </svg>
                            </button>
                            <a className="flex ml-2 md:mr-24">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    className="w-9 h-9 text-blue-400"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M9.674 2.075a.75.75 0 01.652 0l7.25 3.5A.75.75 0 0117 6.957V16.5h.25a.75.75 0 010 1.5H2.75a.75.75 0 010-1.5H3V6.957a.75.75 0 01-.576-1.382l7.25-3.5zM11 6a1 1 0 11-2 0 1 1 0 012 0zM7.5 9.75a.75.75 0 00-1.5 0v5.5a.75.75 0 001.5 0v-5.5zm3.25 0a.75.75 0 00-1.5 0v5.5a.75.75 0 001.5 0v-5.5zm3.25 0a.75.75 0 00-1.5 0v5.5a.75.75 0 001.5 0v-5.5z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">
                                    Admin Setting
                                </span>
                            </a>
                        </div>
                        <div className="flex items-center">
                            <div className="flex items-center ml-3">
                                <div>
                                    <button
                                        type="button"
                                        className="flex text-sm rounded-full focus:ring-4 focus:ring-gray300 dark:focus:ring-gray600"
                                        aria-expanded="false"
                                        data-dropdown-toggle="dropdown-user"
                                    >
                                        <span className="sr-only">Open user menu</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="text-white w-7 h-7">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                                        </svg>

                                    </button>
                                </div>
                                <div
                                    className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray100 rounded shadow dark:bg-gray700 dark:divide-gray600"
                                    id="dropdown-user"
                                >
                                    <div className="px-4 py-3" role="none">
                                        <p
                                            className="text-sm text-gray900 dark:text-white"
                                            role="none"
                                        >
                                            {user && user.name}
                                        </p>
                                        <p
                                            className="text-sm font-medium text-gray900 truncate dark:text-gray300"
                                            role="none"
                                        >
                                            {user && user.email}
                                        </p>
                                    </div>
                                    <ul className="py-1" role="none">
                                        <li>
                                            <a
                                                className="block px-4 py-2 text-sm text-gray700 hover:bg-gray100 dark:text-gray300 dark:hover:bg-gray600 dark:hover:text-white"
                                                role="menuitem"
                                            >
                                                Settings
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                className="block px-4 py-2 text-sm text-gray700 hover:bg-gray100 dark:text-gray300 dark:hover:bg-gray600 dark:hover:text-white"
                                                role="menuitem"
                                            >
                                                Earnings
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                className="block px-4 py-2 text-sm text-gray700 hover:bg-gray100 dark:text-gray300 dark:hover:bg-gray600 dark:hover:text-white"
                                                role="menuitem"
                                            >
                                                Sign out
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
            <aside
                id="logo-sidebar"
                className="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray200 sm:translate-x-0 dark:bg-gray800 dark:border-gray700"
                aria-label="Sidebar"
            >
                <div className="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray800">
                    <ul className="space-y-2 font-medium">
                        <li>
                            <a
                                href='/sidebar/dashboard'
                                className="flex items-center p-2 text-gray900 rounded-lg dark:text-white hover:bg-gray100 dark:hover:bg-gray700  w-full transition duration-75 group"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="flex-shrink-0 w-6 h-6 text-gray500 transition duration-75 dark:text-gray400 group-hover:text-gray900 dark:group-hover:text-white"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25"
                                    />
                                </svg>

                                <span className="flex-1 ml-3 whitespace-nowrap">Dashboard</span>
                            </a>
                        </li>
                        <li>
                            <button
                                type="button"
                                className="flex items-center w-full p-2 text-gray900 transition duration-75 rounded-lg group hover:bg-gray100 dark:text-white dark:hover:bg-gray700"
                                aria-controls="dropdown-example"
                                data-collapse-toggle="dropdown-example"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="flex-shrink-0 w-6 h-6 text-gray500 transition duration-75 dark:text-gray400 group-hover:text-gray900 dark:group-hover:text-white"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
                                    />
                                </svg>

                                <span className="flex-1 ml-3 text-left whitespace-nowrap">
                                    Website
                                </span>
                                <svg
                                    className="w-6 h-6"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                        clipRule="evenodd"
                                    ></path>
                                </svg>
                            </button>
                            <ul id="dropdown-example" className="hidden py-2 space-y-2">
                                <li>
                                    <a
                                        href="/sidebar/users"
                                        className="flex items-center w-full p-2 text-gray900 transition duration-75 rounded-lg pl-11 group hover:bg-gray100 dark:text-white dark:hover:bg-gray700"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="currentColor"
                                            className="flex-shrink-0 w-6 h-6 text-gray500 transition duration-75 dark:text-gray400 group-hover:text-gray900 dark:group-hover:text-white"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                                            />
                                        </svg>
                                        <span>Users</span>
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="/sidebar/produk"
                                        className="flex items-center w-full p-2 text-gray900 transition duration-75 rounded-lg pl-11 group hover:bg-gray100 dark:text-white dark:hover:bg-gray700"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="currentColor"
                                            className="flex-shrink-0 w-6 h-6 text-gray500 transition duration-75 dark:text-gray400 group-hover:text-gray900 dark:group-hover:text-white"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M9 8.25H7.5a2.25 2.25 0 00-2.25 2.25v9a2.25 2.25 0 002.25 2.25h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25H15m0-3l-3-3m0 0l-3 3m3-3V15"
                                            />
                                        </svg>

                                        <span>Produk</span>
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className="flex items-center w-full p-2 text-gray900 transition duration-75 rounded-lg pl-11 group hover:bg-gray100 dark:text-white dark:hover:bg-gray700"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="currentColor"
                                            className="flex-shrink-0 w-6 h-6 text-gray500 transition duration-75 dark:text-gray400 group-hover:text-gray900 dark:group-hover:text-white"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z"
                                            />
                                        </svg>
                                        <span>Role</span>
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className="flex items-center w-full p-2 text-gray900 transition duration-75 rounded-lg pl-11 group hover:bg-gray100 dark:text-white dark:hover:bg-gray700"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="currentColor"
                                            className="flex-shrink-0 w-6 h-6 text-gray500 transition duration-75 dark:text-gray400 group-hover:text-gray900 dark:group-hover:text-white"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                                            />
                                        </svg>
                                        <span>Menu</span>
                                    </a>
                                </li>
                                <li>
                                    <button
                                        type="button"
                                        className="flex items-center w-full p-2 text-gray900 transition duration-75 rounded-lg pl-11 group hover:bg-gray100 dark:text-white dark:hover:bg-gray700"
                                        aria-controls="dropdown-example1"
                                        data-collapse-toggle="dropdown-example1"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="currentColor"
                                            className="flex-shrink-0 w-6 h-6 text-gray500 transition duration-75 dark:text-gray400 group-hover:text-gray900 dark:group-hover:text-white"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z"
                                            />
                                        </svg>
                                        <span className="flex-1 ml-3 text-left whitespace-nowrap">
                                            Assign Role
                                        </span>
                                        <svg
                                            className="w-6 h-6"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                clipRule="evenodd"
                                            ></path>
                                        </svg>
                                    </button>
                                    <ul id="dropdown-example1" className="hidden py-2 space-y-2">
                                        <li>
                                            <a
                                                className="flex items-center w-full p-2 text-gray900 transition duration-75 rounded-lg pl-20 group hover:bg-gray100 dark:text-white dark:hover:bg-gray700"
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    strokeWidth="1.5"
                                                    stroke="currentColor"
                                                    className="flex-shrink-0 w-6 h-6 text-gray500 transition duration-75 dark:text-gray400 group-hover:text-gray900 dark:group-hover:text-white"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                                                    />
                                                </svg>
                                                <span>User Role</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                className="flex items-center w-full p-2 text-gray900 transition duration-75 rounded-lg pl-20 group hover:bg-gray100 dark:text-white dark:hover:bg-gray700"
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    strokeWidth="1.5"
                                                    stroke="currentColor"
                                                    className="flex-shrink-0 w-6 h-6 text-gray500 transition duration-75 dark:text-gray400 group-hover:text-gray900 dark:group-hover:text-white"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                                                    />
                                                </svg>
                                                <span>Moduke Role</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                className="flex items-center w-full p-2 text-gray900 transition duration-75 rounded-lg pl-20 group hover:bg-gray100 dark:text-white dark:hover:bg-gray700"
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    strokeWidth="1.5"
                                                    stroke="currentColor"
                                                    className="flex-shrink-0 w-6 h-6 text-gray500 transition duration-75 dark:text-gray400 group-hover:text-gray900 dark:group-hover:text-white"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                                                    />
                                                </svg>
                                                <span>Menu Role</span>
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a
                                href="/Inbox"
                                className="flex items-center p-2 text-gray900 rounded-lg dark:text-white hover:bg-gray100 dark:hover:bg-gray700  w-full transition duration-75 group"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="flex-shrink-0 w-6 h-6 text-gray500 transition duration-75 dark:text-gray400 group-hover:text-gray900 dark:group-hover:text-white"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"
                                    />
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                    />
                                </svg>
                                <span className="flex-1 ml-3 whitespace-nowrap">
                                    Setting Website
                                </span>
                            </a>
                        </li>
                        <li>
                            <a
                                href="/Inbox"
                                className="flex items-center p-2 text-gray900 rounded-lg dark:text-white hover:bg-gray100 dark:hover:bg-gray700  w-full transition duration-75 group"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="flex-shrink-0 w-6 h-6 text-gray500 transition duration-75 dark:text-gray400 group-hover:text-gray900 dark:group-hover:text-white"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                                    />
                                </svg>

                                <span className="flex-1 ml-3 whitespace-nowrap">
                                    Loyout Setting
                                </span>
                            </a>
                        </li>
                        <li>
                            <a
                                onClick={logout}
                                className="cursor-pointer flex items-center p-2 text-gray900 rounded-lg dark:text-white hover:bg-gray100 dark:hover:bg-gray700  w-full transition duration-75 group"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="flex-shrink-0 w-6 h-6 text-gray500 transition duration-75 dark:text-gray400 group-hover:text-gray900 dark:group-hover:text-white">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
                                </svg>
                                <span className="flex-1 ml-3 whitespace-nowrap">
                                    LogOut
                                </span>
                            </a>
                        </li>
                    </ul>
                </div>
            </aside>
        </>
    )
}

export default Sidebar