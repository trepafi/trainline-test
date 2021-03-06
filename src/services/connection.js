import journey from '../../data/ldb.json';

const latency = (() => {
  const max = 20;
  const min = 5;

  return (Math.random() * (max - min) + min) * 100;
})();

class connection {
  static request({ method, data }) {
    console.log(`Making a $method request with data:`, data);
    const exec = (resolve, reject) => {
      setTimeout(() => {
        resolve(journey);
      }, latency);
    };

    return new Promise(exec);
  }
}

export default connection;
