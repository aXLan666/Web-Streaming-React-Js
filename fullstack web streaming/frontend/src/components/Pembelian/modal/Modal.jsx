import React, { useState, useEffect } from "react";

function ModalPembelian({ isOpen, closeModal, pesanaan }) {
    const [external_id, setExternal_id] = useState("");
    const [name, setName] = useState("");
    const [harga, setHarga] = useState();
    const [status, setStatus] = useState("");

    useEffect(() => {
        if (isOpen && pesanaan) {
            setExternal_id(pesanaan.external_id);
            setName(pesanaan.name);
            setHarga(pesanaan.harga);
            setStatus(pesanaan.status);
        }
    }, [isOpen, pesanaan]);

    return (
        <>
            <div
                id="ModalPembelian"
                tabIndex="-1"
                aria-hidden="true"
                className={`fixed inset-0 z-50 flex items-center justify-center ${isOpen ? "" : "hidden"}`}
            >
                <div className="flex items-center justify-center relative w-full max-w-2xl max-h-full">
                    <div className="relative bg-white rounded-lg shadow dark:bg-gray700">
                        <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray600">
                            <button
                                onClick={closeModal}
                                type="button"
                                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                            >
                                <svg
                                    aria-hidden="true"
                                    className="w-5 h-5"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                        clipRule="evenodd"
                                    ></path>
                                </svg>
                                <span className="sr-only">Close modal</span>
                            </button>
                            <div className="mb-2">
                                <p>External ID: {external_id}</p>
                                <p>Name: {name}</p>
                                <p>Harga: {harga}</p>
                                <p>Status: {status}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    );
}

export default ModalPembelian;