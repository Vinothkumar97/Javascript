import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";
import { check, sleep } from "k6";
import http from "k6/http";

const url = "https://dev.setmore.info/api/v2/check-slot-availabilities";

export const options = {
  stages: [
    { duration: "5s", target: 5 },
    { duration: "10s", target: 5 },
    { duration: "5s", target: 0 },
  ],
  thresholds: {
    http_req_duration: ["avg<1000"], // 95% of requests should be below 200ms
  },
};

export default function () {
  let requestbody = {
    merchant: "ff4744f4-c905-4636-a508-765234c75ad0",
    brand: "110003eb-76c1-4b81-a96a-4cdf91bf70fb",
    referrer: "JqbDRo55yk8ww80MNKK5G7rih2IddDrq",
    startDateTime: "2025-05-17T18:00:00+05:30",
    duration: 30,
  };
  let res = http.post(url, JSON.stringify(requestbody), {
    headers: { "Content-Type": "application/json" },
  });
  check(res, {
    "Response time is Below 1s": (r) => r.timings.duration < 1000,
    "Status is 200": (r) => r.status === 200,
  });
  sleep(1);
}

export function handleSummary(data) {
  return {
    "summary.html": htmlReport(data),
  };
}
