interface TerminateInput {
  coreDump: boolean;
  timeout?: number;
  server?: any;
}

export function terminate({ coreDump, timeout, server }: TerminateInput) {
  const exit = (code: number) => {
    coreDump ? process.abort() : process.exit(code);
  };

  return (code: number, reason: string) => (err: any, promise?: any) => {
    console.error(
      `Process exiting with code: ${code}, reason: ${reason}`,
      promise,
    );

    if (err && err instanceof Error) {
      console.error(err.message);
    }

    /** Try to graceful shutdown */
    server?.close(exit);
    if (timeout) {
      // TODO: this seams a bug in @types/node
      // @ts-ignore
      setTimeout(exit, timeout).unref();
    } else {
      exit(code);
    }
  };
}
