// JavaScript Object containing the result
const result = {
    solution1: {
      title: "Energy Efficiency Programs",
      text: "Implementing energy efficiency programs can significantly reduce energy consumption and lower overall energy costs for consumers. This includes promoting energy-efficient building designs, appliances, and industrial processes.",
    },
    solution2: {
      title: "Investment in Research and Development",
      text: "Governments and private sectors should invest in research and development to drive innovation and bring down the costs of clean energy technologies. As technology improves, economies of scale will reduce production costs, making clean energy more affordable.",
    },
    solution3: {
      title: "Removal of Fossil Fuel Subsidies",
      text: "Redirecting subsidies from fossil fuels to clean energy sources can level the playing field and encourage the adoption of renewable technologies.",
    },
  };
  function updateContent(solution) {
    document.getElementById("solution-title").textContent = result[solution].title;
    document.getElementById("solution-text").textContent = result[solution].text;
  }
  
  document.getElementById("btn-solution1").addEventListener("click", function () {
    updateContent("solution1");
    document.getElementById("btn-solution1").classList.add("active-button");
    document.getElementById("btn-solution2").classList.remove("active-button");
    document.getElementById("btn-solution3").classList.remove("active-button");
  });
  
  document.getElementById("btn-solution2").addEventListener("click", function () {
    updateContent("solution2");
    document.getElementById("btn-solution1").classList.remove("active-button");
    document.getElementById("btn-solution2").classList.add("active-button");
    document.getElementById("btn-solution3").classList.remove("active-button");
  });
  
  document.getElementById("btn-solution3").addEventListener("click", function () {
    updateContent("solution3");
    document.getElementById("btn-solution1").classList.remove("active-button");
    document.getElementById("btn-solution2").classList.remove("active-button");
    document.getElementById("btn-solution3").classList.add("active-button");
  });
  