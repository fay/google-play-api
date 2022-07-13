FROM node:16
WORKDIR /usr/src/app/google-play-api
COPY . .
RUN cd /usr/src/app/google-play-api && \
    npm install && \
    rm -rf /var/lib/apt/lists/* && \
    apt-get clean
EXPOSE 3000
CMD ["npm", "start"]
