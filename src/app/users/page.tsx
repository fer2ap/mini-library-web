'use client'
import Modal from "@/components/Modal";
import Title from "@/components/Title";
import { useState } from "react";

const Users = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [savedEmail, setSavedEmail] = useState<String>()
  async function createUser(formData: FormData) {  
    const user = {
      name: formData.get('name'),
      surname: formData.get('surname'),
      email: formData.get('email')
    }
    try {
      let response = await fetch("http://localhost:8080/api/users", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(user)
      });
  
      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }
  
      // let result = await response.json();
      setIsModalOpen(true)
    } catch (error) {
      console.error("There was an error creating the user:", error);
    }
  }

  const getModalMessage = (email: String | undefined): String => {
    return `User created!`
  }
  return (
    <div className="flex-1 h-screen w-full ml-64 pr-64 fixed">
      <Title title={"That's the USERS page!"} description={"Go back to home"} />
      <form className="flex flex-col p-8" action={createUser}>
        <label className="text-white text-1xl mt-1">First name:</label>
        <input className="text-gray-700 text-2xl mb-4 mt-1" type="text" name="name" />

        <label className="text-white text-1xl mt-1">Last name:</label>
        <input className="text-gray-700 text-2xl mb-4 mt-1" type="text" name="surname" />

        <label className="text-white text-1xl mt-1">Email:</label>
        <input className="text-gray-700 text-2xl mb-4 mt-1" type="email" name="email" />

        <button className="text-white text-lg mb-4" type="submit">Submit</button>
      </form>
      {isModalOpen && <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} message={getModalMessage(savedEmail)}/>}
    </div>
  );
};

export default Users;
