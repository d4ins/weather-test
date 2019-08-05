const GRAPH_DATASET_STYLE = {
  label: "Weather forecast",
  data: [],
  backgroundColor: [
    "rgba(255, 99, 132, 0.2)",
    "rgba(54, 162, 235, 0.2)",
    "rgba(255, 206, 86, 0.2)",
    "rgba(75, 192, 192, 0.2)",
    "rgba(153, 102, 255, 0.2)",
    "rgba(255, 159, 64, 0.2)"
  ],
  borderColor: [
    "rgba(255, 99, 132, 1)",
    "rgba(54, 162, 235, 1)",
    "rgba(255, 206, 86, 1)",
    "rgba(75, 192, 192, 1)",
    "rgba(153, 102, 255, 1)",
    "rgba(255, 159, 64, 1)"
  ],
  borderWidth: 2,
};

const GRAPH_STYLE = {
  width: 90,
  height: 350,
  options: { maintainAspectRatio: false }
};

export { GRAPH_DATASET_STYLE, GRAPH_STYLE };
