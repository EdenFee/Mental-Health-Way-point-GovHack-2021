import { Bar } from "react-chartjs-2";

export const Chart = ({ chartData, title, yTitle }) => {
  return (
    <div>
      <Bar
        data={chartData}
        options={{
          responsive: true,
          scales: {
            y: {
              grid: {
                display: true,
                drawBorder: true,
                drawOnChartArea: true,
                drawTicks: true,
                color: "#FFF",
              },
              display: true,
              title: {
                display: true,
                text: yTitle,
                color: "#FFF",
                font: {
                  family: "Times",
                  size: 20,
                  style: "normal",
                  lineHeight: 1.2,
                },
                grid: {
                  display: true,
                  drawBorder: true,
                  drawOnChartArea: true,
                  drawTicks: true,
                  color: "#000000",
                },
                padding: { top: 30, left: 0, right: 0, bottom: 0 },
              },
            },
          },

          plugins: {
            title: {
              display: true,
              color: "#FFF",
              text: title,
              font: {
                family: "Times",
                size: 33,
                style: "normal",
                lineHeight: 1.2,
              },
            },
            legend: {
              display: false,
              position: "bottom",
            },
          },
        }}
      />
    </div>
  );
};

export default Chart;
