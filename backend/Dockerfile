# Step 1: Use Node.js 20.17.0 as the base image
FROM node:20.17.0-alpine

# Step 2: Set working directory
WORKDIR /app

# Step 3: Copy package.json and package-lock.json
COPY package.json package-lock.json ./

# Step 4: Install dependencies
RUN npm install

# Step 5: Copy the rest of the app’s code
COPY . .

# Step 6: Expose the port used by your Node.js app (example: 3000)
EXPOSE 3000

# Step 7: Command to run your Node.js app
CMD ["npm", "start"]
