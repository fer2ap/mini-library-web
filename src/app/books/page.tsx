'use client'
import Modal from "@/components/Modal";
import Title from "@/components/Title";
import { useState } from "react";

const Books = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [savedEmail, setSavedEmail] = useState<String>()


  async function createBook(formData: FormData) {
    const user = {
      title: formData.get('title'),
      author: formData.get('author'),
      illustrator: formData.get('illustrator'),
      publisher: formData.get('publisher'),
      email: formData.get('email')
    }

    try {
      let response = await fetch("http://localhost:8080/api/books", {
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
    return `Book created!`
  }
  return (
    <div className="flex-1 h-screen w-full ml-64 pr-64 fixed">
      <Title title={"That's the BOOKS page!"} description={"Go back to home"} />
      <form className="flex flex-col p-8" action={createBook}>
        <label className="text-white text-1xl mt-1">Title:</label>
        <input className="text-gray-700 text-2xl mb-4 mt-1" type="text" name="title" />
        <label className="text-white text-1xl mt-1">Author name:</label>
        <input className="text-gray-700 text-2xl mb-4 mt-1" type="text" name="author" />
        <label className="text-white text-1xl mt-1">Illustrator name:</label>
        <input className="text-gray-700 text-2xl mb-4 mt-1" type="text" name="illustrator" />
        <label className="text-white text-1xl mt-1">Publisher:</label>
        <input className="text-gray-700 text-2xl mb-4 mt-1" type="text" name="publisher" />
        <label className="text-white text-1xl mt-1">User email:</label>
        <input className="text-gray-700 text-2xl mb-4 mt-1" type="email" name="email" />

        <button className="text-white text-lg mb-4" type="submit">Submit</button>
      </form>
      {isModalOpen && <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} message={getModalMessage(savedEmail)} />}
    </div>
  );
};

export default Books;
