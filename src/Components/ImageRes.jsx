import Loader from "./Loader";
import ImageCard from "./ImageCard";

const ImageRes = ({ listImage, loading }) => {
  return (
    <div className="container max-w-5xl mx-auto px-2 py-6">
      <div className="grid md:grid-cols-2 gap-4">
        {loading ? (
          <Loader item={2} />
        ) : (
          listImage.map((image, i) => <ImageCard image={image.url} key={i} />)
        )}
      </div>
    </div>
  );
};

export default ImageRes;
