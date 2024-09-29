# Step 1: Use official node image as the base
FROM node:20.17.0-alpine

# Step 2: Set the working directory inside the container
WORKDIR /app

# Step 3: Copy package.json and package-lock.json
COPY package.json package-lock.json ./

# Step 4: Install dependencies
RUN npm install

# Step 5: Copy the rest of the app’s code to the container
COPY . .

# Step 6: Build the React app
RUN npm run build

# Step 7: Expose the port Vite uses
EXPOSE 5173

# Step 8: Command to start Vite in development mode
CMD ["npm", "run", "dev", "--", "--host"]
