import React, { useEffect, useState } from "react";
import Header from "./Components/Header";
import AddContacts from "./Components/AddContacts";
import ContactList from "./Components/ContactList";
import uuid4 from "uuid4";

const App = () => {
  const [contact, setContact] = useState(() => {
    return JSON.parse(localStorage.getItem("contact")) || [];
  });

  useEffect(() => {
    localStorage.setItem("contact", JSON.stringify(contact));
  }, [contact]);

  const addcontact = (data) => {
    setContact([...contact, { id: uuid4(), data }]);
  };

  const removeContact = (id) => {
    const updateList = contact.filter((val) => {
      return val.id !== id;
    });
    setContact(updateList);
  };

  return (
    <>
      <div className="bg-gradient-to-r from-violet-500 to-fuchsia-500 h-screen w-screen">
        <Header></Header>
        <AddContacts addcontact={addcontact}></AddContacts>
        <ContactList
          contact={contact}
          removeContact={removeContact}
        ></ContactList>
      </div>
    </>
  );
};

export default App;
