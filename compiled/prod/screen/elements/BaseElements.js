export const div = (className, children) => {
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
export const title = (titleType, text, className = "") => {
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
export const paragraph = (children, className = "") => {
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
export const button = (text, className, onClick) => {
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
export const image = (src, className = "") => {
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
