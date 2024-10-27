import { Avatar, Box, Flex, keyframes } from "@chakra-ui/react";
import adminImage from "../../assets/KrishnaImg.jpeg";

export default function AvatarImg() {
  const size = "300px";
  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      h="300px"
      w="full"
      overflow="hidden"
    >
      {/* Ideally, only the box should be used. The <Flex /> is used to style the preview. */}
      <Box
        as="div"
        position="relative"
        zIndex="-888"
        w={size}
        h={size}
       
      >
        <Avatar
          src={adminImage}
          size="auto"
          position="absolute"
          top={0}
          zIndex="-777"
        />
      </Box>
    </Flex>
  );
}
