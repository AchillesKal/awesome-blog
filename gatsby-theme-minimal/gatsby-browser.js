/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it
import React from "react";
import GlobalContextProvider from "./src/context/GlobalContextProvider";
import "./src/styles/global.css";

// require("prism-themes/themes/prism-atom-dark.css");
// require("prismjs/plugins/line-numbers/prism-line-numbers.css");


export const wrapRootElement = ({ element }) => {
  return <GlobalContextProvider>{element}</GlobalContextProvider>
}