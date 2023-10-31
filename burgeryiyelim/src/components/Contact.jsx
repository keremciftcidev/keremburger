import React from "react";
import Photo from "../assets/contact.png";
import "../styles/Contact.css"

export const Contact = () => {
  return (
    <div className="contact">
      <div
        className="leftside"
        style={{backgroundImage:`url(${Photo})`}}
      ></div>
      <div className="rigthside">
        <h1>Bizimle İletişime Geçin</h1>
        <form>
          <label>Ad Soyad</label>
          <input
            type="text"
            name="name"
            placeholder="Lütfen adınızı soyadınızı giriniz..."
          />
          <label>E-Mail</label>
          <input type="email" name="email" placeholder="E mail giriniz" />
          <label>Mesajınız</label>
          <textarea
            rows="6"
            name="msg"
            placeholder="Lütfen mesajınızı  giriniz..."
          ></textarea>
        </form>
      </div>
    </div>
  );
};
