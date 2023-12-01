import { HStack, Icon, List, ListItem, Text } from "@chakra-ui/react";
import { CiHome, CiVideoOn } from "react-icons/ci";
import { RiFireLine } from "react-icons/ri";
import { IoCode } from "react-icons/io5";
import { IconType } from "react-icons";
import {
  FaInstagram,
  FaSquareFacebook,
  FaTwitter,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa6";

const SideBar = () => {
  const list = ["Home", "Trending", "Snippets", "Videos"];
  const socials = [
    {
      name: "Instagram",
      link: "https://instagram.com/musa_nif_ali?igshid=MzMyNGUyNmU2YQ==",
    },
    {
      name: "Twitter",
      link: "https://x.com/Musanif12935231?t=GGzuaGtnePYdv-gKO7aoNg&s=08",
    },
    {
      name: "Facebook",
      link: "https://www.facebook.com/musanif.ali.779?mibextid=ZbWKwL",
    },
    { name: "Github", link: "https://github.com/musanifali" },
    {
      name: "Linkedin",
      link: "https://www.linkedin.com/in/musanif-ali-350221270/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
  ];
  const IconMap: { [key: string]: IconType } = {
    Home: CiHome,
    Trending: RiFireLine,
    Snippets: IoCode,
    Videos: CiVideoOn,
    Instagram: FaInstagram,
    Twitter: FaTwitter,
    Facebook: FaSquareFacebook,
    Github: FaGithub,
    Linkedin: FaLinkedin,
  };
  const iconColors: { [key: string]: string } = {
    Home: "red",
    Trending: "orange",
    Snippets: "blue",
    Videos: "green",
    Instagram: "red.500",
    Twitter: "blue.300",
    Facebook: "blue.500",
    Github: "purple",
    Linkedin: "teal",
  };
  return (
    <List>
      {list.map((item) => (
        <ListItem key={item} padding={5}>
          <HStack>
            <Icon as={IconMap[item]} color={iconColors[item]} />
            <Text>{item}</Text>
          </HStack>
        </ListItem>
      ))}
      <Text fontSize={"large"}>Socials</Text>
      {socials.map((social) => (
        <ListItem key={social.name} padding={5}>
          <HStack>
            <a href={social.link} target="blank">
              <HStack>
                <Icon
                  as={IconMap[social.name]}
                  color={iconColors[social.name]}
                />
                <Text>{social.name}</Text>
              </HStack>
            </a>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default SideBar;
