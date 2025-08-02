# Dockerfile

# Use Node.js 22 base image
FROM node:22

# Set working directory in container
WORKDIR /app

# Copy package files and install dependencies
COPY ./app/package*.json ./
RUN npm install

COPY ./app/eslint.config.js ./
COPY ./app/index.html ./
COPY ./app/vite.config.js ./
COPY ./app/src ./src/
# Expose Vite dev server port
EXPOSE 5173

# Start the Vite dev server
CMD ["npm", "run", "dev"]

