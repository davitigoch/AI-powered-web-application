import PDFFile from "./PDFFile";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { Box } from "@mui/material";
import LinearProgress from "@mui/material/LinearProgress";

const DownloadPdf = (props) => {
  const { name, tale, imgURL } = props;
  console.log("downloadpdf");
  const onClick = (e) => {
    console.log("Asd");
  };
  return (
    <div className="App">
      <PDFDownloadLink
        document={<PDFFile name={name} imgURL={imgURL} tale={tale} />}
        filename="FORM"
      >
        {({ loading }) =>
          loading ? (
            <Box sx={{ width: "200px", height: 20 }}>
              <b>Generating book...</b>
              <LinearProgress sx={{ marginTop: "50px" }} />
            </Box>
          ) : (
            <Box sx={{ width: "100%" }}>
              <button
                style={{
                  backgroundColor: "#aaff3b",
                  width: "400px",
                  marginTop: "20px",
                  border: "none",
                  borderRadius: "25px",
                  color: "green",
                  padding: "15px 32px",
                  textAlign: "center",
                  fontSize: "16px",
                }}
                onClick={onClick}
              >
                <b> DOWNLOAD BOOK </b>
              </button>
            </Box>
          )
        }
      </PDFDownloadLink>
    </div>
  );
};

export default DownloadPdf;
