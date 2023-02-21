import {
  Component,
  ElementTree,
  ElementTreeData,
  HTMLInputTypes,
  InputValueTypes,
} from  "ds-element-tree";
import { div, title, button, image } from "../BaseElements.js";
import "./ItemList.css";

export type ItemListData = {
  data: any;
  image?: string;
  formatData: (data: any) => ElementTreeData;
  buttons: {
    text: string;
    onClick: Function;
  }[];
}[];

export const ItemList = (
  props: {
    items: ItemListData;
  } = { items: [] }
): [ElementTreeData, (data: { items: ItemListData }) => void] => {
  const stateObj: { items: ItemListData } = { items: [] };
  stateObj.items = props.items;

  const [state, setState, stateProps] = ElementTree.stateful<any, any>(
    props,
    stateObj
  );



  const elements: ElementTreeData = [];
  for (const node of state.items) {
    const elementButtons: ElementTreeData = [];
    for (const b of node.buttons) {
      elementButtons.push(button(b.text, "item-list-button", b.onClick));
    }
    let className = "item-list-item";
    let imageElement: ElementTreeData = [];
    if (node.image) {
      className += " item-list-with-image";
      imageElement = image(node.image, "item-list-image");
    }
    elements.push(
      div(className, [
        div("item-list-data", [imageElement, node.formatData(node.data)]),
        div("item-list-buttons", [elementButtons]),
      ])
    );
  }

  const component: ElementTreeData = [
    {
      type: "component",
      component: {
        //@ts-ignore
        func: ItemList,
        stateProps: stateProps,
        stateObject: state,
        element: "div",
      },
      children: div("item-list", elements),
    },
  ];

  //@ts-ignore
  return [component, setState];
};
