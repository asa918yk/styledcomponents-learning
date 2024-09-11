import styled from "styled-components";
import { MyButton } from "./MyButton";
import MyCard from "./MyCard";
const Container = styled.div`
  padding: 10px;
`;
function App() {
  return (
    <div className="App">
      <Container>
        <MyButton>ボタン</MyButton>
      </Container>
      <Container>
        <MyButton primary>primaryボタン</MyButton>
      </Container>
      <Container>
        <MyButton size={'l'}>ボタン大</MyButton>
      </Container>
      <Container>
        <MyButton size={'m'}>ボタン中</MyButton>
      </Container>
      <Container>
        <MyButton size={'s'}>ボタン小</MyButton>
      </Container>
      <Container>
        <MyButton disabled>クリック不可</MyButton>
      </Container>
      <Container>
        <MyCard>
          <h2>タイトル</h2>
          <p>テキストが入ります。</p>
        </MyCard>
      </Container>
      <Container>
        <MyCard primary>
          <h2>primaryカードです</h2>
          <p>テキストが入ります。</p>
        </MyCard>
      </Container>
      <Container>
        <MyCard size='s'>
          <h2>サイズ：小のカード</h2>
          <p>テキストが入ります。</p>
        </MyCard>
      </Container>
      <Container>
        <MyCard size='m'>
          <h2>サイズ：中のカード</h2>
          <p>テキストが入ります。</p>
        </MyCard>
      </Container>
      <Container>
        <MyCard size='l'>
          <h2>サイズ：大のカード</h2>
          <p>テキストが入ります。</p>
        </MyCard>
      </Container>
    </div>
  );
}

export default App;
