import fs from 'fs';

export default (maxSize: number) => {
  if (!fs.existsSync('./logs/')) {
    fs.mkdirSync('./logs/', { recursive: true });
  }

  fs.writeFileSync('./logs/log_file.log', '');
  fs.writeFileSync('./logs/log_file_bkp.log', '');

  const logFile = fs.statSync('./logs/log_file.log');
  const bkpFile = './logs/log_file_bk.log';
  const fileSizeInBytes = logFile.size;

  if (fileSizeInBytes >= maxSize) {
    //clean the old bkp file;
    fs.unlink(bkpFile, (err) => {
      fs.rename('./logs/log_file.log', './logs/log_file_bk.log', (err) => {
        fs.writeFile('./logs/log_file.log', '', (err) => {
          return './logs/log_file.log';
        });
      });
    });
  }

  return './logs/log_file.log';
};
