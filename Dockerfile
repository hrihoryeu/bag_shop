FROM python:3.9-alpine
ENV PYTHONUNBUFFERED 1
WORKDIR /usr/src/code/

COPY . .

RUN apk update \
    && apk add postgresql-dev gcc python3-dev musl-dev
RUN pip3 install pipenv && pipenv install --system --deploy --ignore-pipfile

RUN chmod +x ./entrypoint.sh

CMD ["sh", "/usr/src/code/entrypoint.sh"]
