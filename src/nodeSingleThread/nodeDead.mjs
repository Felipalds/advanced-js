// node && os.cpus().length
// UV_THREADPOOL_SIZE=100 node index.mjs
// hyperthreading?
import { execSync } from "node:child_process";
import { Worker } from "node:worker_threads";
import * as path from "path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const tPath = path.join(__dirname, "thread.mjs");

function createThread(data) {
  const worker = new Worker(tPath);
  const p = new Promise((resolve, reject) => {
    worker.once("message", () => {
      return resolve(data);
    });
    worker.once("error", reject);
  });
  worker.postMessage(data);
  return p;
}

function getCurThrCount() {
  return parseInt(execSync(`ps -M ${process.pid} | wc -l`).toString());
}

const defaultNodeThreadNumber = getCurThrCount();

console.log(
  `I am running `,
  process.pid,
  `default thread number: ${defaultNodeThreadNumber}`,
);

const interval = setInterval(() => {
  console.log(`running at every sec:  ${new Date().toISOString()}`);
}, 200);

await Promise.all([
  createThread({
    from: 0,
    to: 1e9,
  }),
  createThread({
    from: 0,
    to: 1e9,
  }),
  createThread({
    from: 0,
    to: 1e8,
  }),
]);

clearInterval(interval);
