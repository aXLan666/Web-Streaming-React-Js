function Navigation() {
    return (
        <>
            <div className="navbar bg-transparent absolute top-0 left-0 right-0 z-50">
                <div className="navbar-start">
                    <div className="btn bg-transparent border-transparent hover:bg-transparent hover:border-transparent absolute">
                        <div className="w-10 rounded-full">
                            <img
                                src="https://cdn-icons-png.flaticon.com/512/2586/2586717.png"
                                alt=""
                                className="w-10"
                            />
                        </div>
                        <p className="text-white font-mono text-xl">Banglades</p>
                    </div>
                </div>
                <div className="navbar-center">
                    <ul>
                        <li className="btn btn-xs mx-1 text-white bg-transparent border-transparent hover:bg-transparent hover:border-transparent">
                            <a href="/home">
                                Home
                            </a>
                        </li>
                        <li className="btn btn-xs mx-1 text-white bg-transparent border-transparent hover:bg-transparent hover:border-transparent">
                            <a>
                                Discover
                            </a>
                        </li>
                        <li className="btn btn-xs mx-1 text-white bg-transparent border-transparent hover:bg-transparent hover:border-transparent">
                            <a>
                                Movie Release
                            </a>
                        </li>
                        <li className="btn btn-xs mx-1 text-white bg-transparent border-transparent hover:bg-transparent hover:border-transparent">
                            <a href="/pembelian">
                                pembelian
                            </a>
                        </li>
                        <li className="btn btn-xs mx-1 text-white bg-transparent border-transparent hover:bg-transparent hover:border-transparent">
                            <a>
                                About
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="navbar-end">

                    <button
                        className="btn btn-ghost btn-circle hover:bg-transparent"
                        type="button"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 text-white"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                            />
                        </svg>
                    </button>

                    <button
                        className="btn btn-ghost btn-circle hover:bg-transparent"
                        type="button"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 text-white"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                            />
                        </svg>
                    </button>

                    <button
                        className="btn btn-ghost btn-circle hover:bg-transparent avatar"
                        type="button"
                    >
                        <div className="w-10 rounded-full">
                            <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                        </div>
                    </button>

                </div>
            </div>
        </>
    )
}

export default Navigation