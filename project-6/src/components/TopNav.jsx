import React from "react";
import {
  Box,
  Container,
  Flex,
  Heading,
  HStack,
  Icon,
  Stack,
  Text,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
} from "@chakra-ui/react";
const TopNav = () => {
  return (
    <Flex boxShadow="xl">
      <Container>
        <Heading>Dashboard</Heading>
        <Menu>
          <MenuButton as="button">Actions</MenuButton>
          <MenuList>
            <MenuItem>Download</MenuItem>
            <MenuItem>Create a Copy</MenuItem>
            <MenuItem>Mark as Draft</MenuItem>
            <MenuItem>Delete</MenuItem>
            <MenuItem>Attend a Workshop</MenuItem>
          </MenuList>
        </Menu>
      </Container>
    </Flex>
  );
};

export default TopNav;
