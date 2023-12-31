import React, { useState, useEffect } from "react";
import ModalPembelian from "./modal/Modal.jsx";
import axios from "axios";

function Nomer1() {
    const [Pesanaans, setPesanaan] = useState([]);
    const [modalOpen1, setModalOpen1] = useState(false);
    const [selectedPesanaan, setSelectedPesanaan] = useState(null);

    const getPesanaan = async () => {
        const response = await axios.get("http://localhost:5009/pesanaan");
        setPesanaan(response.data);
    };

    useEffect(() => {
        getPesanaan();
    }, []);

    const getPesanaanById = async (id) => {
        try {
            const response = await axios.get(
                `http://localhost:5009/pesanaan/${id}`
            );
            const pesanaanData = response.data;
            setSelectedPesanaan(pesanaanData);
        } catch (error) {
            if (error.response) {
                console.error(error.response.data.msg);
            }
        }
    };

    const handleEditClick = async (id) => {
        await getPesanaanById(id);
        setModalOpen1(true);
    };

    const closeModalEdit = () => {
        setModalOpen1(false);
    };

    return (
        <>
            <div className="bg-yellow-400 mt-[64px]">
                {Pesanaans.map((pesanaan) => (
                    <div key={pesanaan.id} className="flex p-2">
                        <button
                            onClick={() => handleEditClick(pesanaan.id)}
                            className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                            type="button"
                        >
                            <div className="flex">
                                <div className="m-1">{pesanaan.external_id}</div>
                                <div className="m-1">{pesanaan.name}</div>
                                <div className="m-1">{pesanaan.status}</div>
                            </div>
                        </button>
                    </div>
                ))}
            </div>
            {selectedPesanaan && (
                <ModalPembelian
                    isOpen={modalOpen1}
                    closeModal={closeModalEdit}
                    pesanaan={selectedPesanaan}
                />
            )}
        </>
    );
}

export default Nomer1;