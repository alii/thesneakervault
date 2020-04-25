import config from './config';

class API {
  constructor() {
    this.base = config.API_BASE;
  }

  async exec(url, body = null) {
    const options = {
      headers: {
        'user-agent': 'sneakervault App 1.0',
      },
    };

    if (body) {
      options.headers['content-type'] = 'application/json';
      options.body = JSON.stringify(body);
    }

    const request = await fetch(url, options);
    const result = await request.json();

    return result.data;
  }
}

export default new API();
