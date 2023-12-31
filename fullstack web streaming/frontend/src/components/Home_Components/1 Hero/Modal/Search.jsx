function Search_modal() {
    return (
        <>
            <div
                id="defaultModal!10"
                tabindex="-1"
                aria-hidden="true"
                className="fixed justify-center top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full text-blac8k backdrop-blur-sm"
            >
                <div className="relative w-full max-w-2xl max-h-full">
                    <div className="relative bg-base rounded-lg shadow dark:bg-blac8k">
                        <form className="col-span-2">
                            <label
                                for="default-search"
                                className="mb-2 text-sm font-medium text-gray sr-only dark:text-white"
                            >
                                Search
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                    <svg
                                        aria-hidden="true"
                                        className="w-5 h-5 text-white"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                        ></path>
                                    </svg>
                                </div>
                                <input
                                    type="search"
                                    id="default-search"
                                    className="block bg-base w-full p-4 pl-10 text-sm text-white rounded-lg bg-base dark:bg-base dark:border-base dark:placeholder-base dark:text-white dark:focus:ring-blue dark:focus:border-blue hover:outline-0 outline-transparent"
                                />
                            </div>
                        </form>
                        <div className="p-6 space-y-6">
                            <h1> hi</h1>
                        </div>
                        <div className="flex items-center p-6 space-x-2 border-t border-gray rounded-b dark:border-gray"></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Search_modal