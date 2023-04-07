# Use an official Node.js runtime as a parent image
FROM node:16.11.0-alpine

# Set the working directory to /app
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN yarn 

# Copy the rest of the application code to the container
COPY . .

# Build the application for production
RUN yarn build

# Expose the port that the application will run on
EXPOSE 3000

# Start the application
CMD ["yarn", "start"]
