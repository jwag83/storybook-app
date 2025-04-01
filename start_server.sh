#!/bin/bash

# Kill any existing Python HTTP server processes
pkill -f "python3 -m http.server"

# Start a new server
python3 -m http.server 8000 