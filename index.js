let total = 0;
const button = document.querySelector("#btn-add");
const budget = document.querySelector("#budget");
const form = document.querySelector("#input-form");
const list = document.querySelector(".expenses")


function addItem(event) {
    event.preventDefault();

    const item = document.querySelector("#name");
    const amount = document.querySelector("#amount");

    const row = document.createElement("div");
    row.className = "row";

    const rowItems = document.createElement("div");
    rowItems.className = "row-items";

    const itemName = document.createElement("div");
    itemName.className = "item";
    itemName.innerText = item.value;

    const cost = document.createElement("div");
    cost.className = "cost";
    cost.innerText = `$${amount.value}`;

    const trashcan = document.createElement("img");
    trashcan.setAttribute("src", "./assets/trash_can.svg");
    trashcan.addEventListener("click", removeItem);

    total += Number(amount.value);

    budget.innerText = `Budget Total: $${total}`

    rowItems.append(itemName, cost);
    row.append(rowItems, trashcan);
    list.append(row);

    item.value = "";
    amount.value = "";
}

function removeItem(event) {
    const nodes = event.target.parentNode.childNodes;
    const removeAmount = nodes[0].childNodes;
    console.log(nodes);
    console.log(removeAmount);

    // total -= Number()
    // event.target.parentNode.remove();
}

form.addEventListener("submit", addItem);
