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
      <div>
        <MyButton size={'l'}>ボタン大</MyButton>
      </div>
      <div>
        <MyButton size={'m'}>ボタン中</MyButton>
      </div>
      <div>
        <MyButton size={'s'}>ボタン小</MyButton>
      </div>
    </div>
  );
}

export default App;
