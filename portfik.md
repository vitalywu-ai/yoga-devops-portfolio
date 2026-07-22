# Run Portfolio via Docker

Prerequisites: **Docker Desktop** installed.

1. Create a `docker-compose.yml` with the following config:

```yaml
version: '3.8'

services:
  web:
    image: vitalywu/portfolio-web:latest 
    ports:
      - "3000:3000"
    environment:
      - DATABASE_URL=postgresql://dev_user:super_secret_password@db:5432/portfolio_db
    depends_on:
      - db

  db:
    image: postgres:15-alpine
    environment:
      POSTGRES_USER: dev_user
      POSTGRES_PASSWORD: super_secret_password
      POSTGRES_DB: portfolio_db
    ports:
      - "5432:5432"
    volumes:
      - postgres_data:/var/lib/postgresql/data

volumes:
  postgres_data: