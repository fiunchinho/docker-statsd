# Docker Statsd

A Docker container running statsd, using Stackdriver as backend.

# Usage
To run the container execute

    docker run -e "STACKDRIVER_API_KEY=your_key" -p 8125:8125/udp fiunchinho/docker-statsd
