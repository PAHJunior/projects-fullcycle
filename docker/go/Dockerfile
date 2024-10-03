FROM golang:1.22-alpine AS builder

WORKDIR /usr/src

COPY go.mod ./

RUN go mod download && go mod verify

COPY . .

RUN CGO_ENABLED=0 GOOS=linux GOARCH=amd64 go build -ldflags="-s -w" -o /usr/src/app .

FROM scratch

COPY --from=builder /usr/src/app /app

ENTRYPOINT ["/app"]