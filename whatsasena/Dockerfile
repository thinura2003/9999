FROM fusuf/whatsasena:latest

RUN git clone https://github.com/No99x/9999 /root/9999
WORKDIR /root/9999/
ENV TZ=Europe/Istanbul
RUN npm install supervisor -g
RUN yarn install --no-audit

CMD ["node", "bot.js"]
