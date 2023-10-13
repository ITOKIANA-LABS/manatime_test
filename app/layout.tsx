import * as React from 'react';

import Box from '@mui/material/Box';

import ThemeRegistry from './components/ThemeRegistry/ThemeRegistry';
import Sidebar from './components/Sidebar/Sidebar';
import Navbar from './components/Navbar/Navbar';

export const metadata = {
  title: 'Next.js App Router + Material UI v5',
  description: 'Next.js App Router + Material UI v5',
};

const DRAWER_WIDTH = 200;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ThemeRegistry>
          <Navbar />
          <Sidebar />
          <Box
            component="main"
            sx={{
              flexGrow: 1,
              bgcolor: '#E3E3E3',
              ml: `${DRAWER_WIDTH}px`,
              mt: ['48px', '56px', '64px'],
              p: 3,
            }}
          >
            {children}
          </Box>
        </ThemeRegistry>
      </body>
    </html>
  );
}