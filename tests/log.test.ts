import { describe, expect, test } from '@jest/globals';
import GladisLogger from '../src/index';

const logger = new GladisLogger('Prefix Teste');
const loggerText = 'Teste';

describe('Teste do logger COM prefixo no contrutor', () => {
  it('Logger info com prefix', () => {
    let logSpy = jest.spyOn(logger2, 'info');
    logger2.info(loggerText);

    expect(logSpy).toBeCalledWith(loggerText);
  });

  it('Logger warn com prefix', () => {
    let logSpy = jest.spyOn(logger2, 'warn');
    logger2.warn(loggerText);

    expect(logSpy).toBeCalledWith(loggerText);
  });
});

const logger2 = new GladisLogger();

describe('Teste do logger SEM prefixo no contrutor', () => {
  it('Logger debug sem prefix', () => {
    let logSpy = jest.spyOn(logger2, 'debug');
    logger2.debug(loggerText);

    expect(logSpy).toBeCalledWith(loggerText);
  });

  it('Logger error sem prefix', () => {
    let logSpy = jest.spyOn(logger2, 'error');
    logger2.error(loggerText);

    expect(logSpy).toBeCalledWith(loggerText);
  });
});
