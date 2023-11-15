"use client";
import { Code, Copy, Eye } from "lucide-react";
import { useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import {ReactCode} from "./components/code/react";
import {HtmlCode} from "./components/code/html";
import {VueCode} from "./components/code/vue"
import Image from "next/image";
import ReactPreviewCode from "./components/code/ReactPreviewCode";
import {
  docco,
  dracula,
  atomOneDark,
} from "react-syntax-highlighter/dist/esm/styles/hljs";
import { CopyToClipboard } from "react-copy-to-clipboard";
import toast from "react-hot-toast";
import Hero from "./components/Hero";
export default function Home() {
  const [currentDisplay, setCurrentDisplay] = useState("preview");
  const reactCode = ReactCode;
  const htmlCode = HtmlCode;
  const vueCode = VueCode

  const calculateHeight = () => {
    if (typeof window !== "undefined") {
      return window.innerHeight;
    }
  }

  const observablesDown = () => {
    if (typeof window !== "undefined") {
      return window.scrollY > 100;
    }
  }




  return (
    <div className="bg-transparent">
    <h2 className="bg-gradient-to-r from-blue-800 via-neutral-100 to-pink-600 bg-clip-text text-transparent tracking-tight uppercase font-extrabold text-center my-11 sm:text-5xl text-3xl">
       THE CODE  <span className="text-pink-600">PREVIEW™.</span> {/* append small tm  */} 
      
      
    </h2>
    <div className=" mx-4">
       <Hero />
    </div>
    
  
    <div className="sm:max-w-6xl max-w-full  mx-auto m-4" suppressHydrationWarning>
    <div className="relative bg-grid">
        <Image
          src="grid.svg"
          alt="background"
          width={1572}
          height={1572}
          className="absolute  top-20 -z-10 text-transparent"
          
        />
      </div>
      
      <div className=" overflow-hidden w-full">
      <div className=" overflow-x-auto sm:max-w-6xl max-w-full">
   
      {/* Header */}
     
      <div className=" flex justify-between   items-center text-slate-50 px-11 py-5 rounded-lg mb-6 mx-3 ">
        {/* Left */}
        <div className="flex items-center space-x-3 justify-center gap-1">
          {/* <button className="button-62 px-4 py-2 flex items-center space-x-2 rounded-lg m-1">
            Free
          </button>
           */}
        </div>
        {/* right */}
        <div className="flex items-center space-x-3">
          <button
            onClick={() => setCurrentDisplay("preview")}
            className={
              currentDisplay === "preview"
                ? "button-85 px-4 py-2 flex items-center space-x-2 rounded-lg"
                : "px-4 py-2 flex items-center space-x-2 button-62 rounded-lg "
            }
          >
            <Eye className="w-5 h-5" />
            <span>Preview</span>
          </button>
          <button
            onClick={() => setCurrentDisplay("html")}
            className={
              currentDisplay === "html"
                ? "button-85 px-4 py-2 flex items-center space-x-2 rounded-lg"
                : "px-4 py-2 flex items-center space-x-2 button-62 rounded-lg "
            }
          >
            <Code className="w-5 h-5" />
            <span>HTML</span>
          </button>
          <button
            onClick={() => setCurrentDisplay("react")}
            className={
              currentDisplay === "react"
                ? "button-85 px-4 py-2 flex items-center space-x-2 rounded-lg"
                : "px-4 py-2 flex items-center space-x-2 button-62 rounded-lg "
            }
          >
            <Code className="w-5 h-5" />
            <span>REACT</span>
          </button>
          <button
            onClick={() => setCurrentDisplay("vue")}
            className={
              currentDisplay === "vue"
                ? "button-85 px-4 py-2 flex items-center space-x-2 rounded-lg"
                : "px-4 py-2 flex items-center space-x-2 button-62 rounded-lg "
            }
          >
            <Code className="w-5 h-5" />
            <span>VUE</span>
          </button>
          {(currentDisplay == "html" || currentDisplay == "react" || currentDisplay == "vue") && (
            <CopyToClipboard
              text={currentDisplay === "html" ? htmlCode : currentDisplay === "react" ? reactCode : vueCode}
              onCopy={() => toast.success("Copied to clipboard")}
            >
              <button className="px-4 py-2 flex items-center space-x-2 button-62 rounded-lg ">
                <Copy className="w-5 h-5" />
              </button>
            </CopyToClipboard>
          )}
        </div>
      </div>
    </div>
      {/* code block */}
      <div className="rounded-lg space-x-3 px-8 py-5  bg-transparent text-slate-50 flex items-center justify-center">
        {currentDisplay === "preview" ? (
         <ReactPreviewCode />
        ) : currentDisplay === "react" ? (
          <SyntaxHighlighter
            language="jsx"
            style={atomOneDark}
            customStyle={{ background: "transparent", flex: 1 }}
            showLineNumbers
            wrapLines
            showInlineLineNumbers
            codeTagProps={
              {
                style: {
                  fontFamily: "monospace",
                  fontSize: "1rem",
                  lineHeight: "1.5",
                  whiteSpace: "pre-wrap",
                  wordBreak: "break-word",
                  overflowWrap: "break-word",
                },
              } as any
            }
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
            showInlineLineNumbers
            codeTagProps={
              {
                style: {
                  fontFamily: "monospace",
                  fontSize: "1rem",
                  lineHeight: "1.5",
                  whiteSpace: "pre-wrap",
                  wordBreak: "break-word",
                  overflowWrap: "break-word",
                },
              } as any
            }
            
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
            showInlineLineNumbers
            codeTagProps={
              {
                style: {
                  fontFamily: "monospace",
                  fontSize: "1rem",
                  lineHeight: "1.5",
                  whiteSpace: "pre-wrap",
                  wordBreak: "break-word",
                  overflowWrap: "break-word",
                },
              } as any
            }
          >
            {htmlCode}
          </SyntaxHighlighter>
        )}
      </div>
    </div>
    </div>
    </div>
    
  );
}