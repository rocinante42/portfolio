const withTM = require("next-transpile-modules");
const isProd = process.env.NODE_ENV === "production";

/* eslint-disable no-nested-ternary */

const { PHASE_PRODUCTION_SERVER } =
  process.env.NODE_ENV === "development"
    ? {} // We're never in "production server" phase when in development mode
    : !process.env.NOW_REGION
    ? require("next/constants") // Get values from `next` package when building locally
    : require("next-server/constants"); // Get values from `next-server` package when building on now v2

module.exports = (phase, { defaultConfig }) => {
  if (phase === PHASE_PRODUCTION_SERVER) {
    return {
      onDemandEntries: {
        // Make sure entries are not getting disposed.
        maxInactiveAge: 1000 * 60 * 60
      },
      target: "serverless"
    };
  }
  // eslint-disable-next-line global-require
  const withCss = require("@zeit/next-css");

  return withCss(
    withTM({
      transpileModules: ["@kpm/components"],
      assetPrefix: isProd ? "https://portfolio-onionboy.kpm.now.sh" : "",
      target: "serverless",
      webpack: (config, options) => {
        config.module.rules.push({
          test: /\.(png|svg|eot|otf|ttf|woff|woff2)$/i,
          use: {
            loader: "url-loader",
            options: {
              limit: 8192,
              publicPath: "./",
              outputPath: "static/css/",
              name: "[name].[ext]"
            }
          }
        });
        return config;
      }
    })
  );
};
