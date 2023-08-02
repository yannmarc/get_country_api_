import fsPromises from 'fs/promises';
import path from 'path';

const dataFilePath = path.join(process.cwd(), './utils/data.json');

export default async function handler(req, res) {

  if (req.method === 'GET') {
    // Read the existing data from the JSON file
    const jsonData = await fsPromises.readFile(dataFilePath);
    const objectData = JSON.parse(jsonData);

    res.status(200).json(objectData);
  }
}