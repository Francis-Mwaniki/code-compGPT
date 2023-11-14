"use client";
import { Code, Copy, Eye } from "lucide-react";
import { useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import {ReactCode} from "./components/code/react";
import {HtmlCode} from "./components/code/html";
import {VueCode} from "./components/code/vue"
import ReactPreviewCode from "./components/code/ReactPreviewCode";
import {
  docco,
  dracula,
  atomOneDark,
} from "react-syntax-highlighter/dist/esm/styles/hljs";
import { CopyToClipboard } from "react-copy-to-clipboard";
import toast from "react-hot-toast";
export default function Home() {
  const [currentDisplay, setCurrentDisplay] = useState("preview");
  const reactCode = ReactCode;
  const htmlCode = HtmlCode;
  const vueCode = VueCode
  return (
    <>
    <h2 className="bg-gradient-to-b from-yellow-800 via-neutral-100 to-pink-600 bg-clip-text text-transparent tracking-tight uppercase font-extrabold text-center my-11 sm:text-5xl text-3xl">Code Comp GPT Helper</h2>
    <div className="sm:max-w-6xl max-w-full  mx-auto m-4" suppressHydrationWarning>
      <div className=" overflow-hidden w-full">
      <div className=" overflow-x-auto sm:max-w-6xl max-w-full">
      {/* Header */}
      <div className=" flex justify-between   items-center text-slate-50 px-11 py-5 rounded-lg mb-6 mx-3 ">
        {/* Left */}
        <div className="flex items-center space-x-3 justify-center gap-1">
          <button className="bg-pink-600 px-4 py-2 flex items-center space-x-2 rounded-sm m-1">
            Free
          </button>
          
        </div>
        {/* right */}
        <div className="flex items-center space-x-3">
          <button
            onClick={() => setCurrentDisplay("preview")}
            className={
              currentDisplay === "preview"
                ? "bg-pink-600 px-4 py-2 flex items-center space-x-2 rounded-sm"
                : "px-4 py-2 flex items-center space-x-2 bg-pink-900 rounded-sm "
            }
          >
            <Eye className="w-5 h-5" />
            <span>Preview</span>
          </button>
          <button
            onClick={() => setCurrentDisplay("html")}
            className={
              currentDisplay === "html"
                ? "bg-pink-600 px-4 py-2 flex items-center space-x-2 rounded-sm"
                : "px-4 py-2 flex items-center space-x-2 bg-pink-900 rounded-sm "
            }
          >
            <Code className="w-5 h-5" />
            <span>HTML</span>
          </button>
          <button
            onClick={() => setCurrentDisplay("react")}
            className={
              currentDisplay === "react"
                ? "bg-pink-600 px-4 py-2 flex items-center space-x-2 rounded-sm"
                : "px-4 py-2 flex items-center space-x-2 bg-pink-900 rounded-sm "
            }
          >
            <Code className="w-5 h-5" />
            <span>REACT</span>
          </button>
          <button
            onClick={() => setCurrentDisplay("vue")}
            className={
              currentDisplay === "vue"
                ? "bg-pink-600 px-4 py-2 flex items-center space-x-2 rounded-sm"
                : "px-4 py-2 flex items-center space-x-2 bg-pink-900 rounded-sm "
            }
          >
            <Code className="w-5 h-5" />
            <span>VUE</span>
          </button>
          {(currentDisplay == "html" || currentDisplay == "react" || currentDisplay == "vue") && (
            <CopyToClipboard
              text={currentDisplay === "html" ? htmlCode : reactCode}
              onCopy={() => toast.success("Copied to clipboard")}
            >
              <button className="px-4 py-2 flex items-center space-x-2 bg-pink-900 rounded-sm ">
                <Copy className="w-5 h-5" />
              </button>
            </CopyToClipboard>
          )}
        </div>
      </div>
    </div>
      {/* code block */}
      <div className="rounded-lg space-x-3 px-8 py-5 bg-gradient-to-r from-gray-700 via-gray-900 to-black text-slate-50 flex items-center justify-center">
        {currentDisplay === "preview" ? (
         <ReactPreviewCode />
        ) : currentDisplay === "react" ? (
          <SyntaxHighlighter
            language="jsx"
            style={atomOneDark}
            customStyle={{ background: "transparent", flex: 1 }}
            showLineNumbers
            wrapLines
          >
            {reactCode}
          </SyntaxHighlighter>
        ) :
        currentDisplay === "vue" ? (
          <SyntaxHighlighter
            language="vue"
            style={atomOneDark}
            customStyle={{ background: "transparent", flex: 1 }}
            showLineNumbers
            wrapLines
          >
            {vueCode}
          </SyntaxHighlighter>
        ) :
         (
          <SyntaxHighlighter
            language="html"
            style={atomOneDark}
            customStyle={{ background: "transparent", flex: 1 }}
            showLineNumbers
            wrapLines
          >
            {htmlCode}
          </SyntaxHighlighter>
        )}
      </div>
    </div>
    </div>
    </>
    
  );
}