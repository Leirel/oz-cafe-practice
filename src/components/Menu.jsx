import { useMenu } from "../context/MenuContext";

function Menu() {
  const { menu } = useMenu();

  return (
    <div>
      {menu.map(item => (
        <div key={item.id}>{item.name}</div>
      ))}
    </div>
  );
}

export default Menu;
