import React, { useState } from "react";
import Button from "./Button";
function Contactlist({ contacts, updateContact, deleteJob }) {
  const [filter, setFilter] = useState("all"); // Başlangıçta "Tümünü Göster" olarak ayarlanmıştır
  const handleCheckboxChange = (index) => {
    const updatedContacts = [...contacts];
    updatedContacts[index] = {
      ...updatedContacts[index],
      checkbox: !updatedContacts[index].checkbox,
    };
    updateContact(updatedContacts);
  };
  const completedCount = contacts.filter((item) => item.checkbox);
  const uncompletedCount = contacts.filter((item) => !item.checkbox);
  const filteredContacts = contacts.filter((item) => {
    if (filter === "completed") {
      return item.checkbox;
    } else if (filter === "uncompleted") {
      return !item.checkbox;
    } else {
      return true; // "Tümünü Göster" veya herhangi bir filtre seçilmediğinde
    }
  });

  return (
    <>
      <div className="button-container">
        <button className="show-all" onClick={() => setFilter("all")}>
          All ({contacts.length})
        </button>
        <button
          className="show-completed"
          onClick={() => setFilter("completed")}
        >
          Completed ({completedCount.length})
        </button>
        <button
          className="show-uncompleted"
          onClick={() => setFilter("uncompleted")}
        >
          Uncompleted ({uncompletedCount.length})
        </button>
        <Button title="Delete" onClick={deleteJob} />
      </div>

      {filteredContacts.map((item, index) => (
        <div className="list-container" key={index}>
          <ul className="contact-list" key={index}>
            <li>
              <input
                key={index}
                className="contact-list__checkbox"
                type="checkbox"
                checked={item.checkbox}
                onChange={() => {
                  handleCheckboxChange(index);
                }}
              />
            </li>

            <li
              className={` ${item.checkbox ? "strikethrough" : ""} job-title`}
            >
              {item.jobdefiniation}
            </li>
          </ul>
          <div className="completed">
            {item.checkbox ? <strong>OK</strong> : null}
          </div>
        </div>
      ))}
    </>
  );
}

export default Contactlist;
