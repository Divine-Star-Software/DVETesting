import {
  ElmTreeData,
  div,
  image,
  paragraph,
  Component,
  UseCascade,
  AddClass,
  element,
  AddEvents,
  AddAttributes,
} from "elmtree";

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
  props: {
    claasses: string[];
    activeItem: string;
  } = { claasses: [], activeItem: "" }
) => {
  const cascade = UseCascade({ activeId: props.activeItem });
  return Component({
    addons: [AddClass([`pick-list`, ...props.claasses])],
    generate: (items: PickListProps) =>
      items.items.map((node) => {
        const className = ["pick-list-item"];
        let imageElement: ElmTreeData = [];
        if (node.image) {
          className.push("pick-list-with-image");
          imageElement = element("img", [
            AddAttributes({
              "image" :{
                "src" : node.image
              }
            }),
            AddClass(["pick-list-image"])]);
        }
        if (node.id == items.activeItem) {
          className.push("active");
        }
        return element(
          "div",
          [
            AddClass(className),
            AddEvents({
              click(event) {
                event.stopPropagation();
                event.preventDefault();
                cascade.props.activeId = node.id;
                node.onClick(cascade.props.activeId);
                cascade.runCascade();
              },
            }),
            cascade.addToElment((elm: HTMLDivElement) => {
              if (cascade.props.activeId == node.id) {
                elm.classList.add("active");
              } else {
                elm.classList.remove("active");
              }
            }),
          ],
          [
            div("pick-list-data", [
              imageElement,
              paragraph(node.name, "pick-list-title"),
            ]),
            div("pick-list-buttons", [
              paragraph(node.desc, "pick-list-description "),
            ]),
          ]
        );
      }),
  });
};
