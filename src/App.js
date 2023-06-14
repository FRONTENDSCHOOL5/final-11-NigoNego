// import Routing from './routes/Routing';
import GlobalStyle from './styles/globalstyle';

import Navbar from './components/common/Navbar/Navbar';

import {
  HeaderBasicNav,
  HeaderChatNav,
  HeaderMainNav,
  HeaderSearchNav,
  HeaderUploadNav,
} from './components/common/Header/Header';

function App() {
  return (
    <>
      <GlobalStyle />

      <HeaderBasicNav />
      <HeaderSearchNav />
      <HeaderMainNav />
      <HeaderUploadNav />
      <HeaderChatNav />
      <Navbar />
    </>
  );
}
export default App;
