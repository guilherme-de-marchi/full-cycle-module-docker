FROM golang AS build
WORKDIR /go/src/hello-go/

COPY main.go /go/src/hello-go/

RUN go build main.go

FROM scratch

COPY --from=build /go/src/hello-go/main .

CMD [ "./main" ]