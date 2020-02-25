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
      const timer = (setTimeout(exit, timeout) as unknown) as NodeJS.Timer;
      timer.unref();
    } else {
      exit(code);
    }
  };
}
