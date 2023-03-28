import { snakeCase,pascalCase } from "change-case";
import clsx from "clsx";
import { motion } from "framer-motion";
import { Copy } from "iconsax-react";
import React, { useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import { IoClose } from "react-icons/io5";
import SyntaxHighlighter from "react-syntax-highlighter";
import { Variant } from "../components/TabBar";
import { IconType } from "../data/icons";

const a11yDark = {
  "hljs-comment": {
    color: "#d4d0ab",
  },
  "hljs-quote": {
    color: "#d4d0ab",
  },
  "hljs-variable": {
    color: "#ffa07a",
  },
  "hljs-template-variable": {
    color: "#ffa07a",
  },
  "hljs-tag": {
    color: "#ffa07a",
  },
  "hljs-name": {
    color: "#ffa07a",
  },
  "hljs-selector-id": {
    color: "#ffa07a",
  },
  "hljs-selector-class": {
    color: "#ffa07a",
  },
  "hljs-regexp": {
    color: "#ffa07a",
  },
  "hljs-deletion": {
    color: "#ffa07a",
  },
  "hljs-number": {
    color: "#f5ab35",
  },
  "hljs-built_in": {
    color: "#f5ab35",
  },
  "hljs-builtin-name": {
    color: "#f5ab35",
  },
  "hljs-literal": {
    color: "#f5ab35",
  },
  "hljs-type": {
    color: "#f5ab35",
  },
  "hljs-params": {
    color: "#f5ab35",
  },
  "hljs-meta": {
    color: "#f5ab35",
  },
  "hljs-link": {
    color: "#f5ab35",
  },
  "hljs-attribute": {
    color: "#ffd700",
  },
  "hljs-string": {
    color: "#abe338",
  },
  "hljs-symbol": {
    color: "#abe338",
  },
  "hljs-bullet": {
    color: "#abe338",
  },
  "hljs-addition": {
    color: "#abe338",
  },
  "hljs-title": {
    color: "#00e0e0",
  },
  "hljs-section": {
    color: "#00e0e0",
  },
  "hljs-keyword": {
    color: "#dcc6e0",
  },
  "hljs-selector-tag": {
    color: "#dcc6e0",
  },
  hljs: {
    display: "block",
    overflowX: "auto",
    background: "#2b2b2b",
    color: "#f8f8f2",
    padding: "0.5em",
  },
  "hljs-emphasis": {
    fontStyle: "italic",
  },
  "hljs-strong": {
    fontWeight: "bold",
  },
};

interface IconDetailsProps extends IconType {
  variant: Variant;
  onClear(): void;
}

const IconDetails = (props: IconDetailsProps) => {
  const { name, icon: Icon, variant, onClear } = props;

  const [active, setActive] = useState("React");

  const icon = pascalCase(name);

  const jsxString = ` import { ${icon} } from "iconsax-react"

  const Example = () => {
    return (
      <div>
        <${icon} 
          size={25} 
          variant="${variant}" 
        />
      </div>
    )
  }

    export default Example;`;

  const dartString = `  import 'package:flutter/material.dart';
  import 'package:flutter_iconsax/flutter_iconsax.dart';

  class ExampleWidget extends StatelessWidget {
    const ExampleWidget({super.key});

    @override
    Widget build(BuildContext context) {
      return Center(
        child: const Icon(Iconsax.${snakeCase(name)}),
      );
    }
  }`;

  const codeString = active === "React" ? jsxString : dartString;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed bottom-3 lg:right-3 grid place-items-center w-[100%] lg:w-[30%] z-50"
    >
      <div className="bg-[#212121] rounded-2xl w-[90%] overflow-hidden">
        <div className="flex items-center justify-between px-4 py-2">
          <div className="flex items-center  ">
            <Icon color="#fff" variant={variant} />

            <p className="text-white pl-2">{name}</p>
          </div>

          <button
            className="w-[25px] h-[25px] rounded-full bg-white/20 flex items-center justify-center"
            onClick={onClear}
          >
            <IoClose color="#fff" />
          </button>
        </div>
        <div className="flex items-center justify-between px-4 py-2">
          <div className="overflow-hidden rounded-lg flex items-center border-[1px] border-white/20">
            {["React", "Flutter"].map((item, inx) => (
              <button
                key={inx}
                className={clsx(
                  "flex items-center   px-3 py-1 hover:scale-105 active:scale-95",
                  active === item ? "bg-white/20" : ""
                )}
                onClick={() => setActive(item)}
              >
                <p className="text-white">{item}</p>
              </button>
            ))}
          </div>

          <CopyToClipboard text={codeString}>
            <button className="w-[25px] h-[25px] rounded-full bg-white/20 flex items-center justify-center">
              <Copy color="#fff" />
            </button>
          </CopyToClipboard>
        </div>

        <SyntaxHighlighter
          language={active === "React" ? "javascript" : "dart"}
          style={a11yDark as any}
        >
          {codeString}
        </SyntaxHighlighter>
      </div>
    </motion.div>
  );
};

export default IconDetails;
