import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {App} from "./App";
import {createGlobalStyle} from "styled-components";

const Global = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    html, body {
        height: 100%;
        color: #586a8a;
        background-color: #f4f5f9;
        font-family: Arial, Helvetica, sans-serif;
    }
    #root {
        display: flex;
        flex-direction: column;
        min-height: 100%;
    }

    p {
        padding: 0;
        margin: 0;
    }
`

const root = createRoot(document.getElementById('root')  as Element);
root.render(
	<StrictMode>
        <Global/>
		<App />
	</StrictMode>
);