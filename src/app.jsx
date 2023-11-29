import { useState } from "react";
import Logo from "./component/logo";
import Form from "./component/form";
import Packinglist from "./component/packinglist";
import Stats from "./component/stats";

export default function App() {
  const [items, setitems] = useState([]);

  function handleradditems(item) {
    setitems((items) => [...items, item]);
  }
  function handlerdeletitems(id) {
    setitems((itemss) => itemss.filter((item) => item.id !== id));
    console.log(id);
  }
  function handlerchexbox(id) {
    setitems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }
  function hadlearclearall() {
    const conferm = window.confirm("are you sure?");
    if (conferm) setitems([]);
  }
  return (
    <div className="app">
      <Logo />
      <Form onadditem={handleradditems} />
      <Packinglist
        items={items}
        deletitem={handlerdeletitems}
        checkbox={handlerchexbox}
        clear={hadlearclearall}
      />
      <Stats items={items} />
    </div>
  );
}
