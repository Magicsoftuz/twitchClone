import React, { useState } from "react";
import { DatePicker, message, Alert, Progress } from "antd";
import "antd/dist/antd.css";

const StreamList = () => {
  return (
    <div style={{ width: "40%", margin: "0 auto" }}>
      <Progress percent={30} />
      <Progress percent={50} status="active" />
      <Progress percent={70} status="exception" />
      <Progress percent={100} />
      <Progress percent={50} showInfo={false} />
    </div>
  );
};

export default StreamList;
