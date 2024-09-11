import { MyButton } from "./MyButton";
function App() {
  return (
    <div className="App">
      <div>
        <MyButton>ボタン</MyButton>
      </div>
      <div>
        <MyButton primary>primaryボタン</MyButton>
      </div>
      
    </div>
  );
}

export default App;
