from pydantic import BaseSettings


class Settings(BaseSettings):
    PROJECT_NAME: str = "InsightForge API"
    API_V1_PREFIX: str = "/api"

    AWS_ACCESS_KEY_ID: str | None = None
    AWS_SECRET_ACCESS_KEY: str | None = None
    AWS_BUCKET_NAME: str | None = None
    AWS_REGION: str = "ap-south-1"

    class Config:
        env_file = ".env"


settings = Settings()

