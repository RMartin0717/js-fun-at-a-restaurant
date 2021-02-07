
function takeOrder(newOrder, deliveryOrders) {
  if (deliveryOrders.length < 3) {
    return deliveryOrders.push(newOrder);
  } else {
    return deliveryOrders;
  }
}

function refundOrder(orderNum, deliveryOrders) {
  return deliveryOrders.splice([orderNum - 1], 1);
}

//
// function listItems(deliveryOrders) {
//   var list = deliveryOrders[0].slice(2);
//   for (var i = 1; i < deliveryOrders.length; i++) {
//     list.push(deliveryOrders[i].slice(2));
//   }
//   return list;
// }


function listItems(deliveryOrders) {
  // for (var i = 0; i < deliveryOrders.length; i++) {
    var list = [];
    list.push(deliveryOrders[0].item);
    list.push(deliveryOrders[1].item);
    list.push(deliveryOrders[2].item);
  // }
  return `${list[0]}, ${list[1]}, ${list[2]}`
}

function searchOrder(deliveryOrders, food) {
  if (deliveryOrders[0].item === food || deliveryOrders[1].item === food) {
    return true;
  } else {
    return false;
  }
}


module.exports = {
  takeOrder,
  refundOrder,
  listItems,
  searchOrder
}
