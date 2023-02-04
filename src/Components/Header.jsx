import { ArrowLongRightIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

const Header = ({ setListImage, setLoading }) => {
  const [inputVal, setInputVal] = useState("");

  const handleInputChange = (e) => setInputVal(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await fetch("http://localhost:4000/openai/images", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          prompt: inputVal,
        }),
      });
      const jsonData = await response.json();
      setListImage(jsonData.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="bg-gradient-to-r from-cyan-500 to-blue-500">
      {/* container */}
      <div className="container mx-auto max-w-5xl px-2 py-6">
        {/* logo */}
        <p className="block font-bold text-xl font-opensans">
          Genie<span className="text-blue-700">ART</span>
        </p>
        {/* tagline */}
        <div className="mt-14">
          <h2 className="font-bold text-xl max-w-xs mb-1">
            Unleash the power of AI to create stunning images.
          </h2>
          <p className="font-light opacity-80 hidden md:inline-block">
            Created with AI-powered image generation technology.
          </p>
          {/* form */}
          <form className="relative my-8 max-w-md" onSubmit={handleSubmit}>
            <input
              value={inputVal}
              onChange={handleInputChange}
              type="text"
              className="indent-2 py-4 pr-[4.5rem] rounded-sm bg-gray-50 w-full md:max-w-md focus:ring-blue-400 outline-none focus:ring-1"
              placeholder="Type your image that you want generate"
            />
            <button
              className="absolute bottom-2.5 right-2.5 bg-blue-600 text-white px-2 py-2 rounded-sm text-sm"
              type="submit"
            >
              <ArrowLongRightIcon className="h-6" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Header;
