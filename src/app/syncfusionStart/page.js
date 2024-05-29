import React from 'react'
import SyncfusionStart from '../components/SyncfusionStart'
import ButtonSwitch from '../components/ButtonSwitch'
import { registerLicense } from "@syncfusion/ej2-base";

const key =
  "Ngo9BigBOggjHTQxAR8/V1NBaF5cXmZCf1FpRmJGdld5fUVHYVZUTXxaS00DNHVRdkdnWXtcdnRQQmFdVUV2W0o=";
registerLicense(key);

export default function Start() {
  return (
    <main>
     <div className="flex justify-center mt-20"><ButtonSwitch></ButtonSwitch></div>
        <div>
      <SyncfusionStart></SyncfusionStart>
    </div>
    </main>
  )
}
