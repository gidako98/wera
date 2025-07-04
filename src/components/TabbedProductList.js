import React, { useState } from "react";
import productData from "../data/products";

const TabbedProductList = () => {
  const [activeTab, setActiveTab] = useState("sale");
  const [searchTerm, setSearchTerm] = useState("");

  const tabs = {
    sale: "Продажа",
    rent: "Аренда",
    services: "Услуги",
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  const filteredItems = productData[activeTab].filter((item) =>
    item.name.toLowerCase().includes(searchTerm)
  );

  const scrollToContacts = () => {
    const contactsSection = document.getElementById("contacts");
    if (contactsSection) {
      contactsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      <h2>Предложения</h2>

      {/* Вкладки */}
      <div style={{ display: "flex", gap: "10px", marginBottom: "15px" }}>
        {Object.entries(tabs).map(([key, label]) => (
          <button
            key={key}
            onClick={() => {
              setActiveTab(key);
              setSearchTerm(""); // сброс при переключении вкладки
            }}
            style={{
              padding: "10px 20px",
              backgroundColor: activeTab === key ? "#003366" : "#ccc",
              color: activeTab === key ? "white" : "black",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Поиск */}
      <input
        type="text"
        placeholder="Поиск..."
        value={searchTerm}
        onChange={handleSearch}
        style={{
          padding: "8px",
          width: "100%",
          maxWidth: "400px",
          marginBottom: "20px",
          borderRadius: "5px",
          border: "1px solid #ccc",
        }}
      />

      {/* Список */}
      {filteredItems.length > 0 ? (
        <ul style={{ listStyle: "none", padding: 0 }}>
          {filteredItems.map((item) => (
            <li
              key={item.id}
              style={{
                marginBottom: "20px",
                padding: "15px",
                backgroundColor: "#f5f5f5",
                borderRadius: "8px",
              }}
            >
              <div style={{ fontWeight: "bold" }}>{item.name}</div>
              <div style={{ marginBottom: "10px" }}>{item.price}</div>
              <button
                onClick={scrollToContacts}
                style={{
                  padding: "8px 16px",
                  backgroundColor: "#0072ce",
                  color: "white",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
              >
                Связаться
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p>Ничего не найдено</p>
      )}
    </div>
  );
};

export default TabbedProductList;

