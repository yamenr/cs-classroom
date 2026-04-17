#!/bin/bash
# CS Classroom — GitHub Pages Deploy
# This script will auto-run when double-clicked

cd "$(dirname "$0")"
echo "🎓 Deploying CS Classroom to GitHub Pages..."
echo ""

# Check gh
if ! command -v gh &> /dev/null; then
    echo "❌ GitHub CLI (gh) not found. Install from https://cli.github.com/"
    echo "Press any key to close..."
    read -n 1
    exit 1
fi

if ! gh auth status &> /dev/null 2>&1; then
    echo "❌ GitHub CLI not authenticated. Run: gh auth login"
    echo "Press any key to close..."
    read -n 1
    exit 1
fi

GH_USER=$(gh api user --jq '.login')
REPO_NAME="cs-classroom"
echo "✓ Logged in as: $GH_USER"

# Clean git state
rm -rf .git

# Init and commit
git init -b main
git add index.html csharp.html android.html automata.html admin.html style.css script.js data.js subject-renderer.js
git commit -m "CS Classroom: Arabic educational platform with admin panel"

# Create repo and push
echo ""
echo "📦 Creating GitHub repository..."
gh repo create "$REPO_NAME" --public --source=. --push 2>&1

# Enable GitHub Pages
echo ""
echo "🌐 Enabling GitHub Pages..."
sleep 2
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
echo "✅ Done!"
echo ""
echo "🔗 Repo: https://github.com/$GH_USER/$REPO_NAME"
echo "🌐 Site: https://$GH_USER.github.io/$REPO_NAME/"
echo ""
echo "⏳ GitHub Pages takes 1-2 min to go live."
echo "============================================"
echo ""
echo "Press any key to close..."
read -n 1
