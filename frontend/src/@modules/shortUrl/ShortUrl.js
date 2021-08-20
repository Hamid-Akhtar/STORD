import React, { useState } from "react";
import Header from "../../components/Header";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
  TextField,
} from "@material-ui/core";
import { createTheme } from "@material-ui/core/styles";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";

const useStyles = makeStyles({
  dev: {
    width: "100%",
    height: "70vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    alignContent: "center",
  },
  root: {
    padding: "20px",
    minWidth: 375,
    maxWidth: 400,
    marginTop: "20px",
    paddingBottom: "20px",
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontWeight: "600",
    fontSize: 18,
    display: "flex",
    alignSelf: "center",
    justifyContent: "space-around",
  },
  pos: {
    marginBottom: 12,
  },
  error: { color: "red", fontSize: "10px" },
  cardAction: { display: "flex", justifyContent: "space-around" },
});
const theme = createTheme({
  palette: {
    primary: {
      main: "rgb(61, 54, 54)",
    },
    secondary: {
      main: "rgb(61, 54, 54)",
    },
  },
});
function ShortUrl() {
  const classes = useStyles();
  const [url, setUrl] = useState("");
  const [customUrl, setCustomUrl] = useState("");
  const [errorUrl, setErrorUrl] = useState("");

  const handleBtnClick = () => {
    if (url.startsWith("http://") || (url.startsWith("https://") && url)) {
      if (url.startsWith(window.location.origin)) {
        setErrorUrl("This is already a shorten URL");
      } else {
        setErrorUrl("");
        fetch(`${process.env.REACT_APP_API_BASE_URL}/short-url`, {
          method: "POST",
          body: JSON.stringify({
            actualUrl: url,
          }),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        })
          .then((res) => res.json())
          .then((resultss) =>
            setCustomUrl(`${window.location.origin}/${resultss.response}`)
          )
          .catch((e) => console.log("error"));
      }
    } else {
      setErrorUrl("Enter a valid url");
    }
  };
  const handleClear = () => {
    setCustomUrl("");
    setUrl("");
  };
  return (
    <div>
      <Header />
      <div className={classes.dev}>
        {" "}
        <Card className={classes.root}>
          <CardContent>
            <Typography className={classes.title} variant="h1">
              URL Shortener
            </Typography>
            <br></br>
            <MuiThemeProvider theme={theme}>
              <form name="loginForm" noValidate className={classes.form}>
                <TextField
                  style={{ marginBottom: errorUrl.length > 0 ? "" : "20px" }}
                  variant="outlined"
                  label="Url"
                  autoFocus={false}
                  type="text"
                  name="url"
                  required={true}
                  fullWidth
                  onChange={(e) => setUrl(e.target.value)}
                  value={url}
                  error={errorUrl.length > 0 ? true : false}
                  data-testid="Url-field"
                  inputProps={{
                    "data-testid": "bio",
                  }}
                />
                {errorUrl.length > 0 && (
                  <p className={classes.error}>{errorUrl}</p>
                )}
                <TextField
                  variant="outlined"
                  label="Shorten URL"
                  autoFocus={false}
                  value={customUrl}
                  type="text"
                  name="url"
                  fullWidth
                  disabled={customUrl.length > 0 ? false : true}
                />
              </form>
            </MuiThemeProvider>
          </CardContent>
          <CardActions className={classes.cardAction}>
            {customUrl ? (
              <Button variant="contained" color="primary" onClick={handleClear}>
                 Shorten Another URL
              </Button>
            ) : (
              <Button
                variant="contained"
                color="primary"
                onClick={handleBtnClick}
              >
                Shorten URL
              </Button>
            )}
          </CardActions>
        </Card>
      </div>
    </div>
  );
}

export default ShortUrl;
