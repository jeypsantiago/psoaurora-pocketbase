FROM golang:1.25 AS builder

WORKDIR /src

COPY go.mod go.sum ./
RUN go mod download

COPY . .

WORKDIR /src/examples/base

ENV CGO_ENABLED=0
ENV GOOS=linux
ENV GOARCH=amd64

RUN go build -o /out/pocketbase

FROM debian:bookworm-slim

WORKDIR /pb

COPY --from=builder /out/pocketbase /pb/pocketbase

EXPOSE 8090

CMD ["./pocketbase", "serve", "--http=0.0.0.0:8090", "--dir=/pb/pb_data"]
