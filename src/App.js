import { useState } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState('');
  const [datetime, setDatetime] = useState('');
  const [description, setDescription] = useState('');
  return (
    <main>
      <h1>$400<span>.00</span></h1>
      <form>
        <div className="basic">
          <input type="text"
            value={name}
            onChange={ev => setName(ev.target.value)}
            placeholder={'+200 new samsung tv'} />
          <input type="datetime-local"
            value={datetime}
            onChange={ev => setDatetime(ev.target.value)}
            type="datetime-local" />
        </div>
        <div classname="description">
          <input type="text"
            value={description}
            onChange={ev => setDescription(ev.target.value)}
            placeholder={'description'} />
        </div>
        <button type="submit">Add new transaction</button>
      </form>
      <div className="transactions">
        <div className="transaction">
          <div className="left">
            <div className="name">New Samsung TV</div>
            <div className="description">it was time for a new tv</div>
          </div>
          <div className="right">
            <div className="price red">-$500</div>
            <div className="datetime">2025-07-01 16:33</div>
          </div>
        </div>
        <div className="transaction">
          <div className="left">
            <div className="name">Paycheck</div>
            <div className="description">it was time for a new tv</div>
          </div>
          <div className="right">
            <div className="price green">+$400</div>
            <div className="datetime">2025-07-01 16:33</div>
          </div>
        </div>
        <div className="transaction">
          <div className="left">
            <div className="name">Robux</div>
            <div className="description">it was time for a new tv</div>
          </div>
          <div className="right">
            <div className="price green">-$900</div>
            <div className="datetime">2025-07-01 16:33</div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
