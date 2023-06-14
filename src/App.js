// import Routing from './routes/Routing';
import GlobalStyle from './styles/globalstyle';
import {
  LBtn,
  LdisabledBtn,
  MBtn,
  MdisabledBtn,
  MActivBtn,
  SBtn,
  SactivBtn,
} from './components/common/Button/Button';

function App() {
  return (
    <>
      <GlobalStyle />
      {/* <Routing /> */}
      <LBtn />
      <LdisabledBtn />
      <MBtn />
      <MdisabledBtn />
      <MActivBtn />
      <SBtn />
      <SactivBtn />
    </>
  );
}
export default App;
