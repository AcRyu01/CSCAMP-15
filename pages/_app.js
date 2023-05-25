// import localFont from "@next/font/local";
// const localFont = require("@next/font/local");
import Layout from "@/components/Layout/Layout";
import "@/styles/globals.css";

// const sukhumvitSet = localFont({
//   src: [
//     {
//       path: "../assets/fonts/SukhumvitSet-Thin.ttf",
//       weight: "100",
//     },
//     {
//       path: "../assets/fonts/SukhumvitSet-Light.ttf",
//       weight: "300",
//     },
//     {
//       path: "../assets/fonts/SukhumvitSet-Text.ttf",
//       weight: "400",
//     },
//     {
//       path: "../assets/fonts/SukhumvitSet-Medium.ttf",
//       weight: "500",
//     },
//     {
//       path: "../assets/fonts/SukhumvitSet-SemiBold.ttf",
//       weight: "600",
//     },
//     {
//       path: "../assets/fonts/SukhumvitSet-Bold.ttf",
//       weight: "700",
//     },
//   ],
//   variable: "--font-sukhumvitSet",
// });

export default function App({ Component, pageProps }) {
  return (
    <>
      {/* <main className={`${sukhumvitSet.variable} font-primary`}> */}
      <main className={`font-primary`}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </main>
      {/* <style jsx global>
        {`
          :root {
            --font-sukhumvitSet: ${sukhumvitSet.variable};
          }
        `}
      </style> */}
    </>
  );
}
