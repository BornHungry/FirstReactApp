import React from "react";

function Contactlist({ contacts, updateContact }) {
  // const [filterText, setFilterText] = useState("");
  // const filtered = contacts.filter((item) => {
  //   return Object.keys(item).some((key) =>
  //     item[key]
  //       .toString()
  //       .toLowerCase()
  //       .includes(filterText.toLocaleLowerCase())
  //   );
  // });
  // const deneme = (e) => {
  //   contacts.map((item) => {
  //     item.checkbox = true;
  //     console.log(item.checkbox);
  //   });
  // };
  const handleCheckboxChange = (index) => {
    const updatedContacts = [...contacts];
    updatedContacts[index] = {
      ...updatedContacts[index],
      checkbox: !updatedContacts[index].checkbox,
    };
    updateContact(updatedContacts);
    if (contacts[index].checkbox) {
    }
  };

  return (
    <>
      {/* <div>
        <input
          value={filterText}
          onChange={(e) => {
            setFilterText(e.target.value);
          }}
        />
      </div> */}
      {contacts !== "" &&
        contacts.map((item, index) => (
          <div className="list-container">
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

              {/* <li>{item.todo}</li> */}
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
