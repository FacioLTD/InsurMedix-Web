#!/bin/bash

# InsurMedix Development Server Script
# This script ensures a clean development environment and handles port conflicts

echo "🚀 Starting InsurMedix Development Server..."

# Function to check if port is in use
check_port() {
    local port=$1
    if lsof -Pi :$port -sTCP:LISTEN -t >/dev/null ; then
        echo "⚠️  Port $port is in use. Attempting to free it..."
        lsof -ti:$port | xargs kill -9 2>/dev/null || true
        sleep 2
    fi
}

# Function to clean build artifacts
clean_build() {
    echo "🧹 Cleaning build artifacts..."
    rm -rf .next 2>/dev/null || true
    rm -rf node_modules/.cache 2>/dev/null || true
    rm -rf .swc 2>/dev/null || true
}

# Function to check dependencies
check_deps() {
    if [ ! -d "node_modules" ]; then
        echo "📦 Installing dependencies..."
        npm install
    fi
}

# Main execution
main() {
    # Check and install dependencies if needed
    check_deps
    
    # Clean build artifacts
    clean_build
    
    # Check and free port 3000
    check_port 3000
    
    # Start development server
    echo "🌟 Starting development server on port 3000..."
    echo "📱 Open http://localhost:3000 in your browser"
    echo "🔄 Press Ctrl+C to stop the server"
    echo ""
    
    # Start Next.js dev server with explicit port
    PORT=3000 npm run dev
}

# Run main function
main
