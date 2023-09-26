const fs = require('fs').promises;

function normalizeData(data) {
  return data.map(item => {
    if (item.enterprise) {
      item.enterprise = item.enterprise.replace(/\"/g, "'");
    }
    return item;
  });
}

async function main() {
  try {
    const rawData = await fs.readFile('../data.json', 'utf8');
    const initialData = JSON.parse(rawData);

    const normalizedData = normalizeData(initialData);
    console.log(normalizedData);
  } catch (err) {
    console.error("Ошибка:", err);
  }
}

main();