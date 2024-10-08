import "./globals.css";
import localFont from '@next/font/local';
import MainNav from "./components/layout/MainNav";

const clashDisplay = localFont({
  src: './fonts/ClashDisplay-Variable.ttf',
  display: 'swap',
})

const fussion = localFont({
  src: './fonts/Fussion.ttf',
  display: 'swap',
})


export const metadata = {
  title: "PinTech",
  description: "Generated by create next app",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={clashDisplay.className}
      >
        <MainNav />
        {children}
      </body>
    </html>
  );
}
