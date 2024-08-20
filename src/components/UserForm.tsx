'use server'

import { Dispatch, SetStateAction } from "react";

const UserForm = ({ setIsModalOpen, setSavedEmail }: {
    setIsModalOpen: Dispatch<SetStateAction<boolean>>,
    setSavedEmail: Dispatch<SetStateAction<String>>
}) => {
    async function createUser(formData: FormData) {
        'use server'

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

            let result = await response.json();
            const formEmail = formData.get('email')
            if ( formEmail != null) {
                setIsModalOpen(true)
                setSavedEmail(formEmail.toString)
            }
        } catch (error) {
            console.error("There was an error creating the user:", error);
        }
    }
    return (
        <form className="flex flex-col p-8" action={createUser}>
            <label className="text-white text-1xl mt-1">First name:</label>
            <input className="text-gray-700 text-2xl mb-4 mt-1" type="text" name="name" />

            <label className="text-white text-1xl mt-1">Last name:</label>
            <input className="text-gray-700 text-2xl mb-4 mt-1" type="text" name="surname" />

            <label className="text-white text-1xl mt-1">Email:</label>
            <input className="text-gray-700 text-2xl mb-4 mt-1" type="email" name="email" />

            <button className="text-white text-lg mb-4" type="submit">Submit</button>
        </form>
    )
}

export default UserForm