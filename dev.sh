#!/bin/bash

# Function to check if a port is in use
check_port() {
    lsof -i :8000 > /dev/null 2>&1
    return $?
}

# Function to kill process on port 8000
kill_port() {
    lsof -ti:8000 | xargs kill -9 2>/dev/null
}

# Kill any existing process on port 8000
kill_port

# Wait a moment to ensure the port is free
sleep 1

# Start the server
echo "Starting development server..."
echo "Visit http://localhost:8000 to view your site"
echo "Press Ctrl+C to stop the server"
echo "----------------------------------------"

python3 -m http.server 8000 