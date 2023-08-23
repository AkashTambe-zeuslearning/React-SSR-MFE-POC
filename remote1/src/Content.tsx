import React from "react";

export interface ContentProps {
  content?: string;
}

const Content: React.FC<ContentProps> = (props: ContentProps) => {
  return (
    <div
      className="content"
      style={{
        padding: "1rem",
        borderRadius: "0.25rem",
        border: "4px dashed #1e90ff",
      }}
    >
      <h2>Remote 1: Content</h2>
      <p>
        This is the content from remote1, which will include an image component
        exposed by remote2. This demonstrates nested federated modules being
        rendered server-side.
      </p>
      <p>Dynamic content: {props.content || "Default text"}</p>
    </div>
  );
};

export default Content;
