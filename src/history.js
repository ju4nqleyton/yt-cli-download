import { insert, getDB } from './db.js';

export const newHistoryVideo = async (video) => {
  const data = {
    id: Date.now(),
    url: video,
  };
  await insert(data);
  return data;
};

export const getAllHistoryVideo = async () => {
  const db = await getDB();
  return db.history;
};
