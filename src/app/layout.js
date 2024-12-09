import "./globals.css";
export const metadata = {
  title: "WeFrameTech",
  description: "Created by WeFrameTech",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className="w-full h-full"
      >
        {children}
      </body>
    </html>
  );
}
