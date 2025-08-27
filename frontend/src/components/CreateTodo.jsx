import { useState } from "react";

export default function CreateTodo() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const addTodo = async () => {
    const response = await fetch("http://localhost:3000/todo", { // ✅ correct endpoint
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, description }),
    });

    if (!response.ok) {
      alert("Failed to create todo");
      return;
    }

    const data = await response.json();
    alert(data.msg); // shows backend message
    setTitle("");       // optional: clear input
    setDescription("");
  };

  return (
    <div>
      <input
        type="text"
        placeholder="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <br />
      <input
        type="text"
        placeholder="description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <br />
      <button onClick={addTodo}>Add Todo</button>
    </div>
  );
}













// export default function CreateTodo(){
//      const [title, setTitle] = useState("");
//   const [description, setDescription] = useState("");

//   return (
//     <div>
//           <input id="title" type="text" placeholder="title" onChange={function(e){
//             const value = e.target.value;
//             setTitle(e.target.value);
//           }} /> <br />
//           <input id="desc" type="text" placeholder="description" onChange={function(e){
//             const value = e.target.value;
//             setDescription(e.target.value);
//           }}/> <br />

//           <button onClick={() => {
//             fetch('http://localhost:3000/todos', {
//               method: 'POST',
//               body: JSON.stringify({
//                 title: title,
//                 description: description
//               }),
//               headers: {
//                 'Content-Type': 'application/json'
//               }
//             })
//               .then(async function(response){ 
//                 const data = await response.json();
//                 alert("Todo Created")
//               })
//           }}>Add Todo</button>
//     </div>
//   )
// }

