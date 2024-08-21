import { hideBin } from 'yargs/helpers';
import yargs from 'yargs';

yargs(hideBin(process.argv))
  .command(
    'd <video>',
    'download video',
    (yargs) => {
      yargs.positional('video', {
        describe: 'url video',
        type: 'string',
      });
    },
    (argv) => {
      console.log(argv.video);
    }
  )
  .demandCommand(1)
  .parse();
