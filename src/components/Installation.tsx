import { motion } from "framer-motion";
import React, { useRef } from "react";
import { IoClose } from "react-icons/io5";
import SyntaxHighlighter from "react-syntax-highlighter";
import useOnClickOutside from "../hooks/useOnClickOutside";

const a11yLight = {
  "hljs-comment": {
    "color": "#696969"
  },
  "hljs-quote": {
    "color": "#696969"
  },
  "hljs-variable": {
    "color": "#d91e18"
  },
  "hljs-template-variable": {
    "color": "#d91e18"
  },
  "hljs-tag": {
    "color": "#d91e18"
  },
  "hljs-name": {
    "color": "#d91e18"
  },
  "hljs-selector-id": {
    "color": "#d91e18"
  },
  "hljs-selector-class": {
    "color": "#d91e18"
  },
  "hljs-regexp": {
    "color": "#d91e18"
  },
  "hljs-deletion": {
    "color": "#d91e18"
  },
  "hljs-number": {
    "color": "#aa5d00"
  },
  "hljs-built_in": {
    "color": "#aa5d00"
  },
  "hljs-builtin-name": {
    "color": "#aa5d00"
  },
  "hljs-literal": {
    "color": "#aa5d00"
  },
  "hljs-type": {
    "color": "#aa5d00"
  },
  "hljs-params": {
    "color": "#aa5d00"
  },
  "hljs-meta": {
    "color": "#aa5d00"
  },
  "hljs-link": {
    "color": "#aa5d00"
  },
  "hljs-attribute": {
    "color": "#aa5d00"
  },
  "hljs-string": {
    "color": "#008000"
  },
  "hljs-symbol": {
    "color": "#008000"
  },
  "hljs-bullet": {
    "color": "#008000"
  },
  "hljs-addition": {
    "color": "#008000"
  },
  "hljs-title": {
    "color": "#007faa"
  },
  "hljs-section": {
    "color": "#007faa"
  },
  "hljs-keyword": {
    "color": "#7928a1"
  },
  "hljs-selector-tag": {
    "color": "#7928a1"
  },
  "hljs": {
    "display": "block",
    "overflowX": "auto",
    "background": "#fefefe",
    "color": "#545454",
    "padding": "0.5em"
  },
  "hljs-emphasis": {
    "fontStyle": "italic"
  },
  "hljs-strong": {
    "fontWeight": "bold"
  }
};

interface InstallationProps {
  onClose(): void;
}
const Installation = (props: InstallationProps) => {
  const { onClose } = props;

  const ref = useRef<HTMLDivElement>(null);
  useOnClickOutside(ref, onClose);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed right-0 top-0 w-full bg-black/40 h-full z-50"
    >
      <motion.div
        ref={ref}
        initial={{}}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.12 }}
        className="w-[100%] lg:w-[50%] bg-white h-full float-right px-10  overflow-y-auto"
      >
        <button
          className="h-[35px] w-[35px] grid place-items-center bg-slate-100 rounded-full m-2 -ml-7"
          onClick={onClose}
        >
          <IoClose size={30} />
        </button>
        <h1 className="text-3xl font-medium p-2">License</h1>
        <p className="p-2 text-gray-500 pb-10">
          Iconsax are the official icons of the Vuesax framework, these icons
          can be used for personal and commercial use for free, but they cannot
          be sold and distributed under another name, they cannot be used to
          create templates or ui kits without permission, if desired to use the
          iconsax icon pack for these purposes, you should contact:
          <a href="" className="text-black pl-1">
            https://lusaxweb.net/contact
          </a>
        </p>

        <h1 className="text-3xl font-medium p-2">Installation</h1>

        <p className="p-2 text-gray-500 text-xl font-medium">For React</p>

        <div className="bg-slate-100 m-2 rounded-xl">
          <SyntaxHighlighter
            language="terminal"
            style={a11yLight as any}
            wrapLines
            customStyle={{ background: "transparent" }}
          >
            {`npx install iconsax-react`}
          </SyntaxHighlighter>
        </div>

        <p className="p-2 text-gray-500 text-xl font-medium">For Flutter</p>

        <div className="bg-slate-100 m-2 rounded-xl">
          <SyntaxHighlighter
            language="terminal"
            style={a11yLight as any}
            wrapLines
            customStyle={{ background: "transparent" }}
          >
            {`flutter pub add flutter_iconsax`}
          </SyntaxHighlighter>
        </div>

        <h1 className="text-3xl font-medium p-2">Usage</h1>

        <p className="p-2 text-gray-500 text-xl font-medium">For React</p>

        <div className="bg-slate-100 m-2 rounded-xl">
          <SyntaxHighlighter
            language="terminal"
            style={a11yLight as any}
            wrapLines
            customStyle={{ background: "transparent" }}
          >
            {`  import { Gallery } from "iconsax-react"

  const Example = () => {
    return (
      <div>
        <Gallery 
          size={25} 
          variant="Bold" 
        />
      </div>
    )
  }

  export default Example;`}
          </SyntaxHighlighter>
        </div>

        <p className="p-2 text-gray-500 text-xl font-medium">For Flutter</p>

        <div className="bg-slate-100 m-2 rounded-xl mb-10">
          <SyntaxHighlighter
            language="terminal"
            style={a11yLight as any}
            wrapLines
            customStyle={{ background: "transparent" }}
          >
            {`  import 'package:flutter/material.dart';
  import 'package:flutter_iconsax/flutter_iconsax.dart';

  class ExampleWidget extends StatelessWidget {
    const ExampleWidget({super.key});

    @override
    Widget build(BuildContext context) {
      return Center(
        child: const Iconsax(Iconsaxs.gallery),
      );
    }
  }`}
          </SyntaxHighlighter>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Installation;
