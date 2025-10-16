const ctx = document.getElementById("dream_palace").getContext("2d");

const data = {
  labels: ["Condition", "Typology", "Ownership"],
  datasets: [
    {
      label: "Part A",
      data: [30, 20, 10],
      backgroundColor: "#90caf9",
    },
    {
      label: "Part B",
      data: [50, 40, 70],
      backgroundColor: "#64b5f6",
    },
    {
      label: "Without Data",
      data: [20, 40, 20],
      backgroundColor: "#1976d2",
    },
  ],
};

new Chart(ctx, {
  type: "bar",
  data: data,
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
      },
      tooltip: {
        mode: "index",
        intersect: false,
      },
      title: {
        display: false,
        text: "Stacked Bar Chart Example",
      },
    },
    scales: {
      x: {
        stacked: true, // ✅ 开启X轴堆叠
      },
      y: {
        stacked: true, // ✅ 开启Y轴堆叠
        beginAtZero: true,
        max: 100, // 如果你是百分比数据
        title: {
          display: true,
          text: "Percentage (%)",
        },
      },
    },
  },
});
