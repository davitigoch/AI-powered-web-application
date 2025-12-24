import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";
import Typography from "@mui/material/Typography";
import { useParams } from "react-router-dom";
import DownloadPDF from "../components/DownloadPDF";
import imageFunc from "../api/imageModifier";
import Image from "mui-image";
import Grid from "@mui/material/Grid";
import { Paper } from "@mui/material";
import LinearProgress from "@mui/material/LinearProgress";
import { useEffect } from "react";
import { getBookInfo } from "../api/bookInfoProvider";

export default function BasicTextFields(props) {
  const [image, setImage] = useState("");
  const [name, setName] = useState("");
  const [url, setUrl] = useState("");
  const [generating, setGenerating] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { book } = useParams();
  const bookData = getBookInfo(book);

  const handleGenerate = () => {
    setError("");
    setGenerating(true);
    imageFunc(image, setUrl, setGenerating, setError);
  };
  return (
    <>
      <Grid
        container
        spacing={3}
        direction="row"
        align="center"
        justifyContent={"center"}
      >
        <Grid item md={12} lg={4}>
          <Box width={420} alignSelf={"end"}>
            <Typography
              textAlign={"center"}
              variant="h3"
              sx={{ margin: "30px 0px 10px 0px" }}
            >
              {bookData.name}
            </Typography>
            <Image
              src={`${process.env.PUBLIC_URL}/${bookData.picture}`}
              //           height="
              // 100%
              // "
              width="
400px
"
              fit="
cover"
              duration={3000}
              easing="
cubic-bezier(0.7, 0, 0.6, 1)"
              showLoading={false}
              errorIcon={true}
              shift={null}
              distance="
100px
"
              shiftDuration={900}
              bgColor="
inherit
"
            />
            <Typography
              variant="h6"
              textAlign={"start"}
              sx={{ padding: "10px" }}
            >
              {bookData.anotation}
            </Typography>
          </Box>
        </Grid>
        <Grid item md={12} lg={4}>
          <Box
            sx={{
              width: "400px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
            noValidate
            autoComplete="off"
          >
            <Paper sx={{ width: 420, marginTop: "30px", padding: "20px " }}>
              <Typography
                variant="h6"
                gutterBottom
                sx={{ marginLeft: "50px", color: "blue" }}
              >
                Enter name and Upload Photo
              </Typography>
              <TextField
                id="outlined-basic"
                fullWidth
                label="Enter Name"
                variant="outlined"
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
              <Button
                variant="contained"
                fullWidth="true"
                component="label"
                sx={{ marginTop: "30px" }}
                disabled={name == ""}
              >
                Upload Photo
                <input
                  hidden
                  accept="image/*"
                  multiple
                  type="file"
                  onChange={(e) => {
                    setImage(e.target.files[0]);
                  }}
                />
              </Button>
              <Typography color="red" variant="s7" marginBottom="30px">
                *photo should contain face, max size : 2000px:2000px, 2mb
              </Typography>

              <Button
                variant="contained"
                disabled={image == "" || name == ""}
                color="success"
                fullWidth="true"
                onClick={handleGenerate}
                sx={{ marginTop: "30px" }}
              >
                GENERATE BOOK
              </Button>
            </Paper>
            {generating ? (
              <Box sx={{ width: "200px", height: 20 }}>
                <b>Generating book...</b>
                <LinearProgress sx={{ marginTop: "50px" }} />
              </Box>
            ) : (
              <div></div>
            )}
            {error != "" ? (
              <div style={{ color: "red" }}>{error}</div>
            ) : (
              <div></div>
            )}
            {url == "" || name == "" ? (
              <div></div>
            ) : (
              <DownloadPDF name={name} imgURL={url} tale={bookData.book} />
            )}
          </Box>
        </Grid>
      </Grid>
    </>
  );
}
