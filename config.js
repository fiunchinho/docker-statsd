(function() {
  return {
    port: parseInt(process.env.STATSD_PORT) || 8125,
    backends: ["./backends/console", "stackdriver-statsd-backend", "statsd-datadog-backend"],
    debug: true,
    flushInterval: 60000,
    stackdriver: {
      apiKey: process.env.STACKDRIVER_API_KEY || "api_key",
      sourceFromPrefix: process.env.SOURCE_PREFIX_ENABLED=='true'? true: false,
      sourcePrefixSeparator: process.env.SOURCE_PREFIX_SEPARATOR || "--",
      debug: true
    },
    datadogApiKey: process.env.DATADOG_API_KEY || "api_key"
  };
})()
