import React from "react";

const Contact = () => (
  <div id="contacts"> {/* 👈 Добавили id для скролла */}
    <h2>Контакты</h2>
    <div className="contact-info">
      <p>📞 Телефон: <a href="tel:+79991234567">+7 (999) 123-45-67</a></p>
      <p>📧 Email: <a href="mailto:info@stroykomp.ru">info@stroykomp.ru</a></p>
      <p>🏢 Адрес: г. Москва, ул. Строителей, д.10</p>
    </div>

    <div style={{ marginTop: "20px" }}>
      <h3>Как нас найти:</h3>
      <iframe
        title="yandex-map"
        src="https://yandex.ru/map-widget/v1/?um=constructor%3A3dd0b6f38b91b66c509a5e7ae3b4a818eb0881a812f8e8700c6b8f36a6eb5041&amp;source=constructor"
        width="100%"
        height="300"
        frameBorder="0"
        style={{ borderRadius: "8px" }}
      ></iframe>
    </div>
  </div>
);

export default Contact;



