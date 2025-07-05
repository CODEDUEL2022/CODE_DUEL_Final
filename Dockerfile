FROM node:18.16.0-slim
RUN apt-get update && \
    apt-get install -y locales curl && \
    apt update && \
    apt install -y procps
# RUN locale-gen ja_JP.UTF-8
RUN localedef -i ja_JP -c -f UTF-8 -A /usr/share/locale/locale.alias ja_JP.UTF-8
ENV LANG ja_JP.UTF-8
ENV TZ Asia/Tokyo
WORKDIR /app
COPY ./api/package.json ./
COPY ./api/package-lock.json ./
RUN npm install
CMD ["npm", "run", "start:dev"]