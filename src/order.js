
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



function listItems(deliveryOrders) {
  var list = [];
  for (var i = 0; i < deliveryOrders.length; i++) {
    list.push(deliveryOrders[i].item)
  }
  return `${list[0]}, ${list[1]}, ${list[2]}`
}

function searchOrder(deliveryOrders, food) {
  for (var i = 0; i < deliveryOrders.length; i++) {
    if (deliveryOrders[i].item === food) {
      return true;
    }
  }
    return false;
}


module.exports = {
  takeOrder,
  refundOrder,
  listItems,
  searchOrder
}
