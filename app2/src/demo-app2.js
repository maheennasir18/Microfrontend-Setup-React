import React from "react";
import ReactDOMClient from "react-dom/client";
import singleSpaReact from "single-spa-react";
import Root from "./root.component";

/**
 * Configures and initializes the Single-SPA lifecycle functions for the React microfrontend.
 */
const lifecycles = singleSpaReact({
  React,
  ReactDOMClient,
  rootComponent: Root,

  /**
   * Custom error boundary for handling errors in the microfrontend.
   *
   * @param {Error} err - The error that occurred.
   * @param {Object} info - Additional error info, such as component stack trace.
   * @param {Object} props - The props passed to the component.
   * @returns {React.ReactNode | null} The fallback UI or null.
   */
  errorBoundary(err, info, props) {
    return null; // Customize this to show an error message if needed
  },
});

/** 
 * Single-SPA lifecycle function to bootstrap the microfrontend.
 * @type {Function}
 */
export const { bootstrap, mount, unmount } = lifecycles;
