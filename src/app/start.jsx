"use client";
import React from "react";
import "@/app/ptkl.css";
import { useCountdown } from "./useCountdown";
import {
  Apple,
  Badge,
  Cherry,
  Circle,
  Citrus,
  Cloud,
  Grape,
} from "lucide-react";

const StarSky = () => {
  const [months, days, hours, minutes, seconds] = useCountdown(
    new Date("2025-01-31T23:59:59")
  );
  return (
    <section className="bg-gradient-to-tr from-blue-500/40 to-green-500/40 w-screen">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>

      <div className=" min-h-screen flex items-center justify-center font-dancing">
        <div className="bg-white rounded-lg shadow-xl p-8 max-w-2xl w-full mx-4">
          <h1 className="text-3xl text-center text-gray-800 mb-8 font-semibold">
            Đếm ngược ngày Phùng Thị Khánh Linh về Việt Nam
          </h1>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="relative">
              <Badge
                className="w-32 h-32 mx-auto text-blue-600/60"
                strokeWidth={1}
              />
              <div className="absolute inset-0 pt-2 flex flex-col items-center justify-center">
                <div id="days" className="text-4xl font-bold text-blue-600">
                  {days}
                </div>
                <div className="text-sm text-blue-600">Days</div>
              </div>
            </div>
            <div className="relative">
              <Badge
                className="w-32 h-32 mx-auto text-green-600/60"
                strokeWidth={1}
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <div id="hours" className="text-4xl font-bold text-green-600">
                  {hours}
                </div>
                <div className="text-sm text-green-600">Hours</div>
              </div>
            </div>
            <div className="relative">
              <Badge
                className="w-32 h-32 mx-auto text-yellow-400"
                strokeWidth={1}
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <div
                  id="minutes"
                  className="text-4xl font-bold text-yellow-400"
                >
                  {minutes}
                </div>
                <div className="text-sm text-yellow-400">Minutes</div>
              </div>
            </div>
            <div className="relative">
              <Badge
                className="w-32 h-32 mx-auto text-red-500"
                strokeWidth={1}
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <div id="seconds" className="text-4xl font-bold text-red-500">
                  {seconds}
                </div>
                <div className="text-sm text-red-500">Seconds</div>
              </div>
            </div>
          </div>
          <p className="text-center text-gray-600 mt-8 text-xl font-bold">
            Còn {months} tháng {Math.floor(days - months * 30 - 2)} ngày
          </p>
        </div>
      </div>
    </section>
  );
};

export default StarSky;
