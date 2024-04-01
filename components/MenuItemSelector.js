import { useState } from "react";

export default function MenuItemSelector({ menuItems }) {
  const [selectedItem, setSelectedItem] = useState(menuItems[0].name);
  const [price, setPrice] = useState("");

  async function updateMenuItem(name, price) {
    try {
      const response = await fetch("/api/updateMenuItem", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, price }),
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      console.log("Success:", data);
    } catch (error) {
      console.error("Error:", error);
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (selectedItem && price) {
      await updateMenuItem(selectedItem, price);
      setPrice("");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "10px",
      }}>
      <select
        value={selectedItem}
        onChange={(e) => setSelectedItem(e.target.value)}
        style={{
          padding: "10px",
          borderRadius: "5px",
          border: "1px solid #ccc",
          width: "200px",
        }}>
        {menuItems.map((item) => (
          <option key={item.name} value={item.name}>
            {item.name}
          </option>
        ))}
      </select>
      <input
        type="number"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        placeholder="New Price"
        style={{
          padding: "10px",
          borderRadius: "5px",
          border: "1px solid #ccc",
          width: "200px",
        }}
      />
      <button
        type="submit"
        style={{
          padding: "10px 20px",
          borderRadius: "5px",
          border: "none",
          backgroundColor: "#007bff",
          color: "white",
          cursor: "pointer",
        }}>
        Update Price
      </button>
    </form>
  );
}
