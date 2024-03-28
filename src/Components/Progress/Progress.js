import React, { useState } from "react";

const Progress = () => {
  const [progress, setProgress] = useState(10);
  return (
    <div>
      <input type="text" onChange={(e) => setProgress(e.target.value)} />
      <input type="range" value={progress} />
    </div>
  );
};

export default Progress;
