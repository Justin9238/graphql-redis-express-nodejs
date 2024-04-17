# Use the official Redis image from Docker Hub
FROM redis

# Set the Redis password
ENV REDIS_PASSWORD secret

# Copy custom Redis configuration file with password authentication
COPY redis.conf /usr/local/etc/redis/redis.conf

# Expose Redis port
EXPOSE 6379

# Start Redis server with custom configuration file
CMD [ "redis-server", "/usr/local/etc/redis/redis.conf" ]
