import { ChartConfig } from "../types/ChartConfig";

export const chartData: ChartConfig = {
    labels: ["data", "new", "newData", "finally", "data1", "new1", "newData1", "finally1"],
    datasets: [
        {
            label: "Common Chart",
            backgroundColor: ["#1814f3", "#fcaa0b"],
            data: [25, 30, 20, -25, -25, -30, -20, -25],
        },
    ],
}
export const chartOptions = {
    responsive: true,
    width: 1
}