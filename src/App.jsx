import Header from "./Components/Header";
import ImageRes from "./Components/ImageRes";
import { useState } from "react";

function App() {
  const [listImage, setListImage] = useState([]);
  const [loading, setLoading] = useState(false);

  return (
    <div>
      <Header setListImage={setListImage} setLoading={setLoading} />
      <ImageRes listImage={listImage} loading={loading} />
    </div>
  );
}

export default App;
