import { useEffect, useRef } from "react";
import { OrgChart } from "d3-org-chart";

function OrgChartComponent({ data }) {
  const chartRef = useRef(null);

  useEffect(() => {
    if (!data || data.length === 0) return;

    new OrgChart()
      .container(chartRef.current)
      .data(data)
      .nodeWidth(() => 250)
      .nodeHeight(() => 100)
      .render();

  }, [data]);

  return <div ref={chartRef}></div>;
}

export default OrgChartComponent;