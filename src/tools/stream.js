function readStream(stream) {
  return new Promise((resolve, reject) => {
    let str = '';

    stream.setEncoding('utf-8');

    stream.on('data', (data) => {
      str += data;
    });

    stream.on('error', (err) => {
      reject(err);
    });

    stream.on('end', () => {
      resolve(str);
    });

    stream.resume();
  });
}

module.exports = {
  readStream,
};
