import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { ThemeProvider } from "@emotion/react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Button, Typography, CardActionArea, Stack } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import DonateImg from "../images/Donate-Img.png";
import Step1Img from "../images/Thinking-face-pana.svg";
import Step2Img from "../images/undraw_profile_pic_ic-5-t.svg";
import Step3Img from "../images/Customer-Survey-amico.svg";
import Step4Img from "../images/undraw_check_boxes_re_v40f.svg";
import Step5Img from "../images/Completed-steps-pana.svg";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "right",
  color: theme.palette.text.secondary,
}));

export default function Home() {
  const step_card_info = [
    {
      image: Step1Img,
      alt: "",
      step: "STEP 1",
      description: "Choose to adopt our program",
    },
    {
      image: Step2Img,
      alt: "",
      step: "STEP 2",
      description: "Create an account",
    },
    {
      image: Step3Img,
      alt: "",
      step: "STEP 3",
      description: "Take our survey",
    },
    {
      image: Step4Img,
      alt: "",
      step: "STEP 4",
      description: "Get personalised checklist",
    },
    {
      image: Step5Img,
      alt: "",
      step: "STEP 5",
      description: "Track your progress",
    },
  ];
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
      <Stack direction="row" backgroundColor="#126435" height="85vh" paddingTop="5rem"
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
            // height: "70%",
            // backgroundColor: "white",
            // borderBottomLeftRadius: 225,
            // borderTopLeftRadius: 225,
          }}
        >
          <img width="600" src={DonateImg}></img>
        </div>
      </Stack>

      <div style={{ height: "60vh" }}></div>
      <div style={{ height: "70vh", backgroundColor: "#CBDDD3" }}>
        <Typography
          variant="h4"
          style={{ textAlign: "center", paddingTop: "2rem" }}
        >
          How does it work?
        </Typography>
        <Stack
          direction="row"
          justifyContent="space-around"
          alignItems="baseline"
          spacing={2}
          margin="4rem 5rem 0 5rem"
        >
          {step_card_info.map((info) => {
            return (
              <Card sx={{ width: 215, height: 315, borderRadius: 5 }}>
                <Item>
                  <CardMedia
                    component="img"
                    height="200"
                    width="50"
                    image={info.image}
                    alt={info.alt}
                  />
                  <CardContent sx={{ color: "black", textAlign: "left" }}>
                    <Typography gutterBottom variant="h6">
                      {info.step}
                    </Typography>
                    <Typography variant="body2">{info.description}</Typography>
                  </CardContent>
                </Item>
              </Card>
            );
          })}
        </Stack>
      </div>
    </div>
  );
}
