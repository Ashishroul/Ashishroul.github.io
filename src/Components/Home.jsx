import { Box, Button, Heading, Image, Link, Stack, Text } from "@chakra-ui/react"
import ProfilePic from "../Photos/ProfilePic.jpg"
import { useSelector } from "react-redux";
import { DownloadIcon } from "@chakra-ui/icons";
import resume from "../assets/Ashish-Roul-Resume.pdf";
const Home = () => {
    const theme = useSelector(store => store.theme);
    function downloadAndOpenResume() {
        window.open(
            "https://drive.google.com/file/d/17EetN0Ys_Uh_9lEadezNEmC7j_EyIwKo/view?usp=sharing"
        );
    }
    return <Box bg={theme === "dark" ? "black" : "white"} color={theme === "dark" ? "white" : "black"} w={"100%"} id="home" >
        <Box m={"auto"} w={"90%"}>
            <Stack display={"flex"} m={"auto"} justifyContent={"center"} flexDirection={["column", "column", "row", "row", "row"]} alignItems={"center"} w={"100%"} borderBottom={"1px"} borderBottomColor={theme === "dark" ? "white" : "black"}>
                <Box textAlign={"left"} padding={"1rem"} fontSize={"2rem"} m={"auto"} w={["100%", "85%", "70%", "50%", "50%"]}>
                    <Text textAlign={"left"} fontWeight={200} fontSize={["1rem", "1rem", "2rem", "2rem", "2rem"]}>Hello👋, </Text>
                    <Heading textAlign={"left"} fontSize={["2.5rem", "2.5rem", "4rem", "4rem", "4rem"]}>I'm <span style={{ color: "#4A90E2" }} id="user-detail-name">Ashish</span></Heading>
                    <Heading textAlign={"left"} fontSize={["2.5rem", "2.5rem", "3.5rem", "3.5rem", "3.5rem"]} >Full Stack Web Developer</Heading>
                    <Text textAlign={"left"} fontSize={["1rem", "1rem", "1.2rem", "1.2rem", "1.2rem"]} fontWeight={300} >Skilled Full stack Web developer and experienced <br /> in creating User freindly Interface websites.</Text>
                    <a
                        href={resume}
                        download={"Ashish-Roul-Resume.pdf"}
                        style={{
                            textDecoration: "none",
                            textAlign: "center"
                        }}
                        target="_blank"
                        id="resume-link-2"
                        rel="noreferrer"
                    >
                        <Button rightIcon={<DownloadIcon />} id="resume-button-2" bg={theme === "dark" ? "white" : "black"} color={theme === "dark" ? "black" : "white"} _hover={{ color: "none" }} onClick={downloadAndOpenResume}>
                            Resume
                        </Button>
                    </a>
                </Box>
                <Box w={["100%", "85%", "70%", "50%", "50%"]} m={"auto"} position={"sticky"} h={"20%"} alignItems={"flex-end"}>
                    <Image src={ProfilePic} m={"auto"} w={"50%"} h={"50%"} borderRadius={"20px"} className="home-img" alt="profilepic" flex={1}/>
                </Box>
            </Stack>
        </Box >
    </Box >
}
export default Home;