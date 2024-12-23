import { useMediaQuery, Box, Drawer, Typography, Button } from "@mui/material";
import SidebarItems from "./SidebarItems";
import { Sidebar } from 'react-mui-sidebar';
import Image from 'next/image';
import { Download } from "@mui/icons-material";
import InstallAppButton from "./InstallAppButton";


interface ItemType {
  isMobileSidebarOpen: boolean;
  onSidebarClose: (event: React.MouseEvent<HTMLElement>) => void;
  isSidebarOpen: boolean;
}

const MSidebar = ({
  isMobileSidebarOpen,
  onSidebarClose,
  isSidebarOpen,
}: ItemType) => {
  const lgUp = useMediaQuery((theme: any) => theme.breakpoints.up("lg"));

  const sidebarWidth = "270px";

  // Custom CSS for short scrollbar
  const scrollbarStyles = {
    '&::-webkit-scrollbar': {
      width: '7px',

    },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: '#eff2f7',
      borderRadius: '15px',
    },
  };


  if (lgUp) {
    return (
      <Box
        sx={{
          width: sidebarWidth,
          flexShrink: 0,
        }}
      >
        {/* ------------------------------------------- */}
        {/* Sidebar for desktop */}
        {/* ------------------------------------------- */}
        <Drawer
          anchor="left"
          open={isSidebarOpen}
          variant="permanent"
          PaperProps={{
            sx: {
              boxSizing: "border-box",
              ...scrollbarStyles,
            },
          }}
        >
          {/* ------------------------------------------- */}
          {/* Sidebar Box */}
          {/* ------------------------------------------- */}
          <Box
            sx={{
              height: "100%",
            }}
          >
            <Sidebar
              width={'270px'}
              collapsewidth="80px"
              open={isSidebarOpen}
              themeColor="#5d87ff"
              themeSecondaryColor="#49beff"
              showProfile={false}
            >
              {/* ------------------------------------------- */}
              {/* Logo */}
              {/* ------------------------------------------- */}
              <Box sx={{ width: 200, height: '110px', marginTop: '-40px', justifyContent: 'center', }}>
                <Image 
                  src="/images/logos/my-abseni.png" 
                  alt="My Absensi" 
                  layout="responsive" 
                  width={100}
                  height={100}
                />
              </Box>
              <Box>
                {/* ------------------------------------------- */}
                {/* Sidebar Items */}
                {/* ------------------------------------------- */}
                <SidebarItems />
                {/* <Upgrade /> */}
                <Box sx={{ mt: 5 }}> {/* Adjust '5' to your desired margin */}
                  <InstallAppButton onClick={() => console.log("Install App clicked")} />
                </Box>
              </Box>
            </Sidebar >
          </Box>
        </Drawer>
      </Box>
    );
  }

  return (
    <Drawer
      anchor="left"
      open={isMobileSidebarOpen}
      onClose={onSidebarClose}
      variant="temporary"
      PaperProps={{
        sx: {
          boxShadow: (theme) => theme.shadows[8],
          ...scrollbarStyles,
        },
      }}
    >
      {/* ------------------------------------------- */}
      {/* Sidebar Box */}
      {/* ------------------------------------------- */}
      <Box px={2}>
        <Sidebar
          width={'270px'}
          collapsewidth="80px"
          isCollapse={false}
          mode="light"
          direction="ltr"
          themeColor="#5d87ff"
          themeSecondaryColor="#49beff"
          showProfile={false}
        >
          {/* ------------------------------------------- */}
          {/* Logo */}
          {/* ------------------------------------------- */}
          {/* <Logo img="/images/logos/dark-logo.svg" /> */}
          {/* ------------------------------------------- */}
          {/* Sidebar Items */}
          {/* ------------------------------------------- */}
          <SidebarItems />
          {/* <Upgrade /> */}
          <Box sx={{ mt: 5 }}> {/* Adjust '5' to your desired margin */}
            <InstallAppButton onClick={() => console.log("Install App clicked")} />
          </Box>
        </Sidebar>
      </Box>
      {/* ------------------------------------------- */}
      {/* Sidebar For Mobile */}
      {/* ------------------------------------------- */}

    </Drawer>
  );

};

export default MSidebar;





