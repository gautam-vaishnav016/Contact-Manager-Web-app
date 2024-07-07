import React from "react";
const ContactList = (props) => {
  const contactList = props.contact.map((val) => {
    return (
      <div className="flex border-2 my-1 justify-between">
        <div className="pl-4">{val.data.name}</div>
        <div>{val.data.email}</div>
        <button onClick={() =>(props.removeContact(val.id))} className="pr-4 hover:scale-105 duration-500">❌</button>
      </div>
    );
  });

  return (
    <>
      <div className="font-serif bg-gradient-to-r from-slate-300 to-slate-500 text-center">ContactList</div>
      <div>{contactList}</div>
    </>
  );
};

export default ContactList;



