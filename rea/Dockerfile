# Dockerfile
FROM node:22

# Create app directory
WORKDIR /app

# Install dependencies (only package.json and lock file for caching)
COPY ./app/package*.json ./
RUN npm install

# Copy the rest of the app
COPY . .

# Expose port
EXPOSE 3000

# Start the development server
CMD ["npm", "start"]
