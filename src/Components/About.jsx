import { EmailIcon } from "@chakra-ui/icons";
import {
  Box,
  Card,
  CardBody,
  Text,
  Icon,
  Grid,
  GridItem,
  Heading,
} from "@chakra-ui/react";
import { TiLocation } from "react-icons/ti";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { useSelector } from "react-redux";
const About = () => {
  const theme = useSelector((store) => store.theme);
  return (
    <Box
      w={"100%"}
      backgroundColor={theme === "dark" ? "black" : "white"}
      color={theme === "dark" ? "white" : "black"}
      id="about"
      className="about section"
    >
      <Box
        w={"70%"}
        m={"auto"}
        padding={"1rem"}
        borderBottom={"1px"}
        borderBottomColor={theme === "dark" ? "white" : "black"}
      >
        <Card
          m={"auto"}
          bg={theme === "dark" ? "black" : "white"}
          color={theme === "dark" ? "white" : "black"}
          border={"none"}
        >
          <Heading
            color={"#4A90E2"}
            textAlign={"center"}
            textDecoration={"underline"}
            textDecorationColor={"#4A90E2"}
          >
            About Me
          </Heading>
          <CardBody>
            <Text
              fontSize={["1rem", "1rem", "1.5rem", "1.5rem", "1.5rem"]}
              w={["100%", "100%", "80%", "80%", "80%"]}
              m={"auto"}
              id="user-detail-intro"
            >
A web development enthusiast from Bhubneswar, Odisha. My passion
lies in mastering the{" "}
<span style={{ color: "#4A90E2" }}>MERN stack</span>. While new to the field, I have gained{" "}
<span style={{ color: "#4A90E2" }}>hands-on experience</span> with
React, Node.js, Express, and MongoDB during my studies. Dedicated to crafting user-friendly interfaces and scalable
backends, constantly expanding my skillset. If you have
opportunities for someone starting out like me, please connect.
Thank you for considering my profile.

            </Text>
            <br />
            <Grid
              w={"90%"}
              m={"auto"}
              display={"grid"}
              templateColumns={[
                "repeat(2,1fr)",
                "repeat(2,1fr)",
                "repeat(2,1fr)",
                "repeat(4,1fr)",
                "repeat(4,1fr)",
              ]}
              templateRows={[
                "repeat(4,1fr)",
                "repeat(4,1fr)",
                "repeat(2,1fr)",
                "repeat(1,1fr)",
                "repeat(1,1fr)",
              ]}
            >
              <GridItem
                fontSize={["1.5rem", "1.5rem", "1.5rem", "1.5rem", "1.5rem"]}
                m="auto"
                textAlign={"center"}
              >
                <a
                  href="https://www.google.com/maps/place/Bhubaneswar,+Odisha/@20.3010259,85.7380515,12z/data=!3m1!4b1!4m6!3m5!1s0x3a1909d2d5170aa5:0xfc580e2b68b33fa8!8m2!3d20.2960587!4d85.8245398!16zL20vMDNjenFz?authuser=0&entry=ttu"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <Icon
                    as={TiLocation}
                    fontSize={["1.5rem", "1.5rem", "1.5rem", "1.5rem", "1.5rem"]}
                  />{" "}
                </a>
              </GridItem>
              <GridItem
                fontSize={["1.5rem", "1.5rem", "1.5rem", "1.5rem", "1.5rem"]}
                m="auto"
                textAlign={"center"}
              >
                <a
                  href="mailto:officialashishroul@gmail.com"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <Icon
                    as={EmailIcon}
                    fontSize={["1.5rem", "1.5rem", "1.5rem", "1.5rem", "1.5rem"]}
                  />{" "}
                </a>
              </GridItem>
              <GridItem
                fontSize={["1.5rem", "1.5rem", "1.5rem", "1.5rem", "1.5rem"]}
                m="auto"
                textAlign={"center"}
              >
                <a
                  href="https://github.com/Ashishroul"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <Icon
                    as={AiFillGithub}
                    fontSize={["1.5rem", "1.5rem", "1.5rem", "1.5rem", "1.5rem"]}
                  />{" "}
                </a>
              </GridItem>
              <GridItem
                fontSize={["1.5rem", "1.5rem", "1.5rem", "1.5rem", "1.5rem"]}
                m="auto"
                textAlign={"center"}
              >
                <a
                  href="https://www.linkedin.com/in/ashish-roul-77581815b/"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  {" "}
                  <Icon
                    as={AiFillLinkedin}
                    fontSize={["1.5rem", "1.5rem", "1.5rem", "1.5rem", "1.5rem"]}
                  />{" "}
                </a>
              </GridItem>
            </Grid>
          </CardBody>
        </Card>
      </Box>
    </Box>
  );
};
export default About;
