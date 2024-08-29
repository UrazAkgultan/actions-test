main().catch((e) => {
  console.error(e);
  process.exit(1);
});

async function main() {
  for (let i = 0; i < 100; i++) {
    console.log(`Step ${i}`);
    await wait();
  }
}

function wait() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Done");
    }, 5 * 1000);
  });
}
