import styled from "styled-components"
import { Avatar, IconButton, Button } from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ChatIcon from "@material-ui/icons/Chat"
import SearchIcon from "@material-ui/icons/Search"

function Sidebar() {
  return (
    <Container>
      <Header>
      <UserAvatar />

      <IconsContainer>
        <IconButton>
        <ChatIcon/>
        </IconButton>
        <IconButton>
        <MoreVertIcon />
        </IconButton>
 
      </IconsContainer>
      </Header>

      <Search>
        <SearchIcon />
        <SearchInput placeholder="Search in chats"/>
      </Search>

      <SidebarButton>Start a new chat</SidebarButton>

      {/* List of chats */}
    </Container>
  )
}

export default Sidebar

const Container = styled.div`

`
const Header = styled.div`
display: flex;
position: sticky;
top:0;
background-color: #fff;
z-index: 100;
justify-content: space-between;
align-items: center;
padding: 15px;
height: 80px;
border-bottom: 1px solid whitesmoke;
`

const UserAvatar = styled(Avatar)`
cursor: pointer;

:hover{
  opacity: 0.8;
}
`
const IconsContainer = styled.div`

`
const Search = styled.div`
 display: flex;
 padding: 20px;
 border-radius: 2px;
 align-items: center;
`
const SearchInput = styled.input`
outline-width: 0;
border: none;
flex: 1;
`

const SidebarButton = styled(Button)`
width: 100%;

&&&{
border-top: 1px solid whitesmoke; 
border-bottom: 1px solid whitesmoke;
}
`