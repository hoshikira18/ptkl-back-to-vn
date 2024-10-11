"use client";
import Image from "next/image";
import { useCountdown } from "./useCountdown";

export default function Home() {
  const [months, days, hours, minutes, seconds] = useCountdown(
    new Date("2025-01-31T23:59:59")
  );
  return (
    <div class="bg-gray-100 min-h-screen flex items-center justify-center">
      <div class="bg-white rounded-lg shadow-xl p-8 max-w-2xl w-full mx-4">
        <h1 class="text-3xl font-bold text-center text-gray-800 mb-8">
          Đếm ngược ngày PTKL về Việt Nam
        </h1>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div class="bg-blue-100 rounded-lg p-4">
            <span id="days" class="text-4xl font-bold text-blue-600 block">
              {days}
            </span>
            <span class="text-sm text-gray-600">Days</span>
          </div>
          <div class="bg-green-100 rounded-lg p-4">
            <span id="hours" class="text-4xl font-bold text-green-600 block">
              {hours}
            </span>
            <span class="text-sm text-gray-600">Hours</span>
          </div>
          <div class="bg-yellow-100 rounded-lg p-4">
            <span id="minutes" class="text-4xl font-bold text-yellow-600 block">
              {minutes}
            </span>
            <span class="text-sm text-gray-600">Minutes</span>
          </div>
          <div class="bg-red-100 rounded-lg p-4">
            <span id="seconds" class="text-4xl font-bold text-red-600 block">
              {seconds}
            </span>
            <span class="text-sm text-gray-600">Seconds</span>
          </div>
        </div>
        <p class="text-center text-gray-600 mt-8">
          Còn {months} tháng {Math.floor(days - months * 30 - 2)} ngày
        </p>
      </div>
    </div>
  );
}
