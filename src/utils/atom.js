import { atomWithStorage } from "jotai/utils";

export const indexToEditAtom = atomWithStorage("indexToEdit", -1);
export const sharersAtom = atomWithStorage("sharers", []);
export const receiptItemsAtom = atomWithStorage("receiptItems", [
  // {
  //   item_name: "carbonara", // string
  //   item_price: 12.5, // float
  //   item_sharers: ["tiff"], // array of string names
  // },
  // {
  //   item_name: "salad", // string
  //   item_price: 5.6, // float
  //   item_sharers: ["asc", "juj"], // array of string names
  // },
  // {
  //   item_name: "some potato thing", // string
  //   item_price: 4.4, // float
  //   item_sharers: ["tiff", "asc", "juj"], // array of string names
  // },
  // {
  //   item_name: "thing", // string
  //   item_price: 15.3, // float
  //   item_sharers: ["asc", "juj"], // array of string names
  // },
  // {
  //   item_name: "that", // string
  //   item_price: 10.9, // float
  //   item_sharers: ["juj"], // array of string names
  // },
]);

export const summaryAtom = atomWithStorage("summary", []);
