"use client"
import Modal from '@/components/Modal';
import React, { useState } from 'react';

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const openModal = () => {
    setIsModalOpen(true)
  }
  return (
    <div className="ml-64 p-8 flex-1 h-screen fixed">
      <h1 className="text-white text-2xl font-bold mb-4">Welcome to My Mini Library</h1>
      <p className="text-white text-lg">Select an option from the menu to get started.</p>
      <button id="myBtn" className="text-white text-2xl font-bold mb-4" onClick={openModal}>Open Modal</button>

      {isModalOpen && <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} message="User registered with email XXXX"/>}
    </div>
  );
};

export default Home;