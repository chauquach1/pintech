import localFont from '@next/font/local';
import "./globals.css";

const clashDisplay = localFont({
  src: './fonts/ClashDisplay-Variable.ttf',
  display: 'swap',
})



export const metadata = {
  title: "Pintech",
  description: "Generated by create next app",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={clashDisplay.className}
      >
        {children}
      </body>
    </html>
  );
}
