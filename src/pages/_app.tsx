import "@uiw/react-md-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";
import dynamic from "next/dynamic";
import { useState } from "react";

const MDEditor = dynamic(() => import("@uiw/react-md-editor"), { ssr: false });

function HomePage() {
  const [value, setValue] = useState("**Hello world!!!**");

  const handleExport = () => {
    const blob = new Blob([value], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "markdown-file.md";
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div>
      <button onClick={handleExport}>Export</button>
      <MDEditor value={value} onChange={(value?: string) => setValue(value!)} />
    </div>
  );
}

export default HomePage;
