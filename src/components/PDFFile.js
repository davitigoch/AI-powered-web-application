import React from "react";
import { Page, Text, Image, Document, StyleSheet } from "@react-pdf/renderer";
import { Font } from "@react-pdf/renderer";
import MyCustomFont from "../fonts/Anton-Regular.ttf";
import getTale from "../api/taleDataProvider";

Font.register({
  family: "AntonFamily",
  src: MyCustomFont,
});

const styles = StyleSheet.create({
  body: {
    paddingTop: 35,
    paddingBottom: 65,
    paddingHorizontal: 35,
  },
  title: {
    fontSize: 36,
    textAlign: "center",
    fontFamily: "AntonFamily",
    marginBottom: 50,
  },
  text: {
    textAlign: "center",

    margin: 12,
    marginTop: 50,
    fontSize: 17,
    fontFamily: "AntonFamily",
  },
  image: {
    marginVertical: 15,
    marginHorizontal: 100,
  },
  imageh: {
    marginVertical: 15,
    marginTop: 60,
    marginHorizontal: 100,
  },
  header: {
    fontSize: 12,
    marginBottom: 20,
    textAlign: "center",
    color: "grey",
    fontFamily: "AntonFamily",
  },
  pageNumber: {
    position: "absolute",
    fontSize: 12,
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: "center",
    color: "grey",
    fontFamily: "AntonFamily",
  },
});

const PDFFile = (props) => {
  const pages = getTale(props.tale);
  console.log(pages);
  console.log("pages");
  return (
    <Document>
      <Page style={{ ...styles.body }}>
        <Text style={styles.title}>{`personal book for ${props.name}`}</Text>
        <Image style={styles.image} src={props.imgURL} />
      </Page>
      {pages.map((page, index) => {
        return (
          <Page key={index} style={{ ...styles.body }}>
            <Image
              style={styles.image}
              src={`${process.env.PUBLIC_URL}/${page.image}`}
            />
            <Text style={styles.text}>{page.text}</Text>
            <Text
              style={styles.pageNumber}
              render={({ pageNumber, totalPages }) =>
                `${pageNumber} / ${totalPages}`
              }
            />
          </Page>
        );
      })}
    </Document>
  );
};

export default PDFFile;
