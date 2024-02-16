FROM bitnami/golang:1.13 as builder
RUN go get github.com/urfave/negroni
COPY server.go /
RUN CGO_ENABLED=0 GOOS=linux go build -o /server /server.go

FROM alpine:latest
RUN apk --no-cache add ca-certificates
WORKDIR /app/
COPY --from=builder /server /app/server
COPY page.html .
ENV PORT=8080
ENTRYPOINT ["/app/server"]