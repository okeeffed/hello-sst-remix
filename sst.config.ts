/* eslint-disable @typescript-eslint/triple-slash-reference */
/// <reference path="./.sst/platform/config.d.ts" />
export default $config({
  app() {
    return {
      name: "remix-cloudflare",
      home: "cloudflare",
    };
  },

  async run() {
    new sst.cloudflare.Remix("ExampleApp");
  },
});
