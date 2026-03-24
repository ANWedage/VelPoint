import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "VelPoint Cyber Solutions - Global Cybersecurity Conference & Summit",
  description: "VelPoint Cyber Solutions",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <head>
        <meta content="text/html;charset=utf-8" httpEquiv="Content-Type" />
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />
        <link href="/css/bootstrap.min.css" rel="stylesheet" type="text/css" />
        <link href="/css/vendors.css" rel="stylesheet" type="text/css" />
        <link href="/css/style.css" rel="stylesheet" type="text/css" />
        <link href="/css/colors/scheme-01.css" rel="stylesheet" type="text/css" />
      </head>
      <body className="dark-scheme">{children}</body>
    </html>
  );
}
