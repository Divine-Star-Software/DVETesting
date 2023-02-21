import { ElementTree, ElementTreeData } from  "ds-element-tree";
import { div, title, button, image, paragraph } from "../BaseElements.js";
import "./PickList.css";
type PickListNode = {
  name: string;
  id: string;
  desc: string;
  onClick: (id: string) => void;
  image?: string;
};
export type PickListData = PickListNode[];
type PickListProps = {
  activeItem: string;
  items: PickListData;
};

export const PickList = (
  props: PickListProps = { activeItem: "", items: [] }
): [ElementTreeData, (data: PickListProps) => void] => {
  const stateObj: PickListProps = { items: [], activeItem: "" };
  stateObj.items = props.items;

  const [state, setState, stateProps] = ElementTree.stateful<
    PickListProps,
    PickListProps
  >(props, stateObj);
  const cascadeProps = { activeId: state.activeItem };
  const [cascade] = ElementTree.cascade(cascadeProps);
  const elements: ElementTreeData = [];
  for (const node of state.items) {
    let className = "pick-list-item";
    let imageElement: ElementTreeData = [];
    if (node.image) {
      className += "pick-list-with-image";
      imageElement = image(node.image, "pick-list-image");
    }
    if (node.id == state.activeItem) {
      className += " active";
    }
    elements.push([
      {
        type: "div",
        attrs: {
          className: className,
        },
        children: [
          div("pick-list-data", [
            imageElement,
            paragraph(node.name, "pick-list-title"),
          ]),
          div("pick-list-buttons", [
            paragraph(node.desc, "pick-list-description "),
          ]),
        ],
        events: {
          onClick() {
            cascadeProps.activeId = node.id;
            node.onClick(cascadeProps.activeId);
            cascade();
          },
        },
        cascade: {
          origin: cascadeProps,
          receiver(elm: HTMLDivElement, cascadeProps) {
            if (cascadeProps.activeId == node.id) {
              elm.classList.add("active");
            } else {
              elm.classList.remove("active");
            }
          },
        },
      },
    ]);
  }

  const component: ElementTreeData = [
    {
      type: "component",
      component: {
        //@ts-ignore
        func: PickList,
        stateProps: stateProps,
        stateObject: state,
        element: "div",
      },

      children: div("pick-list", elements),
    },
  ];

  //@ts-ignore
  return [component, setState];
};
