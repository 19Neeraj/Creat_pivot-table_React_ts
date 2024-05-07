"use client";
import Image from "next/image";
import SyncfusionJs from "./components/SyncfusionJs";
import { registerLicense } from "@syncfusion/ej2-base";
import { useState } from "react";
import ButtonSwitch from "./components/ButtonSwitch";

// Registering Syncfusion license key
const key =
  "Ngo9BigBOggjHTQxAR8/V1NBaF5cXmZCf1FpRmJGdld5fUVHYVZUTXxaS00DNHVRdkdnWXtcdnRQQmFdVUV2W0o=";
registerLicense(key);

export default function Home() {
  const getInitialState = () => {
    const value = "Defult";
    return value;
  };

  const [value, setValue] = useState(getInitialState);

  const handleChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <>
    <div className="flex justify-center"><ButtonSwitch></ButtonSwitch></div>
      <main className=" flex items-center h-[100vh] w-[100vw]">
        <section className="w-[300px]">
          <select value={value} onChange={handleChange}>
            <option value="PercentageOfParentRowTotal">
              PercentageOfParentRowTotal
            </option>
            <option value="PercentageOfColumnTotal">
              PercentageOfColumnTotal
            </option>
            <option value="PercentageOfGrandTotal">
              PercentageOfGrandTotal
            </option>
            <option value="RunningTotals">
            RunningTotals
            </option>
          </select>
          <p className="mt-20">
            You selected <b>{value}</b>
          </p>
        </section>

        <section className="w-3/4">
          <SyncfusionJs Changeval={value}></SyncfusionJs>
        </section>
      </main>
    </>
  );
}
