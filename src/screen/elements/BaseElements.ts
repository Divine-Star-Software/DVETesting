import type { ElementTreeData } from  "ds-element-tree";

export const div = (
  className: string,
  children: ElementTreeData
): ElementTreeData => {
  return [
    {
      type: "div",
      attrs: {
        className: className,
      },
      children: children,
    },
  ];
};

export const title = (
  titleType: "h1" | "h2" | "h3" | "h4" | "h5" | "h6",
  text: string,
  className = ""
): ElementTreeData => {
  return [
    {
      type: titleType,
      text: text,
      attrs: {
        className: className,
      },
    },
  ];
};

export const paragraph = (
  children: string | ElementTreeData,
  className = ""
): ElementTreeData => {
  if (typeof children == "string") {
    return [
      {
        type: "p",
        text: children,
        attrs: {
          className: className,
        },
      },
    ];
  }
  return [
    {
      type: "p",
      children: children,
      attrs: {
        className: className,
      },
    },
  ];
};

export const button = (
  text: string,
  className: string,
  onClick: Function
): ElementTreeData => {
  return [
    {
      type: "button",
      text: text,
      attrs: {
        className: className,
      },
      events: {
        onClick: onClick,
      },
    },
  ];
};

export const image = (src: string, className = ""): ElementTreeData => {
  return [
    {
      type: "img",
      attrs: {
        className: className,
        img: {
          src: src,
        },
      },
    },
  ];
};
