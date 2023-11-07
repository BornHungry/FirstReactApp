import React, { useState, useEffect } from "react";
import Contactlist from "./Contactlist";
import Form from "./Form";
import Header from "./Header";
import Footer from "./Footer";
function Contact() {
  const [contacts, setContacts] = useState([]);
  useEffect(() => {
    const localContactData = JSON.parse(localStorage.getItem("contact"));
    if (localContactData) {
      setContacts(localContactData);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("contact", JSON.stringify(contacts));
  }, [contacts]);
  useEffect(() => {
    // priece.map((item, index) => {
    //   if (priece.length === "") {
    //     index = 0;
    //     setNumber(index);
    //   }
    //   setNumber(index + 1);
    // });
    // for (let i = 1; i <= priece.length; i++) {
    //   setNumber(i);
    //   i++;
    // }
  }, [contacts]);

  const deleteJob = () => {
    const filteredDeleteJob = contacts.filter((item) => !item.checkbox);
    setContacts(filteredDeleteJob);
  };
  const priece = contacts.filter((item) => !item.checkbox);

  return (
    <div className="app">
      <Header />
      <div className="app__control-panel">
        <Form addContact={setContacts} contact={contacts} />
      </div>
      <Contactlist
        deleteJob={deleteJob}
        contacts={contacts}
        updateContact={setContacts}
      />
      <div className="number-of-jobs">
        <small>
          <strong>{`${priece.length} `} job</strong> to complete
        </small>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
