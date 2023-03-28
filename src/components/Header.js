import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import "./Header.css";
import {
  faFacebook,
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack } from "@chakra-ui/react";

const socials = [
  {
    icon: faEnvelope,
    url: "mailto: tshepisophetoane@yahoo.com",
  },
  {
    icon: faGithub,
    url: "https://github.com/Gandalf-hash",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com/in/tshepiso-johannes-a19353204/",
  },
  {
    icon: faFacebook,
    url: "https://www.facebook.com/Tshepiso.phiri99/",
  },
  {
    icon: faStackOverflow,
    url: "https://stackoverflow.com/users/16245145/johannes",
  },
];

const Header = () => {
  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      translateY={0}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#18181b"
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <nav className="Socials">
          <a href="tshepisophetoane@yahoo.com" target="_blank" className="Email">
          <FontAwesomeIcon icon={faEnvelope} size="2x"/>
          </a>
          <a href="https://github.com/Gandalf-hash" target="_blank" className="Github">
          <FontAwesomeIcon icon={faGithub} size="2x"/>
          </a>
          <a href="https://www.linkedin.com/in/tshepiso-johannes-a19353204" target="_blank" className="LinkedIn">
          <FontAwesomeIcon icon={faLinkedin} size="2x"/>
          </a>
          <a href="https://www.facebook.com/Tshepiso.phiri99/" target="_blank" className="FaceBook">
          <FontAwesomeIcon icon={faFacebook} size="2x"/>
          </a>
          <a href="" target="_blank" className="StackOverFlow">
          <FontAwesomeIcon icon={faStackOverflow} size="2x"/>
          </a>
          </nav >
          
          <nav>
            <HStack spacing={8}>
              {/* Add links to Projects and Contact me section */}
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};
export default Header;
