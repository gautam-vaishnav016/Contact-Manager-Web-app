import React, { useState } from "react";

const AddContacts = (props) => {
  const [contactData, setContactData] = useState({ name: "", email: "" });

  const handleChange = (e) => {
    e.target.name === "name"
      ? setContactData({ ...contactData, name: e.target.value })
      : setContactData({ ...contactData, email: e.target.value });
  };

  const handleAdd = () => {
    contactData.name === "" || contactData.email === ""
      ? alert("Please fill all the details")
      : props.addcontact(contactData);
    setContactData({ name: "", email: "" });
  };

  return (
    <div className="flex flex-col items-center mt-5">
      <div className="font-serif text-xl mb-2 text-white">Add Contact</div>
      <form>
        <label className="font-serif">Name :</label>
        <input
          onChange={handleChange}
          value={contactData.name}
          className="mb-2 rounded-sm ml-1 border-2 border-solid"
          type="text"
          placeholder="Enter Name"
          name="name"
        />
        <br />

        <label className="font-serif">Email :</label>
        <input
          onChange={handleChange}
          value={contactData.email}
          className="rounded-sm ml-1 border-2 border-solid"
          type="email"
          placeholder="Enter Email"
          name="email"
        />
      </form>
      <button
        onClick={handleAdd}
        className="text-white bg-blue-700 hover:bg-blue-800 rounded-md text-sm px-5 py-2.5 m-4 font-serif"
      >
        Add Contacts
      </button>
    </div>
  );
};

export default AddContacts;
