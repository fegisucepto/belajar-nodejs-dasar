# Dockerfile
FROM node:18-alpine

# Working directory
WORKDIR /app

# Copy package files (destination is directory => end with /)
COPY package*.json ./

# Install production deps (use npm ci if lockfile exists)
RUN if [ -f package-lock.json ]; then npm ci --production; else npm install --production; fi && npm cache clean --force

# Create non-root user
RUN addgroup -g 1001 -S nodejs && adduser -S nodejs -u 1001

# Copy app files and set owner to non-root user
COPY --chown=nodejs:nodejs . .

# Set env defaults
ENV NODE_ENV=production
ENV PORT=3000
ENV MONGO_URI=mongodb://localhost:27017/belajar-nodejs

USER nodejs

EXPOSE 3000

# Start the app — ensure package.json start points to app.js
CMD ["npm", "start"]
