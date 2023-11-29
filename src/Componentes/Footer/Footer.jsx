import React from "react";
import { Box, Flex } from "@chakra-ui/react";
import {
  AiOutlineFacebook,
  AiOutlineInstagram,
  AiOutlineLinkedin,
  AiOutlineGithub,
} from "react-icons/ai";
import "../Footer/Footer.css";

export default function Footer() {
  return (
    <Flex className="nav" h="50px">
      <Box flex="1">
        <div className="redes">
          <a
            href="https://www.facebook.com/florenciagalindezcasas"
            target="blank"
          >
            <AiOutlineFacebook />
          </a>
          <a
            href="https://www.instagram.com/florenciagalindezcasas/"
            target="blank"
          >
            <AiOutlineInstagram />
          </a>
          <a
            href="https://www.linkedin.com/in/florenciagalindezcasas/"
            target="blank"
          >
            <AiOutlineLinkedin />
          </a>
          <a href="https://github.com/FlorenciaGalindezCasas" target="blank">
            <AiOutlineGithub />
          </a>
        </div>
      </Box>
    </Flex>
  );
}
