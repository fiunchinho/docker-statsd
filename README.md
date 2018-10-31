# Docker Statsd

A Docker container running statsd, using Stackdriver and Datadog as backends.

# Usage
To run the container execute

    docker run -e "STACKDRIVER_API_KEY=your_key" -e "DATADOG_API_KEY=your_key" -p 8125:8125/udp fiunchinho/docker-statsd

You can also define the following environment variables to get instance metrics:

- SOURCE_PREFIX_ENABLED: If true it will use a prefix to send instance metrics
- SOURCE_PREFIX_SEPARATOR: The characters to separate instanceId from metric name

Backend repos and docs:

- [Stackdriver backend](https://github.com/Stackdriver/stackdriver-statsd-backend)
- [Datadog backend](https://github.com/DataDog/statsd-datadog-backend)

