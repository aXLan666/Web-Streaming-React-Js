// import axios from "axios";
// import { useState } from "react";

// function Test() {
//     const [external_id, setExternal_id] = useState("")
//     const [name, setName] = useState("")
//     const [harga, setHarga] = useState(0)
//     const [status, setStatus] = useState("")

//     const process = async () => {
//         const data = {
//             external_id: external_id,
//             name: name,
//             harga: harga,
//             status: status
//         }

//         const config = {
//             Headers: {
//                 "Content-Type": "application/json"
//             }
//         }

//         const response = await axios.post("http://localhost:5009/create-payment", data, config)

//         console.log(response)
//     }

//     return (
//         <>
//             <div className="bg-white h-screen">
//                 <form className="flex flex-col h-fit w-fit p-14" action="">
//                     <input value={external_id} onChange={(e) => setExternal_id(e.target.value)} type="text" placeholder="external_id" className="input w-full max-w-xs m-2" />
//                     <input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="name" className="input w-full max-w-xs m-2" />
//                     <input value={harga} onChange={(e) => setHarga(e.target.value)} type="number" placeholder="harga" className="input w-full max-w-xs m-2" />
//                     <input value={status} onChange={(e) => setStatus(e.target.value)} type="text" placeholder="status" className="input w-full max-w-xs m-2" />
//                     <button type="submit" className="btn m-2">submit</button>
//                 </form>
//             </div>
//         </>
//     )
// }

// export default Test;

import axios from "axios";
import { useState } from "react";

function Test() {
    const [external_id, setExternal_id] = useState("");
    const [name, setName] = useState("");
    const [harga, setHarga] = useState(0);
    const [status, setStatus] = useState("");

    const options = {
        method: 'POST',
        url: 'https://app.sandbox.midtrans.com/snap/v1/transactions',
        headers: {
            accept: 'application/json',
            'content-type': 'application/json',
            authorization: 'Basic bGFuOjEyMw=='
        }
    };

    axios
        .request(options)
        .then(function (response) {
            console.log(response.data);
        })
        .catch(function (error) {
            console.error(error);
        });

    return (
        <div className="bg-white h-screen">
            <form
                className="flex flex-col h-fit w-fit p-14"
            >
                <input value={external_id} onChange={(e) => setExternal_id(e.target.value)} type="text" placeholder="external_id" className="input w-full max-w-xs m-2" />
                <input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="name" className="input w-full max-w-xs m-2" />
                <input value={harga} onChange={(e) => setHarga(e.target.value)} type="number" placeholder="harga" className="input w-full max-w-xs m-2" />
                <input value={status} onChange={(e) => setStatus(e.target.value)} type="text" placeholder="status" className="input w-full max-w-xs m-2" />
                <button onClick={options} type="submit" className="btn m-2">
                    submit
                </button>
            </form>
        </div>
    );
}

export default Test;