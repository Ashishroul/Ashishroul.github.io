import React from 'react'
import homePage from "../Project Photo/Overstock.png"
import { BsGithub } from "react-icons/bs";
import { Button, Box, Grid, GridItem, HStack, Heading, Image, Link, Stack, Text, Flex } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons"
import { useSelector } from "react-redux";

export default function OverStock() {
    const theme = useSelector(store => store.theme)
    return <Stack display={"flex"} flexDirection={["column", "column", "row", "row", "row"]} gap={"20px"} padding={"20px"} alignContent={"center"} alignItems={"center"} className="project-card" boxShadow={"lg"} borderRadius={"15px"} m={2}>
        <Box w={["100%", "100%", "50%", "50%", "50%"]} justifyContent={"center"} justifyItems={"center"}>
            <Image src={homePage} border={"1px solid black"} cursor={"pointer"} alt="connect" />
        </Box>
        <Box w={["100%", "100%", "50%", "50%", "50%"]}>
            <Heading fontSize={"5xl"} className="project-title">OverStock</Heading>
            <Text mt={"15px"} mb={"15px"} className="project-description" >Welcome to <span style={{ color: "#4A90E2" }}>OverStock</span>, where exquisite design meets affordability, and your dream home becomes a reality. Our furniture emporium is a haven for those seeking to elevate their living spaces with style and comfort without breaking the bank.</Text>
            <Grid templateColumns={["repeat(2,1fr)", "repeat(3,1fr)", "repeat(3,1fr)", "repeat(4,1fr)", "repeat(4,1fr)"]} templateRows={"auto"} gap={"10px"} className="project-tech-stack" >
                <GridItem><Button _hover={{ color: "none" }} _active={{ color: "none" }} colorScheme="red" w={"100%"}>HTML</Button></GridItem>
                <GridItem><Button _hover={{ color: "none" }} _active={{ color: "none" }} colorScheme="blue" w={"100%"} >CSS</Button></GridItem>
                <GridItem><Button _hover={{ color: "none" }} _active={{ color: "none" }} colorScheme="yellow" color={"black"} w={"100%"} >JavaScript</Button></GridItem>
                <GridItem><Button _hover={{ color: "none" }} _active={{ color: "none" }} colorScheme="cyan" color={"black"} w={"100%"}>SmtpJs</Button></GridItem>
            </Grid>
            <Stack direction={"row"} justifyContent={["center", "center", "left", "left", "left"]}>
                <Link href='https://github.com/Ashishroul/project_overstock' isExternal className="project-github-link">
                    <Button mt={"15px"} mr={"15px"} leftIcon={<BsGithub />} bg={theme === "dark" ? "white" : "black"} color={theme === "dark" ? "black" : "white"} w={"100%"} border={"1px solid black"} _hover={{ colorScheme: theme === "dark" ? "white" : "black" }} _active={{
                        bg: theme === "dark" ? "white" : "black", transform: 'scale(0.90)', borderColor: '#000000'
                    }}>Github</Button>
                </Link>
                <Link href='https://melodic-torrone-efeec9.netlify.app/' isExternal className="project-deployed-link">
                    <Button mt={"15px"} backgroundColor="#F6FFEE" color={"black"} w={"100%"} _hover={{ colorScheme: "#F6FFEE" }} rightIcon={<ExternalLinkIcon />} border={"1px solid black"} _active={{
                        bg: '#F6FFEE', transform: 'scale(0.90)', borderColor: '#000000'
                    }}>Live Demo</Button>
                </Link>
            </Stack>
        </Box>
    </Stack >
}