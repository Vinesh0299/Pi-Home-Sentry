FROM golang:tip-alpine3.22

COPY . /app

WORKDIR /app

RUN go mod download

RUN go build -o main .

CMD ["./main"]