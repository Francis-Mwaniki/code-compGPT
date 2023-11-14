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
    <div className="max-w-6xl  mx-auto m-4" suppressHydrationWarning>
      {/* Header */}
      <div className="bg-slate-900 flex justify-between items-center text-slate-50 px-8 py-5 rounded-lg mb-6">
        {/* Left */}
        <div className="flex items-center space-x-3">
          <p className="bg-purple-600 px-4 py-2 rounded-md text-xl uppercase">
            Free
          </p>
          <p className="text-xl">Card with form inputs</p>
        </div>
        {/* right */}
        <div className="flex items-center space-x-3">
          <button
            onClick={() => setCurrentDisplay("preview")}
            className={
              currentDisplay === "preview"
                ? "bg-purple-600 px-4 py-2 flex items-center space-x-2 rounded-sm"
                : "px-4 py-2 flex items-center space-x-2 bg-slate-700 rounded-sm "
            }
          >
            <Eye className="w-5 h-5" />
            <span>Preview</span>
          </button>
          <button
            onClick={() => setCurrentDisplay("html")}
            className={
              currentDisplay === "html"
                ? "bg-purple-600 px-4 py-2 flex items-center space-x-2 rounded-sm"
                : "px-4 py-2 flex items-center space-x-2 bg-slate-700 rounded-sm "
            }
          >
            <Code className="w-5 h-5" />
            <span>HTML</span>
          </button>
          <button
            onClick={() => setCurrentDisplay("react")}
            className={
              currentDisplay === "react"
                ? "bg-purple-600 px-4 py-2 flex items-center space-x-2 rounded-sm"
                : "px-4 py-2 flex items-center space-x-2 bg-slate-700 rounded-sm "
            }
          >
            <Code className="w-5 h-5" />
            <span>REACT</span>
          </button>
          <button
            onClick={() => setCurrentDisplay("vue")}
            className={
              currentDisplay === "vue"
                ? "bg-purple-600 px-4 py-2 flex items-center space-x-2 rounded-sm"
                : "px-4 py-2 flex items-center space-x-2 bg-slate-700 rounded-sm "
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
              <button className="px-4 py-2 flex items-center space-x-2 bg-slate-700 rounded-sm ">
                <Copy className="w-5 h-5" />
              </button>
            </CopyToClipboard>
          )}
        </div>
      </div>
      {/* code block */}
      <div className="rounded-lg px-8 py-5 bg-slate-900 text-slate-50 flex items-center justify-center">
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
  );
}