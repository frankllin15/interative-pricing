const options = [
  {
    ammount: "10k",
    cost: "$8.00",
  },
  {
    ammount: "50k",
    cost: "$12.00",
  },
  {
    ammount: "100k",
    cost: "$16.00",
  },
  {
    ammount: "500k",
    cost: "$24.00",
  },
  {
    ammount: "1M",
    cost: "$36.00",
  },
];

function handleChange(e) {
  const { value: index } = e.target;
  const { ammount, cost } = options[index];

  const pageviewsElement = document.querySelector("#pageviews");
  const costElement = document.querySelector("#cost");

  pageviewsElement.innerHTML = `${ammount} PAGEVIWES`;
  costElement.innerHTML = cost;
}
