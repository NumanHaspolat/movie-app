import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import SlideshowIcon from "@mui/icons-material/Slideshow";
import MenuItem from "@mui/material/MenuItem";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const pages = ["Favorites"];
// const settings = ["Login", "Register", "Logout"];

function Navbar() {
  const navgate = useNavigate();
  const { currentUser, logOut } = React.useContext(AuthContext);
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const getAvatar = () => {
    const userAvatar = currentUser?.photoURL;

    // If the user has a photo, use it; otherwise, provide a random image
    return userAvatar || getRandomAvatar();
  };

  const getRandomAvatar = () => {
    const randomAvatarNumber = Math.floor(Math.random() * 5) + 1;
    return `/static/images/firebase-avatar${randomAvatarNumber}.jpg`;
  };

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  // const avatarSrc = getAvatar();

  return (
    <AppBar
      position="static"
      sx={{
        background: "#124E73",
        marginBottom: 3,
        borderRadius: 1.5,
        position: "static",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <SlideshowIcon
            fontSize="large"
            sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
          />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
              marginLeft: "1rem",
            }}
          >
            Movie App
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem
                  key={page}
                  onClick={() => {
                    if (page === "Favorites") {
                      navgate("/favorites");
                    } else if (page === "Contact") {
                      navgate("/contact");
                    }
                    handleCloseNavMenu();
                  }}
                >
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <SlideshowIcon
            fontSize="large"
            sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}
          />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
              marginLeft: "1rem",
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
            }}
          >
            Movie App
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={() => {
                  if (page === "Favorites") {
                    navgate("/favorites");
                  } else if (page === "Contact") {
                    navgate("/contact");
                  }
                  handleCloseNavMenu();
                }}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box>
            {currentUser ? (
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Typography
                    className="dName"
                    variant="body2"
                    color="textSecondary"
                    sx={{ marginRight: 2, color: "white" }}
                  >
                    {currentUser &&
                      currentUser.displayName &&
                      currentUser.displayName.split(" ")[0]}
                    {/* Use currentUser.displayName instead of userDisplayName */}
                  </Typography>
                  {/* Kullanıcının avatarını veya rastgele Firebase avatarını koy */}
                  <Avatar alt="Remy Sharp" src={getAvatar()} />
                </IconButton>
              </Tooltip>
            ) : (
              <React.Fragment>
                <Button
                  onClick={() => {
                    navgate("/login");
                    handleCloseUserMenu();
                  }}
                  sx={{ color: "white" }}
                >
                  Login
                </Button>
                <Button
                  onClick={() => {
                    navgate("/register");
                    handleCloseUserMenu();
                  }}
                  sx={{ color: "white" }}
                >
                  Register
                </Button>
              </React.Fragment>
            )}

            {currentUser && (
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                <MenuItem
                  key="Logout"
                  onClick={() => {
                    handleCloseUserMenu();
                    logOut();
                  }}
                >
                  <Typography textAlign="center">Logout</Typography>
                </MenuItem>
              </Menu>
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
