(function() {
    return {
        port: parseInt(process.env.STATSD_PORT) || 8125,
        backends: ["./backends/console", "stackdriver-statsd-backend"],
        debug: true,
        flushInterval: 60000,
        stackdriver: {
            apiKey: process.env.STACKDRIVER_API_KEY || "api_key",
            source: process.env.SOURCE || "statsd_source"
        }
    };
})()