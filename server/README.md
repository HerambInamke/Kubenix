# InsightForge API

## Setup

```bash
cd server
python -m venv venv
venv\Scripts\activate  # PowerShell on Windows
pip install -r requirements.txt
uvicorn app.main:app --reload
```

## Environment Variables

Refer to `.env` for AWS credentials used by the S3 integration.

