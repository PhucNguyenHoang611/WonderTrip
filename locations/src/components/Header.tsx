import * as React from "react";
import { CssBaseline, Slide, useScrollTrigger } from "@mui/material";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Toolbar from "@mui/material/Toolbar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import InputBase from "@mui/material/InputBase";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";

interface Props {
  window?: () => Window;
  children: React.ReactElement;
}

const HideOnScroll = (props: Props) => {
  const { window, children } = props;

  const trigger = useScrollTrigger({
    target: window ? window() : undefined
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
};

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25)
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto"
  }
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  fontFamily: "Poppins",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch"
      }
    }
  }
}));

const pages = ["Home", "About", "Discovery", "Story", "Contact"];

const Header = (props: Props) => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <header>
      <React.Fragment>
        <CssBaseline />
        <HideOnScroll {...props}>
          {/* To enable HideOnScroll, remove position="static" from the AppBar */}
          <AppBar className="bg-primary-1">
            <Container maxWidth="xl">
              <Toolbar disableGutters>
                <a href="/" className="w-24 p-2 mr-2 hidden lg:flex">
                  <img alt="mainLogo" src="/MainLogo.png" />
                </a>

                {/* Small Screen */}
                <Box className="flex lg:hidden grow">
                  <IconButton
                    size="large"
                    aria-controls="menu-appBar"
                    aria-haspopup="true"
                    onClick={handleOpenNavMenu}
                    color="inherit"
                  >
                    <MenuIcon />
                  </IconButton>
                  <Menu
                    id="menu-appBar"
                    className="block lg:hidden"
                    anchorEl={anchorElNav}
                    anchorOrigin={{
                      vertical: "bottom",
                      horizontal: "left"
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "left"
                    }}
                    open={Boolean(anchorElNav)}
                    onClose={handleCloseNavMenu}
                  >
                    {pages.map((page) => (
                      <MenuItem key={page} onClick={handleCloseNavMenu}>
                        <Typography textAlign="center" className="font-poppins">{page}</Typography>
                      </MenuItem>
                    ))}
                    <MenuItem key="Sign In" onClick={handleCloseNavMenu}>
                      <Typography textAlign="center" className="font-poppins">Sign In</Typography>
                    </MenuItem>
                    <MenuItem key="Sign Up" onClick={handleCloseNavMenu}>
                      <Typography textAlign="center" className="font-poppins">Sign Up</Typography>
                    </MenuItem>
                  </Menu>
                </Box>
                
                <Box className="hidden lg:flex grow justify-center items-center">
                  {pages.map((page) => (
                    <Button
                      key={page}
                      onClick={handleCloseNavMenu}
                      className="mx-2 block font-poppins text-white normal-case"
                    >
                      {page}
                    </Button>
                  ))}
                </Box>

                <Search>
                  <SearchIconWrapper>
                    <SearchIcon />
                  </SearchIconWrapper>
                  <StyledInputBase
                    placeholder="Search…"
                    inputProps={{ "aria-label": "search" }} />
                </Search>

                <Box className="hidden lg:flex">
                  <Button className="text-white font-poppins font-semibold mx-4 px-4 py-2 rounded-2xl border-solid border-2 border-white hover:bg-white hover:text-primary-1">
                    Register
                  </Button>
                  <Button className="font-poppins text-primary-1 font-semibold px-4 py-2 bg-white rounded-2xl hover:text-white">
                    Login
                  </Button>
                </Box>
              </Toolbar>
            </Container>
          </AppBar>
        </HideOnScroll>
      </React.Fragment>
    </header>
  );
};

export default Header;

//---------------------------Start Elevation Scroll AppBar---------------------------
// const ElevationScroll = (props: Props) => {
//   const { window, children } = props;

//   const trigger = useScrollTrigger({
//     disableHysteresis: true,
//     threshold: 0,
//     target: window ? window() : undefined
//   });

//   return React.cloneElement(children, {
//     elevation: trigger? 4 : 0
//   });
// };
//---------------------------End Elevation Scroll AppBar---------------------------

//---------------------------Start Scroll to Top button---------------------------
// const ScrollTop = (props: Props) => {
//   const { window, children } = props;

//   const trigger = useScrollTrigger({
//     target: window ? window() : undefined,
//     disableHysteresis: true,
//     threshold: 100
//   });

//   const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
//     const anchor = (
//       (event.target as HTMLDivElement).ownerDocument || document
//     ).querySelector("#back-to-top-anchor");

//     if (anchor) {
//       anchor.scrollIntoView({
//         behavior: "smooth",
//         block: "center"
//       });
//     }
//   };

//   return (
//     <Fade in={trigger}>
//       <Box
//         onClick={handleClick}
//         role="presentation"
//         sx={{ position: "fixed", bottom: 16, right: 16 }}
//       >
//         {children}
//       </Box>
//     </Fade>
//   );
// };
//---------------------------End Scroll to Top button---------------------------

//---------------------------Start User's Avatar & Settings Menu---------------------------
// import Avatar from "@mui/material/Avatar";
// import Tooltip from "@mui/material/Tooltip";

// const settings = ["Profile", "Account", "Dashboard", "Logout"];
// const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

// const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
//   setAnchorElUser(event.currentTarget);
// };

// const handleCloseUserMenu = () => {
//   setAnchorElUser(null);
// };

// <Box sx={{ flexGrow: 0 }}>
//   <Tooltip title="Open settings">
//     <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
//       <Avatar alt="userAvatar" src={""} />
//     </IconButton>
//   </Tooltip>
//   <Menu
//     sx={{ mt: "45px" }}
//     id="menu-appBar"
//     anchorEl={anchorElUser}
//     anchorOrigin={{
//       vertical: "top",
//       horizontal: "right",
//     }}
//     keepMounted
//     transformOrigin={{
//       vertical: "top",
//       horizontal: "right",
//     }}
//     open={Boolean(anchorElUser)}
//     onClose={handleCloseUserMenu}>
//     {settings.map((setting) => (
//       <MenuItem key={setting} onClick={handleCloseUserMenu}>
//         <Typography textAlign="center">{setting}</Typography>
//       </MenuItem>
//     ))}
//   </Menu>
// </Box>
//---------------------------End User's Avatar & Settings Menu---------------------------