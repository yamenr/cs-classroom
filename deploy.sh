#!/bin/bash
# ============================================
# CS Classroom - GitHub Pages Deploy Script
# Run this from inside the classroom-site folder
# ============================================

set -e

echo "🎓 Deploying CS Classroom to GitHub Pages..."
echo ""

# Check gh is installed
if ! command -v gh &> /dev/null; then
    echo "❌ GitHub CLI (gh) is not installed."
    echo "   Install it from: https://cli.github.com/"
    exit 1
fi

# Check gh is authenticated
if ! gh auth status &> /dev/null 2>&1; then
    echo "❌ GitHub CLI is not authenticated."
    echo "   Run: gh auth login"
    exit 1
fi

# Get GitHub username
GH_USER=$(gh api user --jq '.login')
REPO_NAME="cs-classroom"

echo "✓ Logged in as: $GH_USER"
echo "✓ Repository: $REPO_NAME"
echo ""

# Remove old .git if exists, and deploy script itself from tracking
rm -rf .git

# Init fresh repo
git init -b main
git add -A

# Remove deploy script from git tracking
git reset HEAD deploy.sh 2>/dev/null || true
echo "deploy.sh" >> .gitignore
git add .gitignore

git commit -m "CS Classroom: Arabic educational platform with admin panel"

# Create GitHub repo (public, for GitHub Pages)
echo ""
echo "📦 Creating GitHub repository..."
gh repo create "$REPO_NAME" --public --source=. --push

# Enable GitHub Pages on main branch
echo ""
echo "🌐 Enabling GitHub Pages..."
gh api -X POST "repos/$GH_USER/$REPO_NAME/pages" \
  -f "source[branch]=main" \
  -f "source[path]=/" \
  --silent 2>/dev/null || \
gh api -X PUT "repos/$GH_USER/$REPO_NAME/pages" \
  -f "source[branch]=main" \
  -f "source[path]=/" \
  --silent 2>/dev/null || true

echo ""
echo "============================================"
echo "✅ Done! Your site is deploying now."
echo ""
echo "🔗 Repository: https://github.com/$GH_USER/$REPO_NAME"
echo "🌐 Live site:  https://$GH_USER.github.io/$REPO_NAME/"
echo ""
echo "⏳ GitHub Pages may take 1-2 minutes to go live."
echo "============================================"
