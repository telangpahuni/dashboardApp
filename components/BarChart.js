import { Bar } from 'react-chartjs-2';
import { getData } from "./GetData";

const BarChart = () => {
    const x = getData();
    const y = x[0];
    const z = x[1];
    console.log('y  ---- ', y)
    const dataS = {
        chartData: {
            labels: y,
            datasets: [
                {
                    label: 'Count of the status',
                    data: z,
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)'
                    ],
                    borderWidth: 1
                }
            ]
        }
    }

    return (
        <Bar
            data={
                dataS.chartData
            }
            width='20'
            height='20'
            options={
                {
                    maintainAspectRatio: true,
                    responsive: true
                }
            }
        />
    )

}
export default BarChart;