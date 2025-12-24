import Card from "../components/Card.js";
import TestCard from "../components/TestCard.js";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { getBookList } from "../api/bookInfoProvider.js";

function BookList() {
  const books = getBookList();
  return (
    <Box
      id="books"
      sx={{
        marginBottom: "40px",
      }}
    >
      <Box
        sx={{
          flexGrow: 1,
          display: "flex",
          justifyContent: "center",
          marginBottom: "30px",
        }}
      >
        <Typography variant="h2" gutterBottom>
          BOOKS
        </Typography>
      </Box>
      <Box sx={{ marginLeft: "30px", marginRight: "30px" }}>
        <Grid
          container
          spacing={3}
          direction="row"
          display="flex"
          justifyContent="spaceBetween"
        >
          {books.map((book) => (
            <Grid item xs={12} md={6} lg={3}>
              <Card
                book={book.book}
                imageUrl={book.picture}
                name={book.name}
                anotation={book.anotation}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}

export default BookList;
