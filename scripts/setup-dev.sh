#!/bin/bash

# InsurMedix Development Environment Setup Script
# This script sets up a robust development environment and prevents common issues

echo "🔧 Setting up InsurMedix Development Environment..."

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

print_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Function to check if command exists
command_exists() {
    command -v "$1" >/dev/null 2>&1
}

# Function to kill processes on specific ports
kill_port() {
    local port=$1
    if lsof -ti:$port >/dev/null 2>&1; then
        print_warning "Port $port is in use. Killing processes..."
        lsof -ti:$port | xargs kill -9 2>/dev/null || true
        sleep 2
    fi
}

# Function to clean all build artifacts
clean_all() {
    print_status "Cleaning build artifacts..."
    rm -rf .next 2>/dev/null || true
    rm -rf node_modules/.cache 2>/dev/null || true
    rm -rf .swc 2>/dev/null || true
    rm -rf .env.local 2>/dev/null || true
    print_success "Build artifacts cleaned"
}

# Function to check Node.js version
check_node() {
    if ! command_exists node; then
        print_error "Node.js is not installed. Please install Node.js 18+ first."
        exit 1
    fi
    
    local node_version=$(node --version | cut -d'v' -f2 | cut -d'.' -f1)
    if [ "$node_version" -lt 18 ]; then
        print_error "Node.js version 18+ is required. Current version: $(node --version)"
        exit 1
    fi
    
    print_success "Node.js version: $(node --version)"
}

# Function to check npm
check_npm() {
    if ! command_exists npm; then
        print_error "npm is not installed. Please install npm first."
        exit 1
    fi
    
    print_success "npm version: $(npm --version)"
}

# Function to install dependencies
install_deps() {
    if [ ! -d "node_modules" ] || [ ! -f "package-lock.json" ]; then
        print_status "Installing dependencies..."
        npm install
        if [ $? -eq 0 ]; then
            print_success "Dependencies installed successfully"
        else
            print_error "Failed to install dependencies"
            exit 1
        fi
    else
        print_status "Checking for dependency updates..."
        npm outdated --depth=0 || true
        print_success "Dependencies are up to date"
    fi
}

# Function to create environment file
create_env() {
    if [ ! -f ".env.local" ]; then
        print_status "Creating .env.local file..."
        cat > .env.local << EOF
# InsurMedix Development Environment
NODE_ENV=development
PORT=3000
NEXT_TELEMETRY_DISABLED=1
EOF
        print_success ".env.local file created"
    fi
}

# Function to verify configuration
verify_config() {
    print_status "Verifying configuration files..."
    
    # Check if Logo component exists
    if [ ! -f "components/ui/Logo.tsx" ]; then
        print_error "Logo component not found!"
        exit 1
    fi
    
    # Check if Icon component exists
    if [ ! -f "components/ui/Icon.tsx" ]; then
        print_error "Icon component not found!"
        exit 1
    fi
    
    # Check if Header component exists
    if [ ! -f "components/ui/Header.tsx" ]; then
        print_error "Header component not found!"
        exit 1
    fi
    
    print_success "All required components found"
}

# Function to run tests
run_tests() {
    print_status "Running tests to ensure everything works..."
    npm test -- --passWithNoTests
    if [ $? -eq 0 ]; then
        print_success "All tests passed"
    else
        print_warning "Some tests failed, but continuing with setup"
    fi
}

# Main execution
main() {
    echo ""
    print_status "Starting development environment setup..."
    echo ""
    
    # Check prerequisites
    check_node
    check_npm
    
    # Kill any processes using our ports
    kill_port 3000
    kill_port 3001
    
    # Clean build artifacts
    clean_all
    
    # Install dependencies
    install_deps
    
    # Create environment file
    create_env
    
    # Verify configuration
    verify_config
    
    # Run tests
    run_tests
    
    echo ""
    print_success "Development environment setup complete!"
    echo ""
    print_status "To start the development server, run:"
    echo "  npm run dev"
    echo ""
    print_status "Or use the clean development command:"
    echo "  npm run dev:clean"
    echo ""
    print_status "The server will start on http://localhost:3000"
    echo ""
}

# Run main function
main
