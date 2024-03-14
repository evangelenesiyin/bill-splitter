export default function getIndividualPrices(sharers, receiptItems, grandTotal) {
  const subtotal = receiptItems.reduce((acc, curr) => {
    return acc + curr.item_price;
  }, 0);
  console.log("duck", subtotal);
  const breakdown = [];
  for (let sharer of sharers) {
    const items = [];
    let sharer_subtotal = 0;
    for (let receiptItem of receiptItems) {
      if (receiptItem.item_sharers.includes(sharer)) {
        const item_split_price =
          receiptItem.item_price / receiptItem.item_sharers.length;
        items.push({
          ...receiptItem,
          item_split_price: item_split_price,
        });
        sharer_subtotal += item_split_price;
      }
    }
    total = breakdown.push({
      name: sharer,
      items: items,
      subtotal: sharer_subtotal,
      tax: (sharer_subtotal / subtotal) * grandTotal - sharer_subtotal,
      total: (sharer_subtotal / subtotal) * grandTotal,
    });
  }
  return breakdown;
}
