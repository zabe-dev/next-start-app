# Next.js Starter App

## Automatic commit message generation

Location: `.git/hooks/prepare-commit-msg`

```
#!/bin/bash

# Determine the project root directory
PROJECT_ROOT="$(git rev-parse --show-toplevel)"

# Path to the Node.js script
COMMIT_MESSAGE_SCRIPT="$PROJECT_ROOT/scripts/generate-commit-message.js"

# Check if the script exists
if [ ! -f "$COMMIT_MESSAGE_SCRIPT" ]; then
    echo "Error: Commit message generation script not found at $COMMIT_MESSAGE_SCRIPT"
    exit 1
fi

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "Error: Node.js is not installed"
    exit 1
fi

# Check if .env file exists
ENV_FILE="$PROJECT_ROOT/.env"
if [ ! -f "$ENV_FILE" ]; then
    echo "Error: .env file not found at $ENV_FILE"
    exit 1
fi

# Run the commit message generation script
node "$COMMIT_MESSAGE_SCRIPT" "$1"
```

Make the git hook executable:
`chmod +x .git/hooks/prepare-commit-msg`
