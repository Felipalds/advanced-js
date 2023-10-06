import { threadId, parentPort } from "node:worker_threads";

parentPort.once("message", ({ from, to }) => {
  console.time(`benchmark-${threadId}`);
  let count = 0;
  for (let c = from; c < to; c++) {
    count++;
  }
  console.timeEnd(`benchmark-${threadId}`);
  parentPort.postMessage(`I'm ${threadId} done with ${count} items`);
});
