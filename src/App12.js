import React from "react";
import PDFFile from "./components/PDFFile";
import { PDFDownloadLink } from "@react-pdf/renderer";

const App = (props) => {
  const { name, imgURL, tale } = {
    name: "natia",
    imgURL: "https://images.dog.ceo/breeds/chow/n02112137_2850.jpg",
    tale: "tale1",
  };
  return (
    <div className="App">
      <PDFDownloadLink
        document={<PDFFile name={name} imgURL={imgURL} tale={tale} />}
        filename="FORM"
      >
        {({ loading }) =>
          loading ? (
            <button>Loading Document...</button>
          ) : (
            <button
              onClick={() => {
                console.log("Asd");
              }}
            >
              Download
            </button>
          )
        }
      </PDFDownloadLink>
    </div>
  );
};

export default App;
