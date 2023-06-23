import { RecoilRoot } from 'recoil';
import Routing from './routes/Routing';
import GlobalStyle from './styles/globalstyle';

function App() {
  return (
    <RecoilRoot>
      <GlobalStyle />
      <Routing />
    </RecoilRoot>
  );
}
export default App;
