# Use the official Node.js v22.11.0 image as a base
FROM node:22.11.0 AS builder

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .


# Expose ports for dev server and storybook
EXPOSE 8080
EXPOSE 6006


# Start dev server
# CMD ["npm", "run", "dev"]


