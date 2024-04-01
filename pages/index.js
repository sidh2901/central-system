import MenuItemSelector from "../components/MenuItemSelector";

function MyPage() {
  const items = [
    { name: "Big Mac" },
    { name: "McChicken" },
    { name: "Filet-O-Fish" },
    { name: "Spicy McCrispy" },
    { name: "Quarter Pounder with Cheese" },
    { name: "Chicken McNuggets (10 pcs)" },
    { name: "World Famous Fries (Medium)" },
    { name: "McDouble" },
    { name: "Bacon, Egg & Cheese Biscuit" },
    { name: "Egg McMuffin" },
    { name: "Sausage Burrito" },
    { name: "Hotcakes" },
    { name: "Apple Pie" },
    { name: "Vanilla Cone" },
    { name: "Strawberry Shake (Medium)" },
    { name: "Mocha Frappe (Medium)" },
    { name: "Iced Caramel Macchiato (Medium)" },
    { name: "Sweet Tea (Large)" },
    { name: "Coca-Cola (Large)" },
  ];

  return (
    <div>
      <MenuItemSelector menuItems={items} />
    </div>
  );
}

export default MyPage;
