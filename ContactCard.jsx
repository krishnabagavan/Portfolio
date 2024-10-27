import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
  Stack,
  Textarea,
  Tooltip,
  useClipboard,
  useColorModeValue,
  VStack,
  useToast,
} from "@chakra-ui/react";
import { BsGithub, BsLinkedin, BsPerson, BsPhone } from "react-icons/bs";
import { MdEmail, MdOutlineEmail } from "react-icons/md";
import emailjs from "emailjs-com";
import { useRef, useState } from "react";

export default function ContactCard() {
  const form = useRef();
  const toast = useToast();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_v88ocap",
        "template_xke35vg",
        form.current,
        "8jNhjSEZV4fk9fU6c"
      )
      .then(
        (result) => {
          toast({
            title: "Email sent",
            description: "Email sent succeefully!",
            status: "success",
            duration: 4000,
            isClosable: true,
          });
          e.target.reset();
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  const { hasCopied: hasCopiedEmail, onCopy: onCopyEmail } =
    useClipboard("krishnabagavan1999@gmail.com");
  const { hasCopied: hasCopiedNum, onCopy: onCopyNum } =
    useClipboard("9550424683");

  return (
    <Flex
      align="center"
      justify="center"
      css={{
        backgroundAttachment: "fixed",
      }}
      id="contact"
    >
      <Box
        borderRadius="lg"
        m={{ base: 5, md: 16, lg: 10 }}
        p={{ base: 5, lg: 16 }}
      >
        <Box>
          <VStack spacing={{ base: 4, md: 8, lg: 20 }}>
            <Heading
              color={"#fbb400"}
              fontSize={{
                base: "4xl",
                md: "5xl",
              }}
              _hover={{
                textShadow: "2px 2px 8px white",
              }}
            >
              Get in Touch
            </Heading>

            <Stack
              spacing={{ base: 4, md: 8, lg: 20 }}
              direction={{ base: "column", md: "row" }}
            >
              <Stack
                align="center"
                justify="space-around"
                direction={{ base: "row", md: "column" }}
              >
                <Tooltip
                  label={hasCopiedEmail ? "Email Copied!" : "Copy Email"}
                  closeOnClick={false}
                  hasArrow
                >
                  <IconButton
                    aria-label="email"
                    // variant="ghost"
                    size="lg"
                    fontSize="3xl"
                    icon={<MdEmail />}
                    _hover={{
                      bg: " #ffb400;",
                    }}
                    onClick={onCopyEmail}
                    isRound
                  />
                </Tooltip>

                <Box
                  as="a"
                  href="https://github.com/krishnabagavan"
                  target="_blank"
                >
                  <IconButton
                    aria-label="github"
                    // variant="ghost"
                    size="lg"
                    fontSize="3xl"
                    icon={<BsGithub />}
                    _hover={{
                      bg: " #ffb400;",
                    }}
                    isRound
                  />
                </Box>

                <Tooltip
                  label={hasCopiedNum ? "Number Copied!" : "Copy Number"}
                  closeOnClick={false}
                  hasArrow
                >
                  <IconButton
                    aria-label="number"
                    // variant="ghost"
                    size="lg"
                    fontSize="3xl"
                    icon={<BsPhone />}
                    _hover={{
                      bg: " #ffb400;",
                    }}
                    onClick={onCopyNum}
                    isRound
                  />
                </Tooltip>

                <Box
                  as="a"
                  href="https://www.linkedin.com/in/krishna-bagavan-270330258/"
                  target="_blank"
                >
                  <IconButton
                    aria-label="linkedin"
                    // variant="ghost"
                    size="lg"
                    icon={<BsLinkedin size="28px" />}
                    _hover={{
                      bg: " #ffb400;",
                    }}
                    isRound
                  />
                </Box>
              </Stack>

              <Box
                bg={useColorModeValue("white", "gray.700")}
                borderRadius="lg"
                p={8}
                color={useColorModeValue("gray.700", "whiteAlpha.900")}
                shadow="base"
              >
                <form
                  className="form"
                  ref={form}
                  onSubmit={sendEmail}
                  style={{
                    display: "flex",
                    gap: "1rem",
                    flexDirection: "column",
                  }}
                >
                  <Box display={"flex"} flexDirection={"column"}>
                    <label>Name*</label>
                    <input
                      style={{
                        border: "1px solid grey",
                        borderRadius: "6px",
                        padding: "3px",
                        outline: "none",
                      }}
                      placeholder="Your Name"
                      type="text"
                      name="userName"
                      required
                    />
                  </Box>
                  <Box display={"flex"} flexDirection={"column"}>
                    <label>Email*</label>
                    <input
                      style={{
                        border: "1px solid grey",
                        borderRadius: "6px",
                        padding: "3px",
                        outline: "none",
                      }}
                      placeholder="Your Email"
                      type="email"
                      name="userEmail"
                      required
                    />
                  </Box>
                  <Box display={"flex"} flexDirection={"column"}>
                    <label>Message*</label>
                    <textarea
                      style={{
                        border: "1px solid grey",
                        borderRadius: "6px",
                        padding: "3px",
                        outline: "none",
                        resize: "none",
                      }}
                      name="message"
                      required
                    />
                  </Box>
                  <input
                    style={{
                      width: "100%",
                      backgroundColor: "#fbb400",
                      cursor: "pointer",
                      borderRadius: "10px",
                      padding: "2px",
                      color: "white",
                    }}
                    className="submit"
                    type="submit"
                    value="Send"
                  />
                </form>
              </Box>
            </Stack>
          </VStack>
        </Box>
      </Box>
    </Flex>
  );
}
