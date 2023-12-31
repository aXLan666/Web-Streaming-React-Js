import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import AddUser from "../components/User_Modals/AddUser";
import EditUser from "../components/User_Modals/EditUser";

function UserList() {
  const [users, setUsers] = useState([]);
  const [modalOpen1, setModalOpen1] = useState(false);
  const [modalOpen2, setModalOpen2] = useState(false);
  const [selectedUserId, setSelectedUserId] = useState(null);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    getUsers();
  }, []);

  const getUserById = async (id) => {
    try {
      const response = await axios.get(`http://localhost:5009/users/${id}`);
      const userData = response.data;
      setSelectedUser(userData);
    } catch (error) {
      if (error.response) {
        console.error(error.response.data.msg);
      }
    }
  };

  const getUsers = async () => {
    const response = await axios.get("http://localhost:5009/users");
    setUsers(response.data);
  };

  const deleteUser = async (userId) => {
    await axios.delete(`http://localhost:5009/users/${userId}`);
    getUsers();
  };

  const handleEditClick = (id) => {
    getUserById(id);
    setSelectedUserId(id);
    setModalOpen1(true);
  };

  const closeModalEdit = () => {
    setModalOpen1(false);
  };

  const handleAddClick = (id) => {
    setModalOpen2(true);
  };

  const closeModalAdd = () => {
    setModalOpen1(false);
  };

  return (
    <>
      <AddUser />
      {selectedUser && (
        <EditUser
          isOpen={modalOpen1}
          closeModal={closeModalEdit}
          user={selectedUser}
        />
      )}
      <div className="p-4 sm:ml-64 bg-yellow400 min-h-screen">
        <div className="p-4 border-2 border-gray200 rounded-lg dark:border-gray700 mt-14">
          <p className="m-2 text-white font-mono text-3xl">User</p>
          <button
            data-modal-target="ModalTambahDataUser"
            data-modal-toggle="ModalTambahDataUser"
            className="btn border-none bg-sky400 hover:bg-blue400 text-white my-1"
          >
            Add new User
          </button>
          <table className="min-w-full">
            <thead>
              <tr className="grid grid-cols-6 text-white">
                <th className="flex items-center justify-center h-10 rounded-l-lg bg-gray50 dark:bg-gray800">
                  No
                </th>
                <th className="flex items-center justify-center h-10 bg-gray50 dark:bg-gray800">
                  Name
                </th>
                <th className="flex items-center justify-center h-10 bg-gray50 dark:bg-gray800 col-span-2">
                  Email
                </th>
                <th className="flex items-center justify-center h-10 bg-gray50 dark:bg-gray800">
                  Role
                </th>
                <th className="flex items-center justify-center h-10 rounded-r-lg bg-gray50 dark:bg-gray800">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr className="grid grid-cols-6 text-black900" key={user.uuid}>
                  <td className="flex items-center justify-center h-13 bg-white">
                    {index + 1}
                  </td>
                  <td className="flex items-center justify-center h-13 bg-white ">
                    {user.name}
                  </td>
                  <td className="flex items-center justify-center h-13 bg-white col-span-2">
                    {user.email}
                  </td>
                  <td className="flex items-center justify-center h-13 bg-white ">
                    {user.role}
                  </td>
                  <td className="flex items-center justify-center h-13 bg-white ">
                    <div className="my-2">
                      <button
                        onClick={() => handleEditClick(user.uuid)}
                        className="btn border-none rounded-full hover:bg-blue600 hover:text-white"
                      >
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
                            d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                          />
                        </svg>
                      </button>
                      <button
                        onClick={() => deleteUser(user.uuid)}
                        className="btn border-none rounded-full ml-1 hover:bg-red600 hover:text-white"
                      >
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
                            d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                          />
                        </svg>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default UserList;