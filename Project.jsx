import React, { useEffect } from "react";
import styles from "./Project.module.css";
import {
  Box,
  Center,
  useColorModeValue,
  Text,
  Stack,
  Image,
  Button,
} from "@chakra-ui/react";
import Spotify from "../Spotify.jpeg";
import Zappos from "../Zappos.jpeg";
import Bigbasket from "../Bigbasket.jpeg";
import Netflixclone from "../Netflix.jpeg"
import Sugarcosmetics from "../Sugar Cosmetics.jpeg";
import Tindog from "../Tindog.jpeg"
import AOS from "aos";
import "aos/dist/aos.css";

function Project() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-out",
    });
    return () => {
      AOS.refresh();
    };
  }, []);
  return (
    <>
      <h1 className={styles.headingOfProject}>Project</h1>
      <div className={styles.ProjectContainer} id="project_section">
      <Center data-aos="slide-up" py={12}>
          <Box
            data-aos="zoom-in"
            role={"group"}
            p={6}
            maxW={"530px"}
            height="490px"
            w={"full"}
            bg={useColorModeValue("white", "gray.800")}
            boxShadow={"2xl"}
            rounded={"lg"}
            pos={"relative"}
            zIndex={1}
          >
            <Box
              rounded={"lg"}
              mt={-12}
              pos={"relative"}
              height={"230px"}
              _after={{
                transition: "all .3s ease",
                content: '""',
                w: "full",
                h: "full",
                pos: "absolute",
                top: 5,
                left: 0,
                backgroundImage: `url(${Spotify})`,
                filter: "blur(15px)",
                zIndex: -1,
              }}
              _groupHover={{
                _after: {
                  filter: "blur(20px)",
                },
              }}
            >
              <Image
                rounded={"lg"}
                height={230}
                width={282}
                objectFit={"cover"}
                src={Spotify}
                alt="#"
              />
            </Box>
            <Stack pt={10} align={"center"}>
              <Text
                color={"gray.500"}
                fontSize={"sm"}
                textTransform={"uppercase"}
              >
                Spotify
              </Text>
              <Text fontSize={"1rem"}  textAlign={"left"} fontFamily={"body"} fontWeight={500}>
              Spotify is the  Responsive website With Dyanamic Design which was developed completely using React With Tailwind Css for Styling.
              </Text>
              <Stack direction={"row"} align={"center"}>
                <Text fontWeight={500} width="50%" fontSize={"1rem"}>
                  Tech Stack :
                </Text>
                <Text fontSize={"0.8rem"} color={"gray.600"}>
                  HTML | CSS | JS | React | Tailwind CSS
                </Text>
              </Stack>
              <Stack direction={"row"} align={"center"}>
                <Button
                  as="a"
                  href="https://spotifywebsites.netlify.app/"
                  target="_blank"
                  _hover={{ cursor: "pointer", backgroundColor: "#fcc700" }}
                  backgroundColor="#fbb400"
                  color="black"
                  fontWeight={500}
                  width="50%"
                  fontSize="1rem"
                >
                  Live
                </Button>

                <Button
                  as="a"
                  href="https://github.com/krishnabagavan/spotify_Website"
                  target="_blank"
                  _hover={{ cursor: "pointer", backgroundColor: "#fcc700" }}
                  backgroundColor="#fbb400"
                  color="black"
                  fontWeight={500}
                  width="50%"
                  fontSize="1rem"
                >
                  Github
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Center>


        <Center data-aos="slide-up" py={12}>
          <Box
            data-aos="zoom-in"
            role={"group"}
            p={6}
            maxW={"530px"}
            height="490px"
            w={"full"}
            bg={useColorModeValue("white", "gray.800")}
            boxShadow={"2xl"}
            rounded={"lg"}
            pos={"relative"}
            zIndex={1}
          >
            <Box
              rounded={"lg"}
              mt={-12}
              pos={"relative"}
              height={"230px"}
              _after={{
                transition: "all .3s ease",
                content: '""',
                w: "full",
                h: "full",
                pos: "absolute",
                top: 5,
                left: 0,
                backgroundImage: `url(${Zappos})`,
                filter: "blur(15px)",
                zIndex: -1,
              }}
              _groupHover={{
                _after: {
                  filter: "blur(20px)",
                },
              }}
            >
              <Image
                rounded={"lg"}
                height={230}
                width={282}
                objectFit={"cover"}
                src={Zappos}
                alt="#"
              />
            </Box>
            <Stack pt={10} align={"center"}>
              <Text
                color={"gray.500"}
                fontSize={"sm"}
                textTransform={"uppercase"}
              >
                Zappos.com
              </Text>
              <Text fontSize={"1rem"}  textAlign={"left"} fontFamily={"body"} fontWeight={500}>
              Zappos Clone is My Constructive week Project Developed Using React and for Styling i used Tailwind Css
              <span style={
                  {visibility:"hidden"}
                }> Online shopping Website </span>    
              </Text>
              <Stack direction={"row"} align={"center"}>
                <Text fontWeight={500} width="50%" fontSize={"1rem"}>
                  Tech Stack :
                </Text>
                <Text fontSize={"0.8rem"} color={"gray.600"}>
                  HTML | CSS | JS | React | Tailwind Css
                </Text>
              </Stack>
              <Stack direction={"row"} align={"center"}>
                <Button
                  as="a"
                  href="https://zapposwebsite.netlify.app/"
                  target="_blank"
                  _hover={{ cursor: "pointer", backgroundColor: "#fcc700" }}
                  backgroundColor="#fbb400"
                  color="black"
                  fontWeight={500}
                  width="50%"
                  fontSize="1rem"
                >
                  Live
                </Button>

                <Button
                  as="a"
                  href="https://github.com/krishnabagavan/Zappos-website"
                  target="_blank"
                  _hover={{ cursor: "pointer", backgroundColor: "#fcc700" }}
                  backgroundColor="#fbb400"
                  color="black"
                  fontWeight={500}
                  width="50%"
                  fontSize="1rem"
                >
                  Github
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Center>
        <Center data-aos="slide-up" py={12}>
          <Box
            data-aos="zoom-in"
            role={"group"}
            p={6}
            maxW={"530px"}
            height="490px"
            w={"full"}
            bg={useColorModeValue("white", "gray.800")}
            boxShadow={"2xl"}
            rounded={"lg"}
            pos={"relative"}
            zIndex={1}
          >
            <Box
              rounded={"lg"}
              mt={-12}
              pos={"relative"}
              height={"230px"}
              _after={{
                transition: "all .3s ease",
                content: '""',
                w: "full",
                h: "full",
                pos: "absolute",
                top: 5,
                left: 0,
                backgroundImage: `url(${Bigbasket})`,
                filter: "blur(15px)",
                zIndex: -1,
              }}
              _groupHover={{
                _after: {
                  filter: "blur(20px)",
                },
              }}
            >
              <Image
                rounded={"lg"}
                height={230}
                width={282}
                objectFit={"cover"}
                src={Bigbasket}
                alt="#"
              />
            </Box>
            <Stack pt={10} align={"center"}>
              <Text
                color={"gray.500"}
                fontSize={"sm"}
                textTransform={"uppercase"}
              >
                BigBasket Clone
              </Text>
              <Text fontSize={"1rem"}  textAlign={"left"} fontFamily={"body"} fontWeight={500}>
                Developed an E-commerce Website Of Big Basket Clone with modern design and intuitivenavigation using Html,Css,Bootstrap<span style={
                  {visibility:"hidden"}
                }> Shoping Website</span>    
              </Text>
              <Stack direction={"row"} align={"center"}>
                <Text fontWeight={500} width="50%" fontSize={"1rem"}>
                  Tech Stack :
                </Text>
                <Text fontSize={"0.8rem"} color={"gray.600"}>
                  HTML | CSS | Bootstrap
                </Text>
              </Stack>
              <Stack direction={"row"} align={"center"}>
                <Button
                  as="a"
                  href="https://online-grocery-websites.netlify.app/"
                  target="_blank"
                  _hover={{ cursor: "pointer", backgroundColor: "#fcc700" }}
                  backgroundColor="#fbb400"
                  color="black"
                  fontWeight={500}
                  width="50%"
                  fontSize="1rem"
                >
                  Live
                </Button>

                <Button
                  as="a"
                  href="https://github.com/krishnabagavan/Bigbasket-Clone"
                  target="_blank"
                  _hover={{ cursor: "pointer", backgroundColor: "#fcc700" }}
                  backgroundColor="#fbb400"
                  color="black"
                  fontWeight={500}
                  width="50%"
                  fontSize="1rem"
                >
                  Github
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Center>
        <Center data-aos="slide-up" py={12}>
          <Box
            data-aos="zoom-in"
            role={"group"}
            p={6}
            maxW={"530px"}
            height="490px"
            w={"full"}
            bg={useColorModeValue("white", "gray.800")}
            boxShadow={"2xl"}
            rounded={"lg"}
            pos={"relative"}
            zIndex={1}
          >
            <Box
              rounded={"lg"}
              mt={-12}
              pos={"relative"}
              height={"230px"}
              _after={{
                transition: "all .3s ease",
                content: '""',
                w: "full",
                h: "full",
                pos: "absolute",
                top: 5,
                left: 0,
                backgroundImage: `url(${Netflixclone})`,
                filter: "blur(15px)",
                zIndex: -1,
              }}
              _groupHover={{
                _after: {
                  filter: "blur(20px)",
                },
              }}
            >
              <Image
                rounded={"lg"}
                height={230}
                width={282}
                objectFit={"cover"}
                src={Netflixclone}
                alt="#"
              />
            </Box>
            <Stack pt={10} align={"center"}>
              <Text
                color={"gray.500"}
                fontSize={"sm"}
                textTransform={"uppercase"}
              >
                Netflix Clone
              </Text>
              <Text fontSize={"1rem"}  textAlign={"left"} fontFamily={"body"} fontWeight={500}>
                Developed an interactive and visually appealing user interface for a Netflix Clone <span style={
                  {visibility:"hidden"}
                }> Netflix Clone for entertainment</span>    
              </Text>
              <Stack direction={"row"} align={"center"}>
                <Text fontWeight={500} width="50%" fontSize={"1rem"}>
                  Tech Stack :
                </Text>
                <Text fontSize={"0.8rem"} color={"gray.600"}>
                  HTML | CSS | Bootstrap
                </Text>
              </Stack>
              <Stack direction={"row"} align={"center"}>
                <Button
                  as="a"
                  href="https://net-website.netlify.app/"
                  target="_blank"
                  _hover={{ cursor: "pointer", backgroundColor: "#fcc700" }}
                  backgroundColor="#fbb400"
                  color="black"
                  fontWeight={500}
                  width="50%"
                  fontSize="1rem"
                >
                  Live
                </Button>
                <Button
                  as="a"
                  href="https://github.com/krishnabagavan/Netflix-Clone"
                  target="_blank"
                  _hover={{ cursor: "pointer", backgroundColor: "#fcc700" }}
                  backgroundColor="#fbb400"
                  color="black"
                  fontWeight={500}
                  width="50%"
                  fontSize="1rem"
                >
                  Github
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Center>
        <Center data-aos="slide-up" py={12}>
          <Box
            data-aos="zoom-in"
            role={"group"}
            p={6}
            maxW={"530px"}
            height="490px"
            w={"full"}
            bg={useColorModeValue("white", "gray.800")}
            boxShadow={"2xl"}
            rounded={"lg"}
            pos={"relative"}
            zIndex={1}
          >
            <Box
              rounded={"lg"}
              mt={-12}
              pos={"relative"}
              height={"230px"}
              _after={{
                transition: "all .3s ease",
                content: '""',
                w: "full",
                h: "full",
                pos: "absolute",
                top: 5,
                left: 0,
                backgroundImage: `url(${Sugarcosmetics})`,
                filter: "blur(15px)",
                zIndex: -1,
              }}
              _groupHover={{
                _after: {
                  filter: "blur(20px)",
                },
              }}
            >
              <Image
                rounded={"lg"}
                height={230}
                width={282}
                objectFit={"cover"}
                src={Sugarcosmetics}
                alt="#"
              />
            </Box>
            <Stack pt={10} align={"center"}>
              <Text
                color={"gray.500"}
                fontSize={"sm"}
                textTransform={"uppercase"}
              >
               SugarCosmetics
              </Text>
              <Text fontSize={"1rem"} textAlign={"left"} fontFamily={"body"} fontWeight={500}>
                Its'a Constructive week project SugarCosmetic Clone developed using Html,css,Bootstrap.Dynamic Design . <span style={
                  {visibility:"hidden"}
                }>SugarCosmetics</span>    
              </Text>
              <Stack direction={"row"} align={"center"}>
                <Text fontWeight={500} width="50%" fontSize={"1rem"}>
                  Tech Stack :
                </Text>
                <Text fontSize={"0.8rem"}  color={"gray.600"}>
                  HTML | CSS | Bootstrap
                </Text>
              </Stack>
              <Stack direction={"row"} align={"center"}>
                <Button
                  as="a"
                  href="https://sugar-cosmetics-webpage.netlify.app/"
                  target="_blank"
                  _hover={{ cursor: "pointer", backgroundColor: "#fcc700" }}
                  backgroundColor="#fbb400"
                  color="black"
                  fontWeight={500}
                  width="50%"
                  fontSize="1rem"
                >
                  Live
                </Button>
                // ""
                <Button
                  as="a"
                  href="https://github.com/krishnabagavan/SuagarCosmetis-Clone"
                  target="_blank"
                  _hover={{ cursor: "pointer", backgroundColor: "#fcc700" }}
                  backgroundColor="#fbb400"
                  color="black"
                  fontWeight={500}
                  width="50%"
                  fontSize="1rem"
                >
                  Github
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Center>
        <Center data-aos="slide-up" py={12}>
          <Box
            data-aos="zoom-in"
            role={"group"}
            p={6}
            maxW={"530px"}
            height="490px"
            w={"full"}
            bg={useColorModeValue("white", "gray.800")}
            boxShadow={"2xl"}
            rounded={"lg"}
            pos={"relative"}
            zIndex={1}
          >
            <Box
              rounded={"lg"}
              mt={-12}
              pos={"relative"}
              height={"230px"}
              _after={{
                transition: "all .3s ease",
                content: '""',
                w: "full",
                h: "full",
                pos: "absolute",
                top: 5,
                left: 0,
                backgroundImage: `url(${Tindog})`,
                filter: "blur(15px)",
                zIndex: -1,
              }}
              _groupHover={{
                _after: {
                  filter: "blur(20px)",
                },
              }}
            >
              <Image
                rounded={"lg"}
                height={230}
                width={282}
                objectFit={"cover"}
                src={Tindog}
                alt="#"
              />
            </Box>
            <Stack pt={10} align={"center"}>
              <Text
                color={"gray.500"}
                fontSize={"sm"}
                textTransform={"uppercase"}
              >
              Tindog
              </Text>
              <Text fontSize={"1rem"}  textAlign={"left"} fontFamily={"body"} fontWeight={500}>
                Tindog is a website which releated Dog using Html,Css,Bootstrap.eith Dynamic Design and very responsive.
              </Text>
              <Stack direction={"row"} align={"center"}>
                <Text fontWeight={500} width="50%" fontSize={"1rem"}>
                  Tech Stack :
                </Text>
                <Text fontSize={"0.8rem"} color={"gray.600"}>
                  HTML | CSS | Bootstrap
                </Text>
              </Stack>
              <Stack direction={"row"} align={"center"}>
                <Button
                  as="a"
                  href="https://tindog-websites.netlify.app/"
                  target="_blank"
                  _hover={{ cursor: "pointer", backgroundColor: "#fcc700" }}
                  backgroundColor="#fbb400"
                  color="black"
                  fontWeight={500}
                  width="50%"
                  fontSize="1rem"
                >
                  Live
                </Button>

                <Button
                  as="a"
                  href="https://github.com/krishnabagavan/Tindog_webpage"
                  target="_blank"
                  _hover={{ cursor: "pointer", backgroundColor: "#fcc700" }}
                  backgroundColor="#fbb400"
                  color="black"
                  fontWeight={500}
                  width="50%"
                  fontSize="1rem"
                >
                  Github
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Center>
      </div>
    </>
  );
}

export default Project;
