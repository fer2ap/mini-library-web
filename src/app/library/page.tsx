"use client"

import Title from "@/components/Title";
import { useEffect, useState } from "react";

interface Book {
  id: number;
  title: string;
  author: string;
  illustrator: string;
  publisher: string;
  userEmail: string;
}

const Library = () => {
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    console.log("fetching books outside")
    async function fetchBooks() {
      console.log("fetching books inside")
      try {
        let response = await fetch("http://localhost:8080/api/books", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "x-account-email": "nando471@gmail.com",
          }
        }
        );
        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }
        let data: Book[] = await response.json();
        console.log(data)
        setBooks(data.toSorted((a, b) => a.title.localeCompare(b.title)));
      } catch (error) {
        console.error("There was an error fetching the books:", error);
      }
    }

    fetchBooks();
  }, []);

  return (
    <div className="flex-1 h-screen w-full ml-64 pr-64 fixed">
      <Title title={"That's the LIBRARY page!"} description={"Go back to home"} />
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2">ID</th>
            <th className="py-2">Title</th>
            <th className="py-2">Author</th>
            <th className="py-2">Illustrator</th>
            <th className="py-2">Publisher</th>
            <th className="py-2">User Email</th>
          </tr>
        </thead>
        <tbody>
          {books.length > 0 ? (
            books.map((book) => (
              <tr key={book.id}>
                <td className="border px-4 py-2">{book.id}</td>
                <td className="border px-4 py-2">{book.title}</td>
                <td className="border px-4 py-2">{book.author}</td>
                <td className="border px-4 py-2">{book.illustrator}</td>
                <td className="border px-4 py-2">{book.publisher}</td>
                <td className="border px-4 py-2">{book.userEmail}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td className="border px-4 py-2" colSpan={6}>
                No books available.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Library;
