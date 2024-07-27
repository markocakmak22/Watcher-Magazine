FROM python:3.11-slim

ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

WORKDIR /watcher_magazine

COPY ./watcher_magazine/requirements.txt /watcher_magazine/
RUN pip install --no-cache-dir -r requirements.txt

COPY ./watcher_magazine /watcher_magazine
RUN python manage.py migrate

CMD ["sh", "-c", "python manage.py runserver 0.0.0.0:8000"]