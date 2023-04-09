import React, { useMemo, useState } from "react";

function Cleanup() {
  console.log("ChildComponent rendering...");
  return <div>ChildComponent</div>;
}

const MemoizedCleanup = React.memo(Cleanup);

function UseMemoDemo() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <MemoizedCleanup />
      <MemoizedCleanup />
      <MemoizedCleanup />
      <MemoizedCleanup />
      <div>{count}</div>
      <button onClick={() => setCount(count + 1)}>Increment count</button>
    </div>
  );
  }
export default UseMemoDemo;