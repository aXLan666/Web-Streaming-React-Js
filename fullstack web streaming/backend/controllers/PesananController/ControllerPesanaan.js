// import dotenv from "dotenv";
// dotenv.config();

// const MIDTRANS_CLIENT_KEY = process.env.MIDTRANS_CLIENT_KEY;
// const MIDTRANS_SERVER_KEY = process.env.MIDTRANS_SERVER_KEY;

import midtransClient from 'midtrans-client';

export const createPayment = async (req, res) => {
    const { external_id, name, harga, status } = req.body;

    try {
        const snap = new midtransClient.Snap({
            isProduction: false,
            serverKey: "SB-Mid-client-q-63Auv4qAa5qRWp",
            clientKey: "SB-Mid-server-DNkHmcV4rij3kxbH_leojo2r",
        });

        const parameter = {
            transaction_details: {
                order_id: external_id,
                gross_amount: harga,
            },
            customer_details: {
                first_name: name,
                last_name: status,
            },
        };

        snap.createTransaction(parameter).then((transaction) => {
            const dataPayment = {
                response: JSON.stringify(transaction),
            };

            const token = transaction.token;
            res.status(200).json({ message: 'berhasil', dataPayment, token: token });
        });
    } catch (error) {
        console.error('Error creating payment:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

// export const ProcessTransaction = async (req, res) => {
//     const { external_id, name, harga, status } = req.body;

//     try {

//         const snap = new midtransClient.Snap({
//             isProduction: false,
//             serverKey: MIDTRANS_SERVER_KEY,
//             clientKey: MIDTRANS_CLIENT_KEY,
//         })

//         const parameter = {
//             transaction_details: {
//                 order_id: external_id,
//                 gross_amount: harga,
//             },
//             customer_details: {
//                 first_name: name,
//                 last_name: status,
//             }
//         }

//         snap.createTransaction(parameter)
//             .then((transaction) => {
//                 const dataPayment = {
//                     response: JSON.stringify(transaction)
//                 }

//                 const token = transaction.token
//                 res.status(200).json({ message: "berhasil", dataPayment, token: token })

//                 // let transactionToken = transaction.token;
//                 // console.log('transactionToken:', transactionToken);
//             })

//     } catch (error) {
//         console.error('Error creating payment:', error);
//         res.status(500).json({ error: 'Internal server error' });
//     }
// };

// export const PostPesanaan = async (req, res) => {
//     try {
//       // Generate a unique 9-digit external_id
//       const external_id = Math.floor(100000000 + Math.random() * 900000000);
//       const { name, harga } = req.body;

//       // Set the status to "Unpaid" by default
//       const status = "Unpaid";

//       const pesanan = await Pesanan.create({
//         external_id,
//         name,
//         harga,
//         status,
//       });

//       res.status(201).json(pesanan);
//     } catch (error) {
//       console.error("Error creating pesanan:", error);
//       res.status(500).json({ error: "An error occurred while creating pesanan." });
//     }
//   };

// export const EditPesanaan = async (req, res) => {
//     const pesananId = req.params.id;
//     try {
//         const updatedPesanan = await Pesanan.update(req.body, {
//             where: { id: pesananId },
//         });

//         if (updatedPesanan[0] === 0) {
//             return res.status(404).json({ message: "Pesanan not found." });
//         }

//         res.status(200).json({ message: "Pesanan updated successfully." });
//     } catch (error) {
//         console.error("Error editing pesanan:", error);
//         res.status(500).json({ error: "An error occurred while updating pesanan." });
//     }
// };
