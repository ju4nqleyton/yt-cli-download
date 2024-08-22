import { hideBin } from 'yargs/helpers';
import yargs from 'yargs';
import { newHistoryVideo, getAllHistoryVideo } from './history.js';

const allHistoryVideoList = (videos) => {
  videos.forEach((video) => {
    console.log('\n');
    console.log('id: ', video.id);
    console.log('url: ', video.url);
  });
};

yargs(hideBin(process.argv))
  .command(
    'download <video>',
    'download video',
    (yargs) => {
      yargs.positional('video', {
        describe: 'url video',
        type: 'string',
      });
    },
    async (argv) => {
      const video = await newHistoryVideo(argv.video);
      console.log('new video added', video.id);
    }
  )
  .command(
    'history',
    'get all history',
    () => {},
    async (argv) => {
      const history = await getAllHistoryVideo();
      allHistoryVideoList(history);
    }
  )
  .demandCommand(1)
  .parse();
