# Use the official Nginx image as the base
FROM nginx:alpine

# Remove the default Nginx configuration
RUN rm /etc/nginx/conf.d/default.conf

# Copy your custom Nginx configuration
COPY nginx/default.conf /etc/nginx/conf.d/
