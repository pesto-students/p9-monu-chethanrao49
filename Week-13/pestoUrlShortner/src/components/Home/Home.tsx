import React, { useState } from "react";
import URLInput from "./URLInput/URLInput";
import "./index.css";
import URLOutput from "./URLOutput/URLOutput";

const HomeScreen = () => {
  const [url, setUrl] = useState({
    enteredURL: "",
    shortenURL: "",
    originalURL: "",
    errorMsg: "",
    isCopied: false,
  });

  const [isCopied, setIsCopied] = useState(false);

  const header = "More than just shorter Links";
  const paragraph =
    " Build your brands recognition and get detailed insights on how your links are performing";

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUrl({ ...url, enteredURL: event.target.value });
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(url?.shortenURL);
    setIsCopied(true);
  };

  const handleSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    if (url?.enteredURL) {
      fetch(`https://api.shrtco.de/v2/shorten?url=${url?.enteredURL}`, {
        method: "POST",
      })
        .then((response) => {
          if (!response.ok) {
            setUrl({ ...url, errorMsg: response?.error });
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((data) => {
          console.log(data);
          setUrl({
            ...url,
            shortenURL: data?.result?.short_link,
            originalURL: data?.result?.original_link,
          });
        })
        .catch((error) => {
          setUrl({ ...url, errorMsg: error?.error });
        });
    } else {
      setUrl({ ...url, errorMsg: "Please do enter URL" });
    }
  };

  return (
    <>
      <div className="container">
        <section className="text-section">
          <h2>{header}</h2>
          <p>{paragraph}</p>
        </section>
        <section className="input-section">
          <URLInput
            value={url?.enteredURL || ""}
            disabled={false}
            placeholder={"Shorten a link here... "}
            buttonText={"Shorten It!"}
            onChange={handleChange}
            onClick={handleSubmit}
          />
          <URLOutput
            enteredURL={url?.originalURL || ""}
            shortenURL={url?.shortenURL || ""}
            isCopied={isCopied || false}
            handleCopy={handleCopy}
          />
        </section>
      </div>
    </>
  );
};

export default HomeScreen;
