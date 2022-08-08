import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { ThemeProvider } from "@emotion/react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Button, Typography, CardActionArea } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "right",
  color: theme.palette.text.secondary,
}));

export default function Home() {
  return (
    // <Box sx={{ display: 'flex-end',
    // 		   backgroundColor: '#126435' }}>
    // 	<Grid container spacing={11}>
    // 	<Grid item xs={12}>

    // 	</Grid>
    // 	<Grid item xs={12}>

    // 	</Grid>
    // 	<Grid item xs={6}>
    // 		some text in here.
    // 	</Grid>
    // 		<Grid item xs={6}>

    //       		<Item style={{
    // 			display: 'flex-end',

    //     		borderBottomLeftRadius: 225,
    // 			borderTopLeftRadius: 225,

    //   			}}>
    // 				<a href="https://sharemeals.org/"><img src='https://img.freepik.com/free-vector/tiny-people-standing-near-box-donation-food-delivery-volunteers-giving-healthy-grocery-goods-charity-flat-vector-illustration-social-support-humanitarian-help-community-sharing-concept_74855-21023.jpg' alt='jpg'
    // 				></img></a>
    // 			</Item>
    //     	</Grid>
    // 			<div className={styles.container}
    // 			style={{
    //     		backgroundColor: '#126435',
    //   			}}>

    //     			<main className={styles.main}>
    // 				{ <h1 className={styles.title}>

    // 	    			{/* <a href="https://sharemeals.org/"><img src='https://img.freepik.com/free-vector/tiny-people-standing-near-box-donation-food-delivery-volunteers-giving-healthy-grocery-goods-charity-flat-vector-illustration-social-support-humanitarian-help-community-sharing-concept_74855-21023.jpg' alt='jpg' /></a> */}
    // 				</h1> }

    // 					{}
    //     			</main>

    //     				<footer className={styles.footer}>
    // 					{}
    //     				</footer>

    // 			</div>
    // 	</Grid>
    // </Box>
    <div>
      <div
        style={{
          display: "flex",
          backgroundColor: "#126435",
          height: "85vh",
          paddingTop: "5rem",
        }}
      >
        <div style={{ width: "50%", padding: "5rem", color: "white" }}>
          <Typography variant="h3">
            Lorem ipsum dolor sit amet, consectetur.
          </Typography>
          <Typography variant="body1" style={{ marginTop: "1rem" }}>
            *Address the issue we seek to solve and talk about this being a
            solution.*
          </Typography>
          <Button
            variant="contained"
            style={{
              backgroundColor: "white",
              color: "#126435",
              marginTop: "3rem",
            }}
          >
            Get Started
          </Button>
        </div>

        <div
          style={{
            width: "50%",
            height: "70%",
            backgroundColor: "white",
            borderBottomLeftRadius: 225,
            borderTopLeftRadius: 225,
          }}
        >
          {/* <img  width="600" src='https://img.freepik.com/free-vector/tiny-volunteers-sharing-canned-food-grocery-products-help-support-assistance-from-people-with-charity-cardboard-box-flat-vector-illustration-voluntary-delivery-humanitarian-aid-concept_74855-22077.jpg?w=1800&t=st=1659939326~exp=1659939926~hmac=bb1064f1ba9ef17aa2b1e319b33a0dc83ed7746a62d3dd85edf1ae046bb34099'></img> */}
        </div>
      </div>

      <div style={{ height: "60vh" }}></div>
      <div style={{ height: "70vh", backgroundColor: "#CBDDD3" }}>
        <Typography
          variant="h4"
          style={{ textAlign: "center", paddingTop: "2rem" }}
        >
          How does it work?
        </Typography>
		<div style={{display: "flex", justifyContent: "space-around", margin: "4rem 5rem 0 5rem",}}>
		<Card sx={{ width: 215, borderRadius: 5}}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="200"
              width="50"
              image="/static/images/cards/contemplative-reptile.jpg"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Step
              </Typography>
              <Typography variant="body2" color="text.secondary">
                blah blah blah
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>

		<Card sx={{ width: 215, borderRadius: 5}}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="200"
              width="50"
              image="/static/images/cards/contemplative-reptile.jpg"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Step
              </Typography>
              <Typography variant="body2" color="text.secondary">
                blah blah blah
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>

		<Card sx={{ width: 215, borderRadius: 5}}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="200"
              width="50"
              image="/static/images/cards/contemplative-reptile.jpg"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Step
              </Typography>
              <Typography variant="body2" color="text.secondary">
                blah blah blah
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>

		<Card sx={{ width: 215, borderRadius: 5}}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="200"
              width="50"
              image="/static/images/cards/contemplative-reptile.jpg"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Step
              </Typography>
              <Typography variant="body2" color="text.secondary">
                blah blah blah
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>

		<Card sx={{ width: 215, borderRadius: 5}}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="200"
              width="50"
              image="/static/images/cards/contemplative-reptile.jpg"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Step
              </Typography>
              <Typography variant="body2" color="text.secondary">
                blah blah blah
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
		</div>
      </div>
    </div>
  );
}
