import React from "react";
import { useState } from "react";

function Form({ addContact, contact }) {
  // Bu state inputtan girilen fullname ve phonenumber adlı değerleri formda tutmamıza yarar
  const [form, setForm] = useState({
    jobdefiniation: "",
    checkbox: false,
  });

  // bu fonksiyon inputlara değer girildiği zaman girilen değerleri eventin gerçekleştiği inputta bulunan name değerini
  //alır ve aldığı bu name değerine full name değerine eşitler.

  const onChangeInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  // form submit olduğu zaman form eğer form içerisinde bulunan full name ve phone number boş ise ekrana uyarı çıkarır.
  const onSubmit = (e) => {
    e.preventDefault();
    if (form.jobdefiniation === "") {
      alert("not entry fullname or phonenumber");
      return false;
    }
    addContact([...contact, form]);
    setForm({ jobdefiniation: "", checkbox: form.checkbox });
  };

  return (
    <>
      {/* <div>// EN SON SEÇİLEN ÖĞELERİ SİLME ÜZERİNE ÇALIŞIYORDUN</div> */}
      <form className="form-element" onSubmit={onSubmit}>
        <input
          className="jobdefiniation"
          name="jobdefiniation"
          placeholder="Job description"
          // value değeri en başta boş olduğu için sayfa açıldığğında boş gelecek ve her submit olduğunda tekrardan boşa eşitlenecek
          value={form.jobdefiniation}
          // onChange eventi inputtaki değişim eventini kontrol eder.
          onChange={onChangeInput}
        />

        {/* <div>
        <input
          name="todo"
          type="tel"
          placeholder="Yapılacaklar"
          value={form.phonenumber}
          onChange={onChangeInput}
        />
      </div> */}
        {/* <div><button>Add</button></div> */}
      </form>
    </>
  );
}

export default Form;
