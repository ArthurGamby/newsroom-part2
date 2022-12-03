import { ThemeProvider } from "styled-components";
import { COLORS, FONTS } from "./theme";
import { Navbar } from "./components/Navbar";
import { WebsiteLogo } from "./components/WebsiteLogo";
import { Spotlight } from "./components/Spotlight";

function App() {
  return (
    <ThemeProvider theme={{ colors: COLORS, fonts: FONTS }}>
      <WebsiteLogo />
      <Navbar />
      <Spotlight />
    </ThemeProvider>
  );
}

export default App;
