FROM nginx:1.25.3

COPY index.html /usr/share/nginx/html/index.html
COPY confetti.gif /usr/share/nginx/html/confetti.gif

LABEL maintainer="Sven Gerber"

EXPOSE 80

RUN touch /usr/share/nginx/html/myfile.html
RUN echo "Hello World" > /usr/share/nginx/html/myfile.html

#USER myuser:mygroup

CMD ["nginx", "-g", "daemon off;"]
