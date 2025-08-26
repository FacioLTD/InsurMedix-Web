# InsurMedix Development Guide

This guide provides comprehensive solutions to prevent and fix common development issues.

## 🚀 Quick Start

### Option 1: Automated Setup (Recommended)
```bash
# Run the comprehensive setup script
./scripts/setup-dev.sh

# Start development server
npm run dev
```

### Option 2: Manual Setup
```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

## 🔧 Available Scripts

- `npm run dev` - Smart development server with automatic port management
- `npm run dev:clean` - Clean development server (clears cache)
- `npm run dev:port` - Development server on specific port
- `npm run build` - Production build
- `npm run start` - Production server
- `npm run test` - Run test suite
- `npm run test:watch` - Watch mode tests

## 🚨 Common Issues & Solutions

### 1. Port Already in Use (3000/3001)
**Symptoms:**
- "Port 3000 is in use, trying 3001 instead"
- Browser shows 404 errors for static files
- Styles don't load properly

**Solutions:**
```bash
# Kill all processes on ports 3000 and 3001
lsof -ti:3000 | xargs kill -9
lsof -ti:3001 | xargs kill -9

# Or use the automated script
./scripts/setup-dev.sh
```

### 2. Static Files Not Loading (404 Errors)
**Symptoms:**
- `Failed to load resource: 404 (Not Found)`
- `main-app.js`, `app-pages-internals.js` not found
- CSS files not loading

**Solutions:**
```bash
# Clean build artifacts
rm -rf .next
rm -rf node_modules/.cache

# Restart development server
npm run dev:clean
```

### 3. Styles Not Working
**Symptoms:**
- Tailwind CSS not applied
- Components look unstyled
- Layout broken

**Solutions:**
```bash
# Clear all caches
rm -rf .next
rm -rf node_modules/.cache
rm -rf .swc

# Reinstall dependencies
rm -rf node_modules
npm install

# Restart server
npm run dev:clean
```

### 4. Hot Reload Not Working
**Symptoms:**
- Changes don't reflect in browser
- Manual refresh required
- Console shows webpack errors

**Solutions:**
```bash
# Check file watching
npm run dev:clean

# Ensure no file system issues
# (Some cloud storage services can cause issues)
```

### 5. Component Import Errors
**Symptoms:**
- "Module not found" errors
- Components not rendering
- TypeScript compilation errors

**Solutions:**
```bash
# Verify component files exist
ls -la components/ui/

# Check import paths
# Ensure relative paths are correct

# Run tests to verify components
npm test
```

## 🛠️ Development Environment Setup

### Prerequisites
- Node.js 18+ 
- npm 8+
- Git

### Environment Variables
Create `.env.local` file:
```env
NODE_ENV=development
PORT=3000
NEXT_TELEMETRY_DISABLED=1
```

### File Structure Verification
Ensure these files exist:
```
components/ui/
├── Logo.tsx          # Main logo component
├── Icon.tsx          # Icon system
├── Header.tsx        # Header with logo
├── Button.tsx        # Button components
├── Card.tsx          # Card components
└── Footer.tsx        # Footer component
```

## 🔍 Troubleshooting Commands

### Check Port Usage
```bash
# Check what's using port 3000
lsof -i :3000

# Check what's using port 3001
lsof -i :3001
```

### Check Process Status
```bash
# Find Next.js processes
ps aux | grep "next dev"

# Kill all Next.js processes
pkill -f "next dev"
```

### Check File Permissions
```bash
# Ensure scripts are executable
chmod +x scripts/*.sh

# Check file ownership
ls -la scripts/
```

### Verify Dependencies
```bash
# Check for outdated packages
npm outdated

# Check for security issues
npm audit

# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install
```

## 🚀 Production Deployment

### Build for Production
```bash
npm run build
npm start
```

### Environment Variables for Production
```env
NODE_ENV=production
PORT=3000
```

## 📱 Browser Troubleshooting

### Clear Browser Cache
- **Chrome/Edge**: Ctrl+Shift+R (Cmd+Shift+R on Mac)
- **Firefox**: Ctrl+F5 (Cmd+F5 on Mac)
- **Safari**: Cmd+Option+R

### Check Browser Console
- Open Developer Tools (F12)
- Check Console tab for errors
- Check Network tab for failed requests

### Disable Browser Extensions
- Some ad blockers can interfere with development
- Try incognito/private browsing mode

## 🔄 Development Workflow

### 1. Always Start Fresh
```bash
# Use the setup script for clean environment
./scripts/setup-dev.sh
```

### 2. Monitor Console Output
- Watch for port conflicts
- Check for build errors
- Monitor file watching

### 3. Use Clean Commands
```bash
# When in doubt, use clean commands
npm run dev:clean
```

### 4. Regular Maintenance
```bash
# Weekly cleanup
./scripts/setup-dev.sh
```

## 📞 Getting Help

If you encounter issues not covered here:

1. **Check the console output** for specific error messages
2. **Run the setup script** to reset the environment
3. **Check file permissions** and ownership
4. **Verify all required files exist**
5. **Check for port conflicts**

## 🎯 Best Practices

- Always use the provided scripts instead of manual commands
- Keep the development environment clean
- Monitor port usage
- Use the setup script when switching between projects
- Keep dependencies updated
- Run tests regularly

---

**Remember**: The automated scripts are designed to prevent these issues. Use `./scripts/setup-dev.sh` for the most reliable development experience.
