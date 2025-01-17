import { useState, useEffect } from 'react';
import PocketBase from 'pocketbase';
import "./ItemCrud.css";

const pb = new PocketBase('http://127.0.0.1:8090'); // PocketBase instance

function ItemCrud() {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState({ name: '', details: '' });
  const [editingItem, setEditingItem] = useState(null);

  // Fetch items
  const fetchItems = async () => {
    const records = await pb.collection('items').getList();
    setItems(records.items);
    console.log(records.items)
  };

  useEffect(() => {
    fetchItems();
  }, []);

  // Create a new item
  const createItem = async () => {
    await pb.collection('items').create(newItem);
    setNewItem({ name: '', details: '' }); // reset
    fetchItems();
  };

  // Update an item
  const updateItem = async () => {
    await pb.collection('items').update(editingItem.id, editingItem);
    setEditingItem(null);  // reset editing state
    fetchItems();
  };

  // Delete an item
  const deleteItem = async (id) => {
    await pb.collection('items').delete(id);
    fetchItems();
  };

  return (
    <div>
      <h2>Items CRUD with PocketBase</h2>

      {/* Create Item Form */}
      <div>
        <h3>Create Item</h3>

        <input type="text" placeholder="name" value={newItem.name} 
          onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}/>

        <input type="text" placeholder="details" value={newItem.details} 
          onChange={(e) => setNewItem({ ...newItem, details: e.target.value })}/>

        <button onClick={createItem}>Create</button>
      </div>

      {/* Update Item Form */}
      {editingItem && (
        <div>
          <h3>Update Item</h3>
          <input type="text" value={editingItem.name}
            onChange={(e) => setEditingItem({ ...editingItem, name: e.target.value })}/>

          <input type="text" value={editingItem.details} 
            onChange={(e) => setEditingItem({ ...editingItem, details: e.target.value })}/>
            
          <button onClick={updateItem}>Update</button>
        </div>
      )}

      {/* Display Items */}
      <h3>Items List</h3>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <strong>{item.name}</strong> {item.details}
            
            <button onClick={() => setEditingItem(item)}>Edit</button>
            <button onClick={() => deleteItem(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ItemCrud;
