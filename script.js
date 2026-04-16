let cart = JSON.parse(localStorage.getItem("cart")) || [];

/* TOGGLE CART */
function toggleCart(){
  document.getElementById("cartBox").classList.toggle("active");
}

/* ADD ITEM */
function add(name, price) {
  let found = cart.find(item => item.name === name);

  if (found) {
    found.qty += 1;
  } else {
    cart.push({name, price, qty: 1});
  }

  save();
}

/* SHOW CART */
function show() {
  let list = document.getElementById("list");
  list.innerHTML = "";
  let total = 0;

  cart.forEach((item, index) => {
    let li = document.createElement("li");

    li.innerHTML = `
      <div class="item">
        <div>
          <b>${item.name}</b><br>
          $${item.price} x ${item.qty}
        </div>

        <div class="qty-box">
          <button onclick="minus(${index})">-</button>
          <span>${item.qty}</span>
          <button onclick="plus(${index})">+</button>
        </div>

        <button class="delete-btn" onclick="removeItem(${index})">🗑</button>
      </div>
    `;

    list.appendChild(li);
    total += item.price * item.qty;
  });

  document.getElementById("total").innerText = "Total: $" + total;
}

/* PLUS */
function plus(index) {
  cart[index].qty++;
  save();
}

/* MINUS */
function minus(index) {
  if (cart[index].qty > 1) {
    cart[index].qty--;
  } else {
    cart.splice(index, 1);
  }
  save();
}

/* DELETE */
function removeItem(index) {
  cart.splice(index, 1);
  save();
}

/* SAVE */
function save() {
  localStorage.setItem("cart", JSON.stringify(cart));
  show();
  updateCount(); // 👉 បន្ថែមនេះ
}

/* INIT */
show();
function updateCount() {
  let count = 0;

  cart.forEach(item => {
    count += item.qty;
  });

  document.getElementById("count").innerText = count;
}