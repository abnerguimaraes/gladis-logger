import dateFormatter from './DateFormatter';
import ChangeOutputFile from './ChangeOutputFile';

import fs from 'fs';
import path from 'path';

const RED = '\x1B[0;31m';
const GREEN = '\x1B[0;32m';
const YELLOW = '\x1B[0;33m';
const BLUE = '\x1B[0;34m';
const DEFAULT = '\x1B[0;38m';

export default class GladisLogger {
  private maxSize = 1024;
  private prefix = null as null | string;

  constructor(prefix?) {
    this.prefix = prefix;
  }

  private errorCallback = function (err: any) {
    if (err != null) {
      console.error(`index.ts - appendErrorCallback() ${err}`);
    }
  };

  public info = function (this: any, msg: string) {
    let agora = dateFormatter();

    if (!this.prefix) {
      this.prefix = `${path.basename(__filename)}`;
    }

    fs.appendFile(ChangeOutputFile(this.maxSize), `${agora} [INFO]: ${this.prefix} - ${msg}\n`, this.errorCallback);
    console.log(`${GREEN} ${agora} [INFO]:${DEFAULT} ${this.prefix} - ${msg}`);
  };

  public warn = function (this: any, msg: string) {
    let agora = dateFormatter();

    if (!this.prefix) {
      this.prefix = `${path.basename(__filename)}`;
    }

    fs.appendFile(ChangeOutputFile(this.maxSize), `${agora} [WARN]: ${this.prefix} - ${msg}\n`, this.errorCallback);
    console.log(`${YELLOW} ${agora} [WARN]:${DEFAULT} ${this.prefix} - ${msg}`);
  };

  public error = function (this: any, msg: string) {
    let agora = dateFormatter();

    if (!this.prefix) {
      this.prefix = `${path.basename(__filename)}`;
    }

    fs.appendFile(ChangeOutputFile(this.maxSize), `${agora} [ERROR]: ${this.prefix} - ${msg}\n`, this.errorCallback);
    console.log(`${RED} ${agora} [ERROR]:${DEFAULT} ${this.prefix} - ${msg}`);
  };

  public debug = function (this: any, msg: string) {
    let agora = dateFormatter();

    if (!this.prefix) {
      this.prefix = `${path.basename(__filename)}`;
    }

    fs.appendFile(ChangeOutputFile(this.maxSize), `${agora} [DEBUG]: ${this.prefix} - ${msg}\n`, this.errorCallback);
    console.log(`${BLUE} ${agora} [DEBUG]:${DEFAULT} ${this.prefix} - ${msg}`);
  };
}
