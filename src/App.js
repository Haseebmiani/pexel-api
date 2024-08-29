import { Route, Routes } from "react-router-dom";
import "./App.css";
import Category from "./screens/Category";
import HomeScreen from "./screens/HomeScreen";
import Header from "./component/header/Header";
import SearchPhotos from "./screens/SearchPhotos";
import SearchVidoes from "./screens/SearchVidoes";
import VideoDetail from "./screens/VideoDetail";
import LinkInfo from "./component/header/LinkInfo";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/khan" element={<LinkInfo />} />
        <Route path="/" element={<HomeScreen />} />
        <Route path="/category/:category" element={<Category />} />
        <Route path="/search/photos/:keywords" element={<SearchPhotos />} />
        <Route path="/search/videos/:keywords" element={<SearchVidoes />} />
        <Route path="/search/video/:id" element={<VideoDetail />} />
      </Routes>
    </>
  );
}

export default App;
