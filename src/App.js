// import Routing from './routes/Routing';
import GlobalStyle from './styles/globalstyle';
// import {
//   LBtn,
//   LdisabledBtn,
//   MBtn,
//   MdisabledBtn,
//   MActivBtn,
//   MSBtn,
//   MSdisabledBtn,
//   SBtn,
//   SactivBtn,
// } from './components/common/button/Button';
// import Input from './components/common/Input/Input';
import JoinMember from './pages/JoinPage/JoinMember';

function App() {
  return (
    <>
      <GlobalStyle />
      <JoinMember />
      {/* <Input /> */}
      {/* <Routing /> */}
      {/* <LBtn />
      <LdisabledBtn />
      <MBtn />
      <MdisabledBtn />
      <MActivBtn />
      <MSBtn />
      <MSdisabledBtn />
      <SBtn />
      <SactivBtn /> */}
    </>
  );
}
export default App;
