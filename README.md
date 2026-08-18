
# 🔒 Security & Credentials Setup

To protect sensitive credentials (API tokens) from being leaked into public or shared code repositories, this project uses environment variables via a local `.env` file. 

The `.env` file is excluded from git tracking via `.gitignore` and **must never be pushed to version control**.

## Setup Instructions:

1. **Create your local environment file:**
   In the root directory of this project, create a new file named exactly:
   ```env
   .env
   ```

2. **Add your secret tokens and credentials:**
   Open the `.env` file and input your local test credentials and tokens 