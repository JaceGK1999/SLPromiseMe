import { asyncGetQuotes, thenGetQuotes } from './services/promise-me';

export default function App() {
  return (
    <div>
      <h1>Hello World</h1>
      <button onClick={() => console.log(asyncGetQuotes())}>
        Asynce get quotes
      </button>
      <button onClick={() => console.log(thenGetQuotes())}>
        Then get quotes
      </button>
    </div>
  );
}
